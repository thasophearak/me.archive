import Head from 'next/head'
import Link from 'next/link'

import Meta from '../components/meta'
import Slogan from '../components/slogan'
import Nav from '../components/nav'
import Footer from '../components/footer'
import theme from '../utils/theme'

function Metadata() {
  return (
    <div>
      <Meta />
      <Head>
        <title>Metadata • Sophearak Tha</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="container">
        <h1>
          <Link prefetch href="/">
            <a>Sophearak Tha</a>
          </Link>
        </h1>

        <Slogan />
        <Nav />

        <p className="mb-24">hi[at]sophearak[dot]me</p>

        <div className="timeline">
          <div className="present">
            <span className="dot current" />
            <span className="heading">Present</span>
            <p>
              Automation at <a href="https://zeit.co/">ZEIT</a>
            </p>
            <p className="with-svg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
                <path
                  fill="#FFAC33"
                  d="M16 2s0-2 2-2 2 2 2 2v2s0 2-2 2-2-2-2-2V2zm18 14s2 0 2 2-2 2-2 2h-2s-2 0-2-2 2-2 2-2h2zM4 16s2 0 2 2-2 2-2 2H2s-2 0-2-2 2-2 2-2h2zm5.121-8.707s1.414 1.414 0 2.828-2.828 0-2.828 0L4.878 8.708s-1.414-1.414 0-2.829c1.415-1.414 2.829 0 2.829 0l1.414 1.414zm21 21s1.414 1.414 0 2.828-2.828 0-2.828 0l-1.414-1.414s-1.414-1.414 0-2.828 2.828 0 2.828 0l1.414 1.414zm-.413-18.172s-1.414 1.414-2.828 0 0-2.828 0-2.828l1.414-1.414s1.414-1.414 2.828 0 0 2.828 0 2.828l-1.414 1.414zm-21 21s-1.414 1.414-2.828 0 0-2.828 0-2.828l1.414-1.414s1.414-1.414 2.828 0 0 2.828 0 2.828l-1.414 1.414zM16 32s0-2 2-2 2 2 2 2v2s0 2-2 2-2-2-2-2v-2z"
                />
                <circle fill="#FFAC33" cx="18" cy="18" r="10" />
              </svg>{' '}
              | Automate whatever possible
            </p>
            <p className="mb-24 with-svg">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36">
                <path
                  fill="#FFD983"
                  d="M30.312.776C32 19 20 32 .776 30.312c8.199 7.717 21.091 7.588 29.107-.429C37.9 21.867 38.03 8.975 30.312.776z"
                />
                <path
                  d="M30.705 15.915c-.453.454-.453 1.189 0 1.644.454.453 1.189.453 1.643 0 .454-.455.455-1.19 0-1.644-.453-.454-1.189-.454-1.643 0zm-16.022 14.38c-.682.681-.682 1.783 0 2.465.68.682 1.784.682 2.464 0 .681-.682.681-1.784 0-2.465-.68-.682-1.784-.682-2.464 0zm13.968-2.147c-1.135 1.135-2.974 1.135-4.108 0-1.135-1.135-1.135-2.975 0-4.107 1.135-1.136 2.974-1.136 4.108 0 1.135 1.133 1.135 2.973 0 4.107z"
                  fill="#FFCC4D"
                />
              </svg>{' '}
              | A panic <a href="https://golang.org/">Gopher</a>
            </p>
          </div>
          <div className="past">
            <span className="dot past" />
            <p>
              Apr 2018 - Feb 2019 |{' '}
              <a href="https://www.okoone.com/">
                <span>Okoone</span>
              </a>{' '}
              - Web Developer •{' '}
              <a href="https://www.typescriptlang.org/">TypeScript</a>
            </p>
          </div>
          <div className="past">
            <span className="dot past" />
            <p>
              Apr 2017 - Mar 2018 |{' '}
              <a href="https://www.dragonmetrics.com/">
                <span>Dragon Metrics</span>
              </a>{' '}
              - Web Developer •{' '}
              <a href="https://en.wikipedia.org/wiki/JavaScript">JavaScript</a>
            </p>
          </div>
          <div className="past">
            <span className="dot past" />
            <p>
              Jan 2015 - Mar 2017 | <span>Bandanh</span> - Web Developer •{' '}
              <a href="https://typo3.org/">TYPO3</a>
            </p>
          </div>
          <div className="past">
            <span className="dot past" />
            <p>
              Mar 2014 - Nov 2014 | <span>Luxury Machine</span> - Web Developer
              • <a href="https://magento.com/">Magento</a>
            </p>
          </div>
          <div className="past">
            <span className="dot past" />
            <p>
              Jul 2013 - Feb 2014 | <span>Khmer Enterprises</span> - Web
              Developer • <a href="https://www.drupal.org/">Drupal</a>
            </p>
          </div>
        </div>
        <Footer />
      </div>
      <style jsx>
        {`
          .timeline {
            position: relative;
          }
          .timeline:before {
            content: '';
            display: block;
            width: 2px;
            height: 100%;
            position: absolute;
            left: 0;
            top: 0;
            background: ${theme.lightBlack};
          }
          .past,
          .present {
            position: relative;
          }
          .past p,
          .present p {
            padding-left: 24px;
          }
          .dot {
            position: absolute;
            width: 12px;
            height: 12px;
            border-radius: 6px;
            left: -5px;
            top: 6px;
            background: ${theme.blue};
          }
          .dot.past {
            background: ${theme.magenta};
          }
          .dot.current:before {
            position: absolute;
            top: 50%;
            left: 50%;
            display: block;
            content: '';
            height: 28px;
            width: 28px;
            border-radius: 14px;
            margin: -14px 0 0 -14px;
            animation: pulse 1s linear;
            animation-iteration-count: infinite;
            background: ${theme.blue};
          }
          @keyframes pulse {
            0% {
              transform: scale(0);
              opacity: 0.05;
            }
            20% {
              transform: scale(0.7);
              opacity: 0.1;
            }
            40% {
              transform: scale(0.9);
              opacity: 0.2;
            }
            60% {
              transform: scale(1.1);
              opacity: 0.3;
            }
            100% {
              transform: scale(1.4);
              opacity: 0;
            }
          }
          .heading {
            font-size: 18px;
            color: ${theme.blue};
            display: block;
            margin: 0 0 8px 24px;
          }
          p {
            margin: 0 0 12px;
          }
          p span {
            width: 17ch;
            display: inline-block;
            text-align: right;
          }
          .mb-24 {
            margin-bottom: 24px;
          }
          .ml-24 {
            margin-left: 24px;
          }
          .past .heading {
            color: ${theme.magenta};
          }
          p.with-svg {
            display: flex;
            align-items: center;
          }
          p.with-svg a {
            margin-left: 3px;
            padding: 0 6px;
          }
          svg {
            width: 16px;
            height: 16px;
            margin-right: 8px;
          }
        `}
      </style>
    </div>
  )
}

export default Metadata
