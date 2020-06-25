import React from "react"
import { css } from "@emotion/core"
import Logo from "../images/volta-icon.svg"

const Footer = () => {
  return (
    <>
      <footer
        css={css`
          background-color: #000;
          padding: 2rem 0;
          margin-top: auto;
          &,
          a {
            color: #fff;
            text-decoration: none;
          }
          h4 {
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 0.2em;
            margin-bottom: 2rem;
          }
          .container {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            img {
              margin-right: auto;
            }
          }
          .footer-contact {
            max-width: 30%;
            flex: 0 0 30%;
            a {
              display: block;
              margin-top: 1rem;
            }
          }
        `}
      >
        <div className="container">
          <img src={Logo} alt="Volta Solar" />
          <div className="footer-contact">
            <h4>Atención a clientes</h4>
            <a href="tel:4611698353">461 169 8353</a>
            <a href="mailto:info@voltasolarenergy.com">
              info@voltasolarenergy.com
            </a>
          </div>
          <div className="footer-contact">
            <h4>Redes sociales</h4>
            <a
              href="https://www.facebook.com/volta.solar.energy"
              target="_blank"
              rel="noreferrer"
            >
              Facebook
            </a>
            <a
              href="https://www.instagram.com/volta.solar.energy/?hl=es-la"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
