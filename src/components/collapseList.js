import React, { useState } from "react"
import { css, keyframes } from "@emotion/core"
import { colors } from "./colors"
import VisibilitySensor from "react-visibility-sensor"
import Vector from "../images/list-deco.inline.svg"

const blink = keyframes`
  0% {
    opacity: 0;
    animation-timing-function: ease-in;
  }
  60% {
    opacity: 1;
    animation-timing-function: ease-out;
  }
`

const CollapseList = ({ primary, fields }) => {
  const [active, setActive] = useState(4)
  const [svgOneAnimated, setSvgOneAnimated] = useState(false)
  const [svgTwoAnimated, setSvgTwoAnimated] = useState(false)

  const activateSvgOne = isVisible => {
    isVisible && setSvgOneAnimated(true)
  }

  const activateSvgTwo = isVisible => {
    isVisible && setSvgTwoAnimated(true)
  }

  const toggleActive = (event, index) => {
    const panels = document.querySelectorAll(".list__item-content")
    const panel = document.getElementById(`list-item-content-${index}`)
    panels.forEach(panel => (panel.style.maxHeight = null))
    if (active === index) {
      setActive(null)
      event.currentTarget.innerHTML = "+"
    } else {
      setActive(index)
      panel.style.maxHeight = panel.scrollHeight + "px"
      event.currentTarget.innerHTML = "-"
    }
  }
  return (
    <>
      <div
        id="servicios"
        className="container"
        css={css`
          position: relative;
          padding-top: 80px;
          @media (min-width: 992px) {
            margin-top: -20px;
            padding-top: 0;
          }
          .row {
            align-items: center;
          }
          h2 {
            text-align: center;
            text-transform: uppercase;
            letter-spacing: 0.2em;
            font-size: 1.2rem;
            margin-bottom: 4rem;
            @media (min-width: 992px) {
              position: absolute;
              left: 0;
              right: 0;
              top: 100px;
              margin: auto;
            }
          }
          .list {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            padding-top: 80px;
            order: 1;
            @media (min-width: 992px) {
              width: 70%;
              order: 0;
            }
            &__item {
              width: 100%;
              flex: 0 0 100%;
              text-align: center;
              position: relative;
              padding-top: 2.8rem;
              padding-left: 30px;
              padding-right: 30px;
              margin-bottom: 7rem;
              @media (min-width: 768px) {
                width: 50%;
                flex: 0 0 50%;
              }
              @media (min-width: 992px) {
                width: 33.3333333%;
                flex: 0 0 33.3333333%;
              }
              span {
                font-weight: bold;
                font-size: 5rem;
                color: ${colors.yellow};
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                margin: auto;
                z-index: -1;
              }
              h3 {
                text-transform: uppercase;
                letter-spacing: 0.2em;
                line-height: 2rem;
                font-size: 1rem;
                width: 80%;
                margin: auto;
                margin-bottom: 3rem;
              }
              & > div:not(.active) {
                .list__item-content {
                  max-height: 0;
                }
              }
            }
            &__item-content {
              text-align: left;
              overflow: hidden;
              transition: max-height 0.2s ease-out;
              line-height: 1.2;
              ul {
                list-style: none;
                li {
                  padding-left: 15px;
                  position: relative;
                  &:before {
                    content: "-";
                    display: block;
                    position: absolute;
                    left: 0;
                    top: 0;
                  }
                }
              }
              p {
                text-align: center;
                @media (min-width: 768px) {
                  text-align: left;
                }
              }
            }
            button {
              background-color: ${colors.yellow};
              color: #fff;
              width: 39px;
              height: 39px;
              border-radius: 50%;
              text-align: center;
              border: 0;
              display: flex;
              align-items: center;
              justify-content: center;
              margin: auto;
              font-weight: bold;
              cursor: pointer;
              &,
              &:active {
                outline: none;
              }
            }
          }
          .description {
            width: 100%;
            flex: 0 0 100%;
            order: 0;
            padding: 0 15px;
            @media (min-width: 992px) {
              order: 1;
              width: 30%;
              flex: 0 0 30%;
              padding: 0;
            }
            svg {
              display: none;
              margin: auto;
              opacity: 0;
              transition: all 0.3s ease-in-out;
              &.animated {
                path:nth-of-type(odd) {
                  animation: ${blink} 1.2s linear 0.5s;
                }
                path:nth-of-type(even) {
                  animation: ${blink} 2.4s linear 0.8s;
                }
              }
              @media (min-width: 992px) {
                display: block;
              }
              &:nth-of-type(1) {
                margin-bottom: 4rem;
                &.animated {
                  opacity: 0.2;
                }
              }
              &:nth-of-type(2) {
                margin-top: 4rem;
                &.animated {
                  opacity: 1;
                }
              }
            }
            p {
              text-align: center;
            }
          }
        `}
      >
        <h2 data-sal="slide-up">{primary.title[0].text}</h2>
        <div className="row">
          <div className="list">
            {fields.map((field, index) => {
              return (
                <div
                  key={`list-item-${index}`}
                  data-sal="slide-up"
                  className="list__item"
                >
                  <div className={`${active === index ? "active" : ""}`}>
                    <span>{index + 1}</span>
                    <h3>{field.title[0].text}</h3>
                    <div
                      id={`list-item-content-${index}`}
                      className="list__item-content"
                    >
                      {field.content.length > 1 ? (
                        <ul>
                          {field.content.map((item, index) => (
                            <li key={`list-item-${index}`}>{item.text}</li>
                          ))}
                        </ul>
                      ) : (
                        <p>{field.content[0].text}</p>
                      )}
                    </div>
                    <button
                      onClick={event => {
                        toggleActive(event, index)
                      }}
                    >
                      {active === index ? "-" : "+"}
                    </button>
                  </div>
                </div>
              )
            })}
          </div>
          <div className="description">
            <VisibilitySensor
              onChange={activateSvgOne}
              scrollCheck
              partialVisibility
            >
              <Vector className={`${svgOneAnimated ? "animated" : ""}`} />
            </VisibilitySensor>
            {primary.description.map((paragraph, index) => (
              <p key={`description-paragraph-${index}`} data-sal="fade">
                {paragraph.text}
              </p>
            ))}
            <VisibilitySensor
              onChange={activateSvgTwo}
              scrollCheck
              partialVisibility
            >
              <Vector className={`${svgTwoAnimated ? "animated" : ""}`} />
            </VisibilitySensor>
          </div>
        </div>
      </div>
    </>
  )
}

export default CollapseList
