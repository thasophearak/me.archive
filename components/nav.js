import ActiveLink from './active-link'

import theme from '../utils/theme'

export default () => (
  <div>
    <nav>
      <ActiveLink prefetch href="/">
        me
      </ActiveLink>
      <ActiveLink prefetch href="/metadata">
        metadata
      </ActiveLink>
      <ActiveLink prefetch href="/afk">
        afk
      </ActiveLink>
      <ActiveLink prefetch href="/shop">
        shop
      </ActiveLink>
    </nav>

    <style jsx>{`
      nav {
        margin: 0 0 24px;
      }
    `}</style>
  </div>
)
