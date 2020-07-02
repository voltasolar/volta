import React from "react"
import { css } from "@emotion/core"

const TextWithTitle = ({ content }) => {
  return (
    <>
      <div
        id="nosotros"
        className="container"
        css={css`
          padding-top: 120px;
          padding-bottom: 120px;
          overflow: hidden;
          .row {
            align-items: center;
          }
          h2,
          p {
            margin: 0;
          }
          h2 {
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 0.2em;
            font-size: 1.2rem;
            margin-bottom: 1.5rem;
            @media (min-width: 768px) {
              margin-bottom: 0;
            }
          }
          p {
            line-height: 2;
            text-align: center;
            @media (min-width: 768px) {
              text-align: left;
            }
          }
        `}
      >
        <div className="row">
          <div
            css={css`
              width: 100%;
              flex: 0 0 100%;
              padding-left: 15px;
              padding-right: 15px;
              text-align: center;
              @media (min-width: 768px) {
                width: 40%;
                flex: 0 0 40%;
              }
            `}
            data-sal="slide-right"
          >
            <h2>{content.title[0].text}</h2>
          </div>
          <div
            css={css`
              width: 100%;
              flex: 0 0 100%;
              padding-left: 15px;
              padding-right: 15px;
              @media (min-width: 768px) {
                width: 55%;
                flex: 0 0 55%;
              }
            `}
            data-sal="slide-left"
          >
            <p>{content.text[0].text}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default TextWithTitle
