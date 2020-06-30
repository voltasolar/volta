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
              margin: auto;
              margin-bottom: 3rem;
              @media (min-width: 992px) {
                margin-left: 0;
                margin-bottom: 0;
              }
            }
          }
          .footer-logo {
            flex: 0 0 100%;
            text-align: center;
            @media (min-width: 768px) {
              text-align: left;
            }
            @media (min-width: 992px) {
              flex: auto;
            }
          }
          .footer-contact {
            max-width: 100%;
            flex: 0 0 100%;
            margin-bottom: 2rem;
            text-align: center;
            @media (min-width: 768px) {
              max-width: 50%;
              flex: 0 0 50%;
              text-align: left;
            }
            @media (min-width: 992px) {
              max-width: 30%;
              flex: 0 0 30%;
              margin-bottom: 0;
            }
            a {
              display: block;
              margin-top: 1rem;
            }
          }
        `}
      >
        <div className="container">
          <div className="footer-logo">
            <img src={Logo} alt="Volta Solar" />
          </div>
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
