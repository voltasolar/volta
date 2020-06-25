import React from "react"
import { css } from "@emotion/core"
import Img from "gatsby-image"
import Vector from "../images/highlight-deco.svg"
import Vector2 from "../images/highlight-deco-2.svg"

const HightlightBanner = ({ primary }) => {
  const sharpImage = primary.imageSharp
  return (
    <>
      <div
        id="monitoreo"
        className="container"
        css={css`
          padding-top: 80px;
          padding-bottom: 40px;
          h2 {
            text-align: center;
            text-transform: uppercase;
            letter-spacing: 0.2em;
            font-weight: bold;
            font-size: 1.2rem;
            margin-bottom: 3rem;
          }
          p {
            display: flex;
            align-items: center;
            text-align: center;
            @media (min-width: 992px) {
              position: absolute;
              top: 0;
              bottom: 0;
              right: 0;
              margin: auto;
              width: 28%;
              text-align: left;
            }
          }
          .image-wrapper {
            width: 80%;
            flex: 0 0 80%;
            margin: auto;
            position: relative;
            &__phone {
              width: 60%;
              margin: auto;
              position: absolute;
              top: 0;
              bottom: 0;
              left: 0;
              right: 0;
              margin: auto;
              @media (min-width: 992px) {
                width: 43%;
              }
            }
            &__deco {
              margin: auto;
              display: block;
              width: 85%;
              height: auto;
              @media (min-width: 992px) {
                width: 60%;
              }
            }
            &__deco2 {
              position: absolute;
              left: 0;
              bottom: 20%;
              width: 36%;
              display: none;
              @media (min-width: 992px) {
                display: block;
              }
            }
          }
        `}
      >
        <h2>{primary.title[0].text}</h2>
        <div className="row">
          <div className="image-wrapper">
            <img
              src={Vector}
              alt="Decoration"
              className="image-wrapper__deco"
            />
            <div className="image-wrapper__phone">
              {sharpImage ? (
                <Img
                  fluid={sharpImage.childImageSharp.fluid}
                  alt={primary.image.alt}
                />
              ) : (
                <img src={primary.image.url} alt={primary.image.alt} />
              )}
            </div>
            <img
              src={Vector2}
              alt="decoration"
              className="image-wrapper__deco2"
            />
            <p>{primary.content[0].text}</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default HightlightBanner
