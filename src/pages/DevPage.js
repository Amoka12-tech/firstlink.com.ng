import './index';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import bkgImg from '../images/firstLinkLogo.jpg';

function DevPage() {
  return (
    <div className="container">
      <main>
        <h1 className="title">
          AMFISLMMF First Link Nig. Ltd. <span style={{ fontSize: 12 }}>RC: 1153706</span>
          {/* Read{' '}
          <Link href="/posts/first-post">
            <a>this page!</a>
          </Link> */}
        </h1>

        <p className="description">
          Welcome <code>currently we are working on a better versoin of this web, 
            content will be available soon.
          </code>
        </p>

        <div className="holder">
          <div style={{ width: '100%' }}>
            <h4>Contact us</h4>
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center',  justifyItems: 'center' }}>
              <FontAwesomeIcon color='blue' style={{ width: 15, height: 15, marginRight: 5 }} size='sm' icon={faFacebook} />
              <a href="https://facebook.com/firstlinkict">www.facebook.com/firstlinkict</a>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center',  justifyItems: 'center' }}>
              <FontAwesomeIcon color='red' style={{ width: 15, height: 15, marginRight: 5 }} size='sm' icon={faEnvelope} />
              <p>info@firstlink.com.ng</p>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center',  justifyItems: 'center' }}>
              <FontAwesomeIcon style={{ width: 15, height: 15, marginRight: 5 }} size='sm' icon={faPhone} />
              <p>+2348034329120, +2348021202751, +2348166606190</p>
            </div>
          </div>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          &#169;2021 All right reserved {' '}
          <img src="/firstLinkLogo.ico" alt="Vercel Logo" className="logo" />
          {'   '} First Link ICT Design
        </a>
      </footer>
      </div>
  );
}

export default DevPage;
