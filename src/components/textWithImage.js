import React from "react"
import Img from "gatsby-image"
import { css } from "@emotion/core"
import { colors } from "./colors"
import Vector1 from "../images/image-dots-dark.svg"
import Vector2 from "../images/image-dots-yellow.svg"

const TextWithImage = ({ primary, fields }) => {
  return (
    <>
      <div
        id="beneficios"
        className="container"
        css={css`
          padding-top: 80px;
          padding-bottom: 80px;
          h2 {
            text-align: center;
            text-transform: uppercase;
            letter-spacing: 0.2em;
            font-size: 1.2rem;
            margin-top: 0;
            font-weight: bold;
            margin-bottom: 1.5rem;
            &:after {
              content: "";
              display: block;
              margin: auto;
              width: 17px;
              height: 17px;
              border-radius: 50%;
              background-color: ${colors.yellow};
              margin-top: 2rem;
            }
          }
          .block-items {
            width: 80%;
            margin: auto;
          }
          .block-item {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            margin-bottom: 3rem;
            @media (min-width: 768px) {
              margin-bottom: 0;
            }
            h3 {
              text-transform: uppercase;
              font-weight: bold;
              letter-spacing: 0.2em;
            }
            ul {
              margin: 0;
              padding: 0;
              list-style: none;
              li {
                padding-left: 7px;
                position: relative;
                line-height: 1.8;
                &:before {
                  content: "";
                  display: block;
                  position: absolute;
                  width: 5px;
                  height: 1px;
                  background-color: #000;
                  left: 0;
                  top: 1em;
                }
              }
            }
            &__content,
            &__image {
              width: 100%;
              flex: 0 0 100%;
              @media (min-width: 768px) {
                width: 40%;
                flex: 0 0 40%;
              }
            }
            &__content {
              margin-bottom: 2rem;
              @media (min-width: 768px) {
                margin-bottom: 0;
              }
            }
            &__image {
              margin-left: auto;
              position: relative;
              padding-bottom: 1.2rem;
              padding-top: 3rem;
            }
            &__img {
              width: 86%;
              border-radius: 50%;
              background-color: lightgray;
              position: relative;
              overflow: hidden;
              &:after {
                content: "";
                display: block;
                padding-top: 100%;
              }
              img {
                position: absolute;
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                object-fit: cover;
              }
            }
            &__vector {
              position: absolute;
              top: 0;
              right: 0;
              z-index: 2;
              width: 49%;
            }
            &__bg {
              width: 86%;
              background-color: ${colors.yellow};
              position: absolute;
              bottom: 0;
              left: 0;
              right: 0;
              margin: auto;
              border-radius: 100px;
              border-bottom-left-radius: 0;
              &:after {
                content: "";
                display: block;
                padding-top: 96%;
              }
            }
            &:nth-of-type(even) {
              .block-item__content {
                @media (min-width: 768px) {
                  order: 1;
                }
              }
              .block-item__image {
                order: 0;
                margin-left: 0;
                margin-right: auto;
                padding-top: 0;
                padding-bottom: 4rem;
              }
              .block-item__img {
                border-radius: 100px;
                border-bottom-right-radius: 0;
                width: 82%;
                margin-right: 0;
                margin-left: auto;
              }
              .block-item__bg {
                background-color: #000;
                border-bottom-left-radius: 100px;
                border-bottom-right-radius: 0;
                bottom: 2rem;
              }
              .block-item__vector {
                left: 0;
                bottom: 0;
                right: auto;
                top: auto;
                z-index: 0;
              }
            }
          }
        `}
      >
        <h2>{primary.title[0].text}</h2>
        <div className="block-items">
          {fields.map((field, index) => {
            const sharpImage = field.imageSharp
            return (
              <div className="block-item" key={`block-item-${index}`}>
                <div className="block-item__content">
                  <h3>{field.title[0].text}</h3>
                  <ul>
                    {field.content.map((contentBlock, index) => (
                      <li key={`block-item-list-${index}`}>
                        {contentBlock.text}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="block-item__image">
                  <div className="block-item__bg"></div>
                  {index % 2 ? (
                    <img
                      src={Vector2}
                      alt="vector"
                      className="block-item__vector"
                    />
                  ) : (
                    <img
                      src={Vector1}
                      alt="vector"
                      className="block-item__vector"
                    />
                  )}
                  <div className="block-item__img">
                    {sharpImage ? (
                      <div
                        css={css`
                          position: absolute;
                          width: 100%;
                          height: 100%;
                          top: 0;
                          left: 0;
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
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default TextWithImage
