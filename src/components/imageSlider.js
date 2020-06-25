import React from "react"
import Slider from "react-slick"
import Img from "gatsby-image"
import { css } from "@emotion/core"
import { colors } from "./colors"

const ImageSlider = ({ fields }) => {
  const PrevArrow = ({ className, style, onClick }) => {
    return (
      <button className={className} style={style} onClick={onClick}>
        {"<"}
      </button>
    )
  }
  const NextArrow = ({ className, style, onClick }) => {
    return (
      <button className={className} style={style} onClick={onClick}>
        {">"}
      </button>
    )
  }
  const settings = {
    autoplay: true,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  }
  return (
    <>
      <div
        className="container"
        css={css`
          position: relative;
          margin-bottom: 57px;
          .image-slider__slide {
            position: relative;
            &:after {
              content: "";
              display: block;
              padding-top: 51%;
            }
            img {
              position: absolute;
              width: 100%;
              height: 100%;
              top: 0;
              left: 0;
              object-fit: cover;
            }
          }
          .slick-arrow {
            position: absolute;
            top: 0;
            bottom: 0;
            margin: auto;
            width: 56px;
            height: 54px;
            z-index: 2;
            background-color: ${colors.yellow};
            border: none;
            &.slick-prev {
              left: 0;
              transform: translateX(-50%);
            }
            &.slick-next {
              right: 0;
              transform: translateX(50%);
            }
          }
        `}
      >
        <Slider {...settings}>
          {fields.map((slide, index) => {
            const sharpImage = slide.imageSharp
            return (
              <div
                className="image-slider__slide"
                key={`image-slider-slide-${index}`}
              >
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
                      alt={slide.image.alt}
                      style={{ height: "100%" }}
                    />
                  </div>
                ) : (
                  <img src={slide.image.url} alt={slide.image.alt} />
                )}
              </div>
            )
          })}
        </Slider>
      </div>
    </>
  )
}

export default ImageSlider
