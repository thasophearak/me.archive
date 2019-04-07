import theme from '../utils/theme'

export default () => (
  <div>
    <p>Internetrovert • Minimalist • Developer • Non-photographer</p>
    <style jsx>{`
      p {
        margin: 0 0 24px;
      }
      @media screen and (min-width: 580px) {
        p {
          margin: 0 0 32px;
        }
      }
      @media only screen and (min-width: 768px) {
        // p {
        //   animation: blink 0.8s infinite alternate;
        //   overflow: hidden;
        //   white-space: nowrap;
        //   width: 62ch;
        //   border-right: 2px solid ${theme.green};
        //   transition: all 0.3s;
        // }
        // @keyframes type {
        //   from {
        //     width: 0;
        //   }
        // }
        // @keyframes blink {
        //   50% {
        //     border-color: transparent;
        //   }
        // }
      }
    `}</style>
  </div>
)
