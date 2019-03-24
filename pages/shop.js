import Head from 'next/head'

import Heading from '../components/shop/heading'
import Meta from '../components/meta'

function Shop() {
  return (
    <div>
      <Meta />
      <Head>
        <title>Shop • Sophearak Tha</title>
      </Head>
      <Heading />
    </div>
  )
}

export default Shop
