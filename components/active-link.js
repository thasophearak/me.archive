import { withRouter } from 'next/router'

const ActiveLink = ({ children, router, href }) => {
  const handleClick = e => {
    e.preventDefault()
    router.push(href)
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className={router.pathname === href ? 'active' : ''}
    >
      {children}
    </a>
  )
}

export default withRouter(ActiveLink)
