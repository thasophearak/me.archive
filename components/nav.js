import Link from 'next/link'

import theme from '../utils/theme'

export default () => (
  <div>
    <nav>
      <Link prefetch href="/">
        <a>me</a>
      </Link>
      <Link prefetch href="/metadata">
        <a>metadata</a>
      </Link>
      <Link prefetch href="/now">
        <a>now</a>
      </Link>
    </nav>

    <style jsx>{`
      nav {
        margin: 0 0 24px;
      }
      a:not(:last-child) {
        margin-right: 8px;
      }
    `}</style>
  </div>
)
