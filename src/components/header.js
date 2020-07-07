import React, { useState } from "react"
import { colors } from "./colors"
import { css } from "@emotion/core"
import Facebook from "../images/facebook-icon.inline.svg"
import Instagram from "../images/instagram-icon.inline.svg"
import Whatsapp from "../images/whatsapp.inline.svg"
import Logo from "../images/logo.inline.svg"
import scrollTo from "gatsby-plugin-smoothscroll"

const Header = () => {
  const [active, setActive] = useState(false)
  const toggleMenu = () => {
    setActive(!active)
  }
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
      <header
        css={css`
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1500;
          .helper-bar {
            display: flex;
            flex-wrap: wrap;
            button {
              background-color: ${colors.yellow};
              padding: 15px;
              border: 0;
              text-transform: uppercase;
              font-weight: bold;
              letter-spacing: 0.2em;
              font-size: 80%;
              transition: all 0.3s ease-in-out;
              width: 100%;
              cursor: pointer;
              &:hover {
                background-color: ${colors.darkYellow};
              }
              @media (min-width: 768px) {
                width: auto;
              }
              @media (min-width: 992px) {
                padding: 0 70px;
              }
            }
          }
          .helper-bar__contact {
            background-color: #000;
            display: flex;
            align-items: center;
            flex: 1;
            padding-left: 15px;
            padding-right: 15px;
            padding-top: 13px;
            padding-bottom: 13px;
            @media (min-width: 992px) {
              padding-left: 0;
              padding-right: 40px;
            }
            a {
              color: #fff;
              text-decoration: none;
              transition: all 0.3s ease-in-out;
              &:hover {
                opacity: 0.7;
              }
              &:nth-of-type(1) {
                margin-right: 15px;
                @media (min-width: 992px) {
                  margin-left: auto;
                }
                svg {
                  width: 11px;
                  height: auto;
                }
              }
              &:nth-of-type(2) {
                margin-right: auto;
                @media (min-width: 768px) {
                  margin-right: 40px;
                }
                svg {
                  width: 20px;
                  height: auto;
                }
              }
              &:nth-of-type(3) {
                svg {
                  width: 20px;
                  height: auto;
                }
              }
            }
          }
          .container {
            display: flex;
            align-items: center;
            padding-top: 1.2rem;
            padding-bottom: 1.2rem;
            svg {
              margin-right: auto;
              width: 50%;
              max-width: 195px;
              display: block;
              height: auto;
            }
          }
          nav {
            display: none;
            @media (min-width: 992px) {
              display: block;
            }
            ul {
              display: flex;
              flex-direction: column;
              list-style: none;
              margin: 0;
              padding: 0;
              @media (min-width: 768px) {
                flex-direction: row;
              }
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
          .hamburger {
            width: 30px;
            height: 20px;
            position: relative;
            background: transparent;
            border: none;
            padding: 0;
            span {
              position: absolute;
              width: 100%;
              height: 2px;
              background: #000;
              left: 0;
              &:nth-of-type(1) {
                top: 0;
              }
              &:nth-of-type(2) {
                top: 0;
                bottom: 0;
                margin: auto;
              }
              &:nth-of-type(3) {
                bottom: 0;
              }
            }
            @media (min-width: 992px) {
              display: none;
            }
          }
          .bottom-bar {
            background-color: #fff;
            .headroom {
              top: 92px !important;
              @media (min-width: 768px) {
                top: 48px !important;
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
              <Facebook />
            </a>
            <a
              href="https://www.instagram.com/volta.solar.energy/?hl=es-la"
              target="_blank"
              rel="noreferrer"
            >
              <Instagram />
            </a>
            <a
              href="tel:4611698353"
              css={css`
                display: flex;
                align-items: center;
                svg {
                  margin-right: 8px;
                }
              `}
            >
              <Whatsapp />
              461 169 8353
            </a>
          </div>
          <button onClick={() => scrollTo("#contacto")}>
            ¡Da clic! instala tus paneles
          </button>
        </div>
        <div className="bottom-bar">
          <div className="container">
            <Logo />
            <button className="hamburger" type="button" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </button>
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
        </div>
      </header>
      <nav
        className={`${active ? "open-menu" : ""}`}
        css={css`
          position: fixed;
          top: 0;
          left: 0;
          z-index: 1500;
          height: 100vh;
          width: 100%;
          background: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          transform: translateX(-100%);
          transition: all 0.3s ease-in-out;
          &.open-menu {
            transform: translateX(0);
          }
          @media (min-width: 992px) {
            display: none;
          }
          ul {
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex;
            flex-direction: column;
            text-align: center;
            button {
              background: transparent;
              border: none;
              margin-bottom: 1rem;
              font-size: 1.5rem;
            }
          }
          .hamburger {
            background: transparent;
            border: none;
            width: 30px;
            height: 20px;
            position: absolute;
            top: 15px;
            right: 15px;
            @media (min-width: 768px) {
              top: 30px;
              right: 30px;
            }
            span {
              width: 100%;
              height: 2px;
              background: #000;
              position: absolute;
              top: 0;
              bottom: 0;
              left: 0;
              margin: auto;
              &:nth-of-type(1) {
                transform: rotate(45deg);
              }
              &:nth-of-type(2) {
                transform: rotate(-45deg);
              }
            }
          }
        `}
      >
        <button onClick={toggleMenu} className="hamburger">
          <span></span>
          <span></span>
        </button>
        <ul>
          {menu.map(({ text, url }, index) => (
            <li key={`menu-item-${index}`}>
              <button
                onClick={() => {
                  setActive(false)
                  scrollTo(url)
                }}
              >
                {text}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Header
