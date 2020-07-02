import React from "react"
import Header from "./header"
import Footer from "./footer"
import { css } from "@emotion/core"
import "normalize.css"
import "slick-carousel/slick/slick.css"
import "./layout.scss"

const Layout = ({ children }) => {
  return (
    <>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          min-height: 100vh;
          padding-top: 165px;
          @media (min-width: 768px) {
            padding-top: 133px;
          }
        `}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default Layout
