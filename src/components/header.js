import React from "react"
import { colors } from "./colors"
import { css } from "@emotion/core"
import Facebook from "../images/facebook-icon.svg"
import Instagram from "../images/instagram-icon.svg"
import Logo from "../images/logo.svg"
import scrollTo from "gatsby-plugin-smoothscroll"
import Headroom from "react-headroom"

const Header = () => {
  const menu = [
    {
      text: "Nosotros",
      url: "#nosotros",
    },
    {
      text: "Beneficios",
      url: "#beneficios",
    },
    {
      text: "Servicios",
      url: "#servicios",
    },
    {
      text: "Monitoreo",
      url: "#monitoreo",
    },
  ]
  return (
    <>
      <Headroom style={{ zIndex: "1500" }}>
        <header
          css={css`
            background-color: #fff;
            .helper-bar {
              display: flex;
              button {
                background-color: ${colors.yellow};
                padding-left: 70px;
                padding-right: 70px;
                border: 0;
                text-transform: uppercase;
                font-weight: bold;
                letter-spacing: 0.2em;
                font-size: 80%;
                transition: all 0.3s ease-in-out;
                cursor: pointer;
                &:hover {
                  background-color: ${colors.darkYellow};
                }
              }
            }
            .helper-bar__contact {
              background-color: #000;
              display: flex;
              align-items: center;
              flex: 1;
              padding-right: 40px;
              padding-top: 13px;
              padding-bottom: 13px;
              a {
                color: #fff;
                text-decoration: none;
                transition: all 0.3s ease-in-out;
                &:hover {
                  opacity: 0.7;
                }
                &:nth-of-type(1) {
                  margin-left: auto;
                  margin-right: 15px;
                  img {
                    width: 11px;
                    height: auto;
                  }
                }
                &:nth-of-type(2) {
                  margin-right: 40px;
                  img {
                    width: 20px;
                    height: auto;
                  }
                }
              }
            }
            .container {
              display: flex;
              align-items: center;
              padding-top: 2rem;
              padding-bottom: 2rem;
              img {
                margin-right: auto;
              }
            }
            nav {
              ul {
                display: flex;
                list-style: none;
                margin: 0;
                padding: 0;
                li {
                  margin-left: 1.5rem;
                  text-transform: uppercase;
                  font-size: 85%;
                  button {
                    text-decoration: none;
                    color: #000;
                    transition: all 0.3s ease-in-out;
                    background-color: transparent;
                    border: none;
                    font-size: 1rem;
                    &:hover {
                      color: ${colors.darkYellow};
                    }
                  }
                }
              }
            }
          `}
        >
          <div className="helper-bar">
            <div className="helper-bar__contact">
              <a
                href="https://www.facebook.com/volta.solar.energy"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Facebook} alt="facebook" />
              </a>
              <a
                href="https://www.instagram.com/volta.solar.energy/?hl=es-la"
                target="_blank"
                rel="noreferrer"
              >
                <img src={Instagram} alt="instagram" />
              </a>
              <a href="tel:4611698353">461 169 8353</a>
            </div>
            <button onClick={() => scrollTo("#contacto")}>
              Instala tus paneles
            </button>
          </div>
          <div className="container">
            <img src={Logo} alt="Volta Solar" />
            <nav>
              <ul>
                {menu.map(({ text, url }, index) => (
                  <li key={`menu-item-${index}`}>
                    <button onClick={() => scrollTo(url)}>{text}</button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </header>
      </Headroom>
    </>
  )
}

export default Header
