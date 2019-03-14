import Head from 'next/head'
import Link from 'next/link'

import Meta from '../components/meta'
import Slogan from '../components/slogan'
import Nav from '../components/nav'
import Footer from '../components/footer'

function Afk() {
  return (
    <div>
      <Meta />
      <Head>
        <title>AFK • Sophearak Tha</title>
      </Head>

      <div className="container">
        <h1>
          <Link prefetch href="/">
            <a>Sophearak Tha</a>
          </Link>
        </h1>

        <Slogan />
        <Nav />

        <Footer />
      </div>
    </div>
  )
}

export default Afk
