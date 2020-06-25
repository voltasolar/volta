import React, { useState } from "react"
import { css } from "@emotion/core"
import { colors } from "./colors"
import Vector from "../images/dots.svg"

const TextGrid = ({ primary, fields }) => {
  const [activeItem, setActiveItem] = useState(0)
  return (
    <>
      <div
        css={css`
          padding-left: 15px;
          padding-right: 15px;
          @media (min-width: 768px) {
            padding-left: 45px;
            padding-right: 45px;
          }
          .text-grid {
            background-color: ${colors.yellow};
            padding: 15px;
            @media (min-width: 768px) {
              padding: 57px 60px 120px 160px;
            }
            h2 {
              text-transform: uppercase;
              letter-spacing: 0.2em;
              font-weight: bold;
              font-size: 1.2rem;
              margin-bottom: 80px;
              text-align: center;
              @media (min-width: 768px) {
                text-align: left;
                margin-bottom: 160px;
              }
            }
            &__wrapper {
              display: flex;
              flex-wrap: wrap;
            }
            &__deco {
              width: 75%;
              height: auto;
              margin: auto;
              margin-bottom: 2rem;
              display: none;
              @media (min-width: 768px) {
                display: block;
              }
            }
            &__item {
              width: 100%;
              flex: 0 0 100%;
              padding-left: 10px;
              padding-right: 10px;
              cursor: pointer;
              background: transparent;
              border: none;
              margin-bottom: 3rem;
              @media (min-width: 768px) {
                width: 25%;
                flex: 0 0 25%;
                margin-bottom: 0;
              }
              h3 {
                font-weight: bold;
                text-transform: uppercase;
                letter-spacing: 0.2em;
                text-align: center;
                font-size: 1rem;
                margin-top: 0;
                height: 2.5rem;
                margin-bottom: 40px;
                @media (min-width: 768px) {
                  font-weight: normal;
                }
              }
              p {
                @media (min-width: 768px) {
                  opacity: 0;
                  transform: translateY(10px);
                  transition: all 0.3s ease-in-out;
                }
              }
              &--active {
                h3 {
                  font-weight: bold;
                }
                p {
                  opacity: 1;
                  transform: translateY(0);
                }
              }
            }
          }
        `}
      >
        <div className="text-grid">
          <h2>{primary.title[0].text}</h2>
          <img src={Vector} alt="decoración" className="text-grid__deco" />
          <div className="text-grid__wrapper">
            {fields.map((field, index) => (
              <button
                className={`text-grid__item${
                  index === activeItem ? " text-grid__item--active" : ""
                }`}
                key={`text-grid-item-${index}`}
                onClick={() => setActiveItem(index)}
              >
                <h3>{field.title[0].text}</h3>
                <p>{field.content[0].text}</p>
              </button>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default TextGrid
