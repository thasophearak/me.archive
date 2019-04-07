import Head from 'next/head'

import Meta from '../components/meta'
import Heading from '../components/shop/heading'

import theme from '../utils/theme'
import layout from '../utils/fixed-columns'

export default class Shop extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      wrap: {},
      photos: []
    }
  }

  componentWillMount() {
    console.log(layout)
  }

  render() {
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
}
