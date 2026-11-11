import assert from 'node:assert/strict';
import {access,readFile} from 'node:fs/promises';
import test from 'node:test';
const output=new URL('../out/',import.meta.url),origin='https://k53next.co.za';
const decode=(s='')=>s.replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/&#x27;|&#39;/g,"'").replace(/&lt;/g,'<').replace(/&gt;/g,'>');
const tags=(h,n)=>[...h.matchAll(new RegExp(`<${n}\\b[^>]*>`,'gi'))].map(([x])=>x);
const attr=(t,n)=>decode(t.match(new RegExp(`\\b${n}="([^"]*)"`,'i'))?.[1]);
const meta=(h,n)=>attr(tags(h,'meta').find(t=>attr(t,'name')===n||attr(t,'property')===n)||'','content');
const canonical=h=>attr(tags(h,'link').find(t=>attr(t,'rel')==='canonical')||'','href');
const schemas=h=>[...h.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/gi)].flatMap(([,j])=>{const v=JSON.parse(j);return v['@graph']||(Array.isArray(v)?v:[v]);});
const sitemap=await readFile(new URL('sitemap.xml',output),'utf8');
const urls=[...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map(([,u])=>decode(u));
const pages=await Promise.all(urls.map(async url=>({url,html:await readFile(new URL(`${new URL(url).pathname.slice(1)}index.html`,output),'utf8')})));
test('all 25 public pages have unique, self-referencing search and sharing metadata',()=>{
 assert.equal(pages.length,25);assert(urls.includes(`${origin}/iphone/`));
 const titles=new Set(),descs=new Set();
 for(const {url,html:h} of pages){
  const title=decode(h.match(/<title>(.*?)<\/title>/s)?.[1]),description=meta(h,'description');
  assert(title&&!titles.has(title),`missing or duplicate title: ${url}`);titles.add(title);
  assert(description&&!descs.has(description),`missing or duplicate description: ${url}`);descs.add(description);
  assert.equal(canonical(h),url,url);assert.equal(meta(h,'og:url'),url,url);
  for(const n of ['og:title','twitter:title'])assert.equal(meta(h,n),title,url);
  for(const n of ['og:description','twitter:description'])assert.equal(meta(h,n),description,url);
  assert.equal(meta(h,'og:image'),`${origin}/social/k53-next-android-iphone.jpg`,url);
  assert.equal((h.match(/<h1\b/g)||[]).length,1,url);assert.match(h,/<html lang="en-ZA"/);
  assert.doesNotMatch(meta(h,'robots'),/noindex/);assert.doesNotMatch(h,/localhost|1,574|1,394|codex-preview/);
 }
});
test('structured data is valid and describes the actual Android and iPhone apps',()=>{
 for(const {url,html:h} of pages){const d=schemas(h),ids=d.map(x=>x['@id']).filter(Boolean);assert.equal(new Set(ids).size,ids.length,url);for(const type of ['Organization','WebSite'])assert.equal(d.filter(x=>x['@type']===type).length,1,url);assert(d.every(x=>!x.aggregateRating));}
 for(const path of ['/','/iphone/','/download/','/learners-licence-app/']){const d=schemas(pages.find(x=>x.url===`${origin}${path}`).html),w=d.find(x=>x['@type']==='WebApplication');assert.equal(w.url,'https://app.k53next.co.za');assert.match(w.operatingSystem,/iOS/);assert.equal(w.offers.price,'0');if(path!='/iphone/'){const a=d.find(x=>x['@type']==='MobileApplication');assert.equal(a.operatingSystem,'Android');assert.match(a.installUrl,/^https:\/\/play.google.com\/store\/apps\/details\?id=/);}}
});
test('internal page links and dimensioned image assets resolve in the static export',async()=>{
 const targets=new Set();for(const {url,html:h} of pages){for(const image of tags(h,'img')){assert(image.includes('alt="'),url);assert(+attr(image,'width')>0&&+attr(image,'height')>0,`image needs dimensions: ${url} ${attr(image,'src')}`);const src=attr(image,'src');if(src.startsWith('/'))targets.add(src.split('?')[0]);}for(const a of tags(h,'a')){const href=attr(a,'href');if(href.startsWith('/')&&!href.startsWith('//'))targets.add(href.split(/[?#]/)[0]);}}
 for(const path of targets)await access(new URL(path.slice(1)+(path.endsWith('/')?'index.html':''),output));
});
test('iPhone installation, optional notifications and Android discovery are server rendered',()=>{
 const h=pages.find(x=>x.url===`${origin}/`).html,i=pages.find(x=>x.url===`${origin}/iphone/`).html;
 for(const re of [/1,600\+/,/current-home\.webp/,/current-practice\.webp/,/play\.google\.com\/store\/apps\/details/,/https:\/\/app\.k53next\.co\.za/,/official-manuals/,/learner-licence-appointment-documents/])assert.match(h,re);
 for(const re of [/Safari/,/Add to Home Screen/,/16\.4/,/bell/,/study reminders/,/app updates/])assert.match(i,re);
});
test('search discovery, compatibility links and original official manuals are preserved',async()=>{
 const robots=await readFile(new URL('robots.txt',output),'utf8');assert.match(robots,/Sitemap: https:\/\/k53next.co.za\/sitemap.xml/);assert.match(robots,/OAI-SearchBot/);
 const llms=await readFile(new URL('llms.txt',output),'utf8');assert.match(llms,/https:\/\/app\.k53next\.co\.za/);assert.match(llms,/iphone/);
 const legacy=await readFile(new URL('app/index.html',output),'utf8');assert.match(legacy,/noindex/);assert.match(legacy,/https:\/\/app\.k53next\.co\.za/);assert(!urls.includes(`${origin}/app/`));
 assert.equal((await readFile(new URL('CNAME',output),'utf8')).trim(),'k53next.co.za');
 for(const name of ['rules-of-the-road','road-traffic-signs','vehicle-controls'])assert.equal((await readFile(new URL(`manuals/${name}-v100-jun-2012.pdf`,output))).subarray(0,5).toString(),'%PDF-');
 assert.doesNotMatch(pages.find(x=>x.url===`${origin}/`).html,/rel="manifest"/);
});
