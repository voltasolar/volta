import React from "react"
import Img from "gatsby-image"
import Slider from "react-slick"
import { css } from "@emotion/core"
import { colors } from "./colors"
import Button from "./button"
import scrollTo from "gatsby-plugin-smoothscroll"

const HeroSlider = ({ slides }) => {
  const settings = {
    autoplay: true,
    arrows: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    autoplaySpeed: 5000,
    dots: true,
  }
  return (
    <>
      <div
        css={css`
          .hero-slider__slide {
            position: relative;
            &:after {
              content: "";
              display: block;
              padding-top: 120%;
              @media (min-width: 768px) {
                padding-top: 49%;
              }
            }
          }
          img {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            object-fit: cover;
          }
          .slide-content {
            position: absolute;
            width: 100%;
            height: 100%;
            top: 0;
            left: 0;
            z-index: 2;
            color: #fff;
            text-align: center;
            background-color: rgba(13, 46, 61, 0.34);
            display: flex;
            align-items: center;
            justify-content: center;
            &__inner {
              padding-left: 15px;
              padding-right: 15px;
              width: 100%;
              margin: auto;
              @media (min-width: 768px) {
                width: 60%;
              }
              @media (min-width: 992px) {
                width: 35%;
              }
            }
            h2 {
              text-transform: uppercase;
              letter-spacing: 0.2em;
              font-size: 1.2rem;
              line-height: 2;
              margin-bottom: 2.5rem;
            }
          }
          .slick-dots {
            position: absolute;
            bottom: 15px;
            left: 0;
            right: 0;
            margin: auto;
            list-style: none;
            padding: 0;
            margin: 0;
            display: flex !important;
            align-items: center;
            justify-content: center;
            @media (min-width: 992px) {
              bottom: 60px;
            }
            li {
              width: 10px;
              height: 10px;
              border-radius: 50%;
              border: solid 2px ${colors.yellow};
              margin: 0 0.3rem;
              &.slick-active {
                background-color: ${colors.yellow};
              }
              button {
                opacity: 0;
                cursor: pointer;
              }
            }
          }
        `}
      >
        <Slider {...settings}>
          {slides.map((slide, index) => {
            const sharpImage = slide.imageSharp
            return (
              <div className="hero-slider__slide" key={`slide-${index}`}>
                <div className="slide-content">
                  <div className="slide-content__inner" data-sal="slide-up">
                    <h2>{slide.headline[0].text}</h2>
                    <Button onClick={() => scrollTo("#contacto")}>
                      Instala tus paneles
                    </Button>
                  </div>
                </div>
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

export default HeroSlider
