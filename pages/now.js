import Head from 'next/head'
import Link from 'next/link'

import Meta from '../components/meta'
import Slogan from '../components/slogan'
import Nav from '../components/nav'

function Metadata() {
  return (
    <div>
      <Meta />
      <Head>
        <title>Now • Sophearak Tha</title>
      </Head>

      <div className="container">
        <h1>
          <Link prefetch href="/">
            <a>Sophearak Tha</a>
          </Link>
        </h1>

        <Slogan />
        <Nav />
      </div>
    </div>
  )
}

export default Metadata
