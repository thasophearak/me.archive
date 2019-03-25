import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import Meta from '../components/meta'
import Slogan from '../components/slogan'
import Nav from '../components/nav'
import Footer from '../components/footer'

import theme from '../utils/theme'
import layout from '../utils/fixed-partition'
import data from '../utils/data-afk'

export default class Afk extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      wrap: {},
      photos: []
    }
  }

  computeLayout() {
    let idealHeight = 320
    const containerW = document.querySelector('.container')
    if (window.innerWidth < 600) {
      idealHeight = 200
    }

    const photo = layout(data, {
      containerWidth: containerW.clientWidth - 32,
      idealElementHeight: idealHeight,
      spacing: 0
    })
    const photos = [],
      positions = photo.positions
    positions.forEach((position, index) => {
      photos.push({
        title: data[index].title,
        path: data[index].path,
        url: data[index].url,
        tags: data[index].tags,
        inline: {
          width: `${positions[index].width}px`,
          height: `${positions[index].height}px`,
          top: `${positions[index].y}px`,
          left: `${positions[index].x}px`
        }
      })
    })

    this.setState({
      wrap: {
        width: `${photo.width}px`,
        height: `${photo.height}px`
      },
      photos
    })
  }

  componentDidMount() {
    ;(() => {
      const throttle = (type, name, obj) => {
        obj = obj || window
        let running = false
        const func = () => {
          if (running) {
            return
          }
          running = true
          requestAnimationFrame(() => {
            obj.dispatchEvent(new CustomEvent(name))
            running = false
          })
        }
        obj.addEventListener(type, func)
      }
      throttle('resize', 'optimizedResize')
    })()

    window.addEventListener('optimizedResize', this.computeLayout.bind(this))
    this.computeLayout()
  }

  componentWillUnmount() {
    window.removeEventListener('optimizedResize', this.computeLayout.bind(this))
  }

  render() {
    const { wrap, photos } = this.state

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

          <div className="wrap" style={wrap}>
            {photos.map((photo, index) => (
              <a href={photo.url} key={index}>
                <img src={photo.path} alt={photo.title} style={photo.inline} />
                <span className="tags">
                  {photo.tags.map((tag, index) => (
                    <span className="tag" key={index}>
                      {tag}
                    </span>
                  ))}
                </span>
              </a>
            ))}
          </div>

          <Footer />
        </div>

        <style jsx>{`
          .wrap {
            position: relative;
          }
          .wrap a {
            display: flex;
            font-size: 0;
            float: left;
            margin: 0;
            padding: 0;
            position: relative;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            border-radius: 0;
          }
          img {
            transition: transform 3s ease-out;
          }
          img:hover {
            transform: scale(1.2);
          }

          img:hover + .title {
            display: none;
          }

          img:hover + .tags {
            transform: translateY(32px);
            opacity: 0;
          }

          .title {
            position: absolute;
            color: ${theme.foregroundColor};
            background: ${theme.backgroundColor};
            padding: 6px 12px;
            font-size: 18px;
            line-height: 1;
            border-radius: 4px;
          }
          .tags {
            position: absolute;
            bottom: 12px;
            transition: all ${theme.transition};
            opacity: 1;
          }
          .tag {
            font-size: 14px;
            line-height: 1;
            background: #fff;
            color: ${theme.backgroundColor};
            margin-right: 8px;
            padding: 3px 6px;
            border-radius: 2px;
          }
        `}</style>
      </div>
    )
  }
}
