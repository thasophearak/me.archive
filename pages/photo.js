import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import Heading from '../components/shop/heading'
import Meta from '../components/meta'

export default class Photo extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log('componentDidMount')
  }

  render() {
    return (
      <div>
        <Meta />
        <Head>
          <title>Photo • Sophearak Tha</title>
        </Head>
        <Heading />
      </div>
    )
  }
}
