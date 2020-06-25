import React, { useState } from "react"
import { colors } from "./colors"
import { css } from "@emotion/core"
import Facebook from "../images/facebook-icon.svg"
import Instagram from "../images/instagram-icon.svg"
import Logo from "../images/logo.svg"
import scrollTo from "gatsby-plugin-smoothscroll"
import Headroom from "react-headroom"

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
      <Headroom style={{ zIndex: "1500" }}>
        <header
          css={css`
            background-color: #fff;
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
                  padding: 0 70px;
                  width: auto;
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
              @media (min-width: 768px) {
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
                  @media (min-width: 768px) {
                    margin-left: auto;
                  }
                  img {
                    width: 11px;
                    height: auto;
                  }
                }
                &:nth-of-type(2) {
                  margin-right: auto;
                  @media (min-width: 768px) {
                    margin-right: 40px;
                  }
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
                width: 50%;
                max-width: 250px;
              }
            }
            nav {
              display: none;
              @media (min-width: 768px) {
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
              @media (min-width: 768px) {
                display: none;
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
        </header>
      </Headroom>
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
          @media (min-width: 768px) {
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
            }
          }
        `}
      >
        <ul>
          {menu.map(({ text, url }, index) => (
            <li key={`menu-item-${index}`}>
              <button onClick={() => scrollTo(url)}>{text}</button>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

export default Header
