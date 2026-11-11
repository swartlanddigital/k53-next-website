import Link from "next/link";
import { APP_URL, GooglePlayButton, Icon, IPhoneButton } from "./components";

export function PlatformCards() {
  return <div className="platform-grid">
    <article className="platform-card iphone-card" id="iphone"><div className="platform-label"><Icon name="phone"/><span>iPhone & iPad</span><span className="status-pill">Available now</span></div><h3>Your iPhone.<br/>Your K53 study app.</h3><p>Install the web app from Safari and launch K53 Next from your Home Screen.</p><ol className="install-list"><li>Open <a href={APP_URL}>app.k53next.co.za</a> in Safari.</li><li>Tap Share, then Add to Home Screen.</li><li>Open the K53 Next icon and choose your vehicle.</li></ol><IPhoneButton>Open the iPhone web app</IPhoneButton><Link className="text-link" href="/iphone/">iPhone setup and notifications <Icon/></Link></article>
    <article className="platform-card android-card" id="android"><div className="platform-label"><Icon name="check"/><span>Android</span><span className="status-pill">On Google Play</span></div><h3>Download.<br/>Open. Start learning.</h3><p>Get the Android app from Google Play, with study material ready on your device.</p><ol className="install-list"><li>Open the K53 Next Google Play listing.</li><li>Install the app and choose your vehicle.</li><li>Start practising, then return to your weak areas.</li></ol><GooglePlayButton>Get it on Google Play</GooglePlayButton><Link className="text-link" href="/learners-licence-app/">Explore the study features <Icon/></Link></article>
    <p className="platform-browser">On a computer, or prefer to start right away? <a href={APP_URL}>Use K53 Next in your browser <Icon/></a></p>
  </div>;
}
