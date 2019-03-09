import Head from 'next/head'
import Link from 'next/link'

import Meta from '../components/meta'
import Slogan from '../components/slogan'
import Nav from '../components/nav'
import Footer from '../components/footer'

function Home() {
  return (
    <div>
      <Meta />
      <Head>
        <title>Sophearak Tha</title>
      </Head>

      <div className="container">
        <h1>
          <Link prefetch href="/">
            <a>Sophearak Tha</a>
          </Link>
        </h1>

        <Slogan />
        <Nav />

        <h2>A little bit about me</h2>
        <p>
          I am a web developer from Phnom Penh, Cambodia. I am interested in
          anything that is related to Computer, from Color Correction to Web
          Design to Web Development to DevOps to IoT.
        </p>
        <h2>Want to know more?</h2>
        <p>
          Things with me everyday are 13" MacBook Pro mid 2018 running latest
          version of macOS and Nokia 7 Plus running latest version of Android.
          Once a while I carried Canon 700D with Magic Lantern installed.
        </p>
        <p>
          My default web browser is Google Chrome. My primary code editor is{' '}
          <a href="https://code.visualstudio.com/">Code</a>. I use{' '}
          <a href="https://keep.google.com">Keep</a> to keep things organized.
        </p>

        <Footer />
      </div>
    </div>
  )
}

export default Home
