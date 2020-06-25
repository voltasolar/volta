import React from "react"
import { css } from "@emotion/core"
import { colors } from "./colors"
import Img from "gatsby-image"
import Vector from "../images/title-dots.svg"
import Vector2 from "../images/image-deco.svg"

const ImageGrid = ({ primary, fields }) => {
  return (
    <div
      css={css`
        background-color: ${colors.beige};
        padding-top: 88px;
        padding-bottom: 88px;
        h2 {
          text-align: center;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          font-size: 1.2rem;
          font-weight: bold;
          margin-top: 0;
          margin-bottom: 3rem;
        }
        .image-grid__deco {
          display: block;
          margin: auto;
          pointer-events: none;
        }
        .item-grid {
          margin-top: 3rem;
          &__item {
            width: 100%;
            flex: 0 0 100%;
            text-align: center;
            padding-left: 15px;
            padding-right: 15px;
            @media (min-width: 768px) {
              width: 25%;
              flex: 0 0 25%;
            }
            h3 {
              text-transform: uppercase;
              letter-spacing: 0.2em;
              font-size: 90%;
              margin-bottom: 2rem;
            }
            p {
              width: 70%;
              margin: auto;
            }
          }
          &__image {
            position: relative;
            width: 100%;
            margin: auto;
            margin-bottom: 70px;
            &:after {
              content: "";
              display: block;
              padding-top: 100%;
            }
            .image-deco {
              position: absolute;
              width: 100%;
              height: auto;
              top: 0;
              bottom: 0;
              right: 0;
              left: 0;
              margin: auto;
            }
            img {
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
              bottom: 0;
              right: 0;
              margin: auto;
              object-fit: cover;
            }
          }
        }
      `}
    >
      <div className="container">
        <h2>{primary.title[0].text}</h2>
        <img src={Vector} alt="title decoration" className="image-grid__deco" />
        <div className="item-grid row">
          {fields.map((field, index) => {
            const sharpImage = field.imageSharp
            return (
              <div key={`grid-item-${index}`} className="item-grid__item">
                <div className="item-grid__image">
                  {!(index % 2) && (
                    <img
                      src={Vector2}
                      alt="decoration"
                      className="image-deco"
                    />
                  )}
                  {sharpImage ? (
                    <div
                      css={css`
                        position: absolute;
                        width: 80%;
                        height: 80%;
                        top: 0;
                        left: 0;
                        bottom: 0;
                        right: 0;
                        border-radius: 50%;
                        overflow: hidden;
                        margin: auto;
                      `}
                    >
                      <Img
                        fluid={sharpImage.childImageSharp.fluid}
                        alt={field.image.alt}
                        style={{ height: "100%" }}
                      />
                    </div>
                  ) : (
                    <img src={field.image.url} alt={field.image.alt} />
                  )}
                </div>
                <h3>{field.title[0].text}</h3>
                <p>{field.content[0].text}</p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default ImageGrid
