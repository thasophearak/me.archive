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
            <p>Things I do everyday | Automate whatever possible</p>
            <p className="mb-24">
              During the night | A panic{' '}
              <a href="https://golang.org/">Gopher</a>
            </p>
          </div>
          <div className="past">
            <span className="dot past" />
            <p>
              Apr 2018 - Feb 2019 | <a href="https://www.okoone.com/">Okoone</a>{' '}
              - Web Developer -{' '}
              <a href="https://www.typescriptlang.org/">TypeScript</a>
            </p>
          </div>
          <div className="past">
            <span className="dot past" />
            <p>
              Apr 2017 - Mar 2018 |{' '}
              <a href="https://www.dragonmetrics.com/">Dragon Metrics</a> - Web
              Developer -{' '}
              <a href="https://en.wikipedia.org/wiki/JavaScript">JavaScript</a>
            </p>
          </div>
          <div className="past">
            <span className="dot past" />
            <p>
              Jan 2015 - Mar 2017 | Bandanh - Web Developer -{' '}
              <a href="https://typo3.org/">TYPO3</a>
            </p>
          </div>
          <div className="past">
            <span className="dot past" />
            <p>
              Mar 2014 - Nov 2014 | Luxury Machine - Web Developer -{' '}
              <a href="https://magento.com/">Magento</a>
            </p>
          </div>
          <div className="past">
            <span className="dot past" />
            <p>
              Jul 2013 - Feb 2014 | Khmer Enterprises - Web Developer -{' '}
              <a href="https://www.drupal.org/">Drupal</a>
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
          .mb-24 {
            margin-bottom: 24px;
          }
          .ml-24 {
            margin-left: 24px;
          }
          .past .heading {
            color: ${theme.magenta};
          }
        `}
      </style>
    </div>
  )
}

export default Metadata
