import Head from 'next/head'
import Link from 'next/link'

import Meta from '../components/meta'
import Slogan from '../components/slogan'
import Social from '../components/social'
import Nav from '../components/nav'

function Shop() {
  return (
    <div>
      <Meta />
      <Head>
        <title>Shop • Sophearak Tha</title>
      </Head>

      <div className="container heading">
        <Link prefetch href="/">
          <img
            className="profile"
            src="/static/profile.jpg"
            alt="Sophearak Tha"
          />
        </Link>
        <h1>Sophearak Tha</h1>

        <Slogan />
        <Social />
      </div>

      <style jsx>{`
        .heading {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 64px 16px;
        }
        .profile {
          width: 120px;
          height: 120px;
          border-radius: 60px;
          padding: 3px;
          background: #fff;
          cursor: pointer;
        }
        h1 {
          font-size: 24px;
          line-height: 1.5;
          margin-top: 12px;
        }
      `}</style>
    </div>
  )
}

export default Shop
