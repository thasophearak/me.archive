import theme from '../utils/theme'
import Social from './social'

export default () => (
  <div>
    <p>&#x3C;/&#x3E; with &#x3C;3</p>
    <Social />
    <span>Made in Cambodia</span>
    <style jsx>{`
      div {
        padding: 32px 0 24px;
      }
      p {
        margin: 0 0 12px;
        letter-spacing: 0.5px;
      }
      span {
        display: block;
        margin-top: 12px;
        opacity: 0.6;
      }
    `}</style>
  </div>
)
