import Head from 'next/head'

import theme from '../utils/theme'

export default () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
    </Head>

    <style jsx global>{`
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
        font-family: ${theme.fonts};
        font-size: 16px;
        line-height: 1.5;
        background: ${theme.backgroundColor};
        color: ${theme.foregroundColor};
        margin: 0;
      }

      h1 {
        margin: 32px 0 6px;
      }
      h1 a {
        font-size: 23px;
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
      a:active,
      a:hover {
        color: ${theme.foregroundColor};
        background: ${theme.lightBlack};
      }

      p {
        max-width: 800px;
        margin: 0 0 16px;
      }

      .container {
        width: 100%;
        max-width: 1000px;
        margin: 0 auto;
        padding: 0 16px;
      }
    `}</style>
  </div>
)
