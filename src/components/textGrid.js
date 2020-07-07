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
          overflow: hidden;
          @media (min-width: 768px) {
            padding-left: 45px;
            padding-right: 45px;
          }
          .text-grid {
            background-color: ${colors.yellow};
            padding: 15px;
            transition: all 0.3s ease-in-out;
            &:hover {
              transform: scale(0.99);
            }
            @media (min-width: 992px) {
              padding: 57px 60px 120px 60px;
            }
            h2 {
              text-transform: uppercase;
              letter-spacing: 0.2em;
              font-weight: bold;
              font-size: 1.2rem;
              margin-bottom: 80px;
              text-align: center;
              @media (min-width: 768px) {
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
              margin-bottom: 3rem;
              display: flex;
              flex-direction: column;
              align-items: center;
              button {
                background: transparent;
                border: none;
              }
              @media (min-width: 768px) {
                width: 50%;
                flex: 0 0 50%;
              }
              @media (min-width: 992px) {
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
                  /* font-weight: normal; */
                }
              }
              p {
                @media (min-width: 768px) {
                  /* opacity: 0;
                  transform: translateY(10px); */
                  transition: all 0.3s ease-in-out;
                }
              }
              &--active,
              &:hover {
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
          <h2 data-sal="slide-up">{primary.title[0].text}</h2>
          <img
            src={Vector}
            className="text-grid__deco"
            data-sal="fade"
            data-sal-duration="1000"
            alt=""
          />
          <div className="text-grid__wrapper">
            {fields.map((field, index) => (
              <div
                className="text-grid__item"
                data-sal="slide-up"
                key={`text-grid-item-${index}`}
              >
                <button
                  className={`${
                    index === activeItem ? " text-grid__item--active" : ""
                  }`}
                  onClick={() => setActiveItem(index)}
                >
                  <h3>{field.title[0].text}</h3>
                  <p>{field.content[0].text}</p>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default TextGrid
