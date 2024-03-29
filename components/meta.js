import Head from 'next/head'

import FontFaceObserver from 'fontfaceobserver'

import theme from '../utils/theme'

export default class Meta extends React.Component {
  componentDidMount() {
    const font = new FontFaceObserver('mononoki')
    font.load().then(() => {
      if (
        document.documentElement.classList.contains('font-loaded') === false
      ) {
        document.documentElement.className += 'font-loaded'
      }
    })
  }
  render() {
    return (
      <div>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/static/favicons/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/favicons/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/static/favicons/favicon-16x16.png"
          />
          <link rel="manifest" href="/static/favicons/site.webmanifest" />
          <link
            rel="mask-icon"
            href="/static/favicons/safari-pinned-tab.svg"
            color="#08090e"
          />
          <meta name="theme-color" content="#08090e" />
        </Head>

        <style jsx global>{`
          @font-face {
            font-family: 'mononoki';
            src: url('/static/fonts/mononoki-Regular.eot?#iefix')
                format('embedded-opentype'),
              /* IE6-IE8 */ url('/static/fonts/mononoki-Regular.woff2')
                format('woff2'),
              /* Super Modern Browsers */
                url('/static/fonts/mononoki-Regular.woff') format('woff'),
              /* Pretty Modern Browsers */
                url('/static/fonts/mononoki-Regular.ttf') format('truetype'); /* Safari, Android, iOS */
            font-weight: normal;
            font-style: normal;
          }
          .font-loaded body {
            font-family: ${theme.fonts};
          }

          *,
          *:before,
          *:after {
            box-sizing: border-box;
          }
          ::-moz-selection {
            color: ${theme.darkBlue};
            background: ${theme.green};
          }
          ::selection {
            color: ${theme.darkBlue};
            background: ${theme.green};
          }
          body {
            font-family: ${theme.mono};
            font-size: 16px;
            line-height: 1.5;
            background: ${theme.backgroundColor};
            color: ${theme.foregroundColor};
            margin: 0;
          }

          h1 {
            line-height: 1;
            margin: 24px 0 12px;
          }
          h1 a {
            font-size: 23px;
            line-height: 1;
            font-weight: 500;
            color: ${theme.green};
            border-radius: 6px;
          }

          h2 {
            font-size: 16px;
            line-height: 1.5;
            font-weight: 400;
            margin: 0 0 12px;
            color: ${theme.blue};
          }

          a {
            color: ${theme.green};
            text-decoration: none;
            padding: 3px 6px;
            border-radius: 4px;
            transition: all ${theme.transition};

            margin-left: -6px;
            margin-right: -6px;
          }

          nav a.active,
          a:active,
          a:hover {
            color: ${theme.foregroundColor};
            background: ${theme.lightBlack};
          }

          nav a:not(:last-child) {
            margin-right: 8px;
          }

          p {
            max-width: 720px;
            margin: 0 0 16px;
          }

          .container {
            width: 100%;
            max-width: 1000px;
            margin: 0 auto;
            padding: 0 16px;
          }
          @media screen and (min-width: 580px) {
            h1 {
              margin: 32px 0 8px;
            }
          }
        `}</style>
      </div>
    )
  }
}
