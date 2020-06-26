import React, { useState } from "react"
import { RichText } from "prismic-reactjs"
import { css, keyframes } from "@emotion/core"
import { colors } from "./colors"
import axios from "axios"
import Button from "./button"

const ring = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

const ContactForm = ({ primary }) => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })

  const handleFileUpload = e => {
    const label = e.currentTarget.nextElementSibling
    const fileName = e.target.value.split("\\").pop()
    if (fileName) {
      label.querySelector("span").innerHTML = fileName
    }
  }

  const handleServerResponse = (ok, msg) => {
    setServerState({ submitting: false, status: { ok, msg } })
  }

  const handleFormSubmit = e => {
    e.preventDefault()
    setServerState({ submitting: true })
    axios({
      method: "post",
      //url: "https://formspree.io/xzbjvwbp",
      url: "/",
      data: new FormData(e.target),
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    })
      .then(res => {
        console.log(res)
        handleServerResponse(
          true,
          "Recibios tu mensaje, nos pondremos en contacto en breve."
        )
      })
      .catch(e => {
        console.log(e)
        handleServerResponse(false, "Ocurrió un error. Intenta de nuevo")
      })
  }
  return (
    <>
      <div
        id="contacto"
        css={css`
          display: flex;
          flex-wrap: wrap;
          .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0, 0, 0, 0);
            white-space: nowrap;
            border: 0;
          }
          .form-wrapper {
            background-color: #000;
            width: 100%;
            flex: 0 0 100%;
            padding: 70px 15px;
            position: relative;
            overflow: hidden;
            @media (min-width: 768px) {
              width: 50%;
              flex: 0 0 50%;
            }
            @media (min-width: 992px) {
              padding: 70px 100px;
            }
            input,
            textarea,
            label {
              width: 100%;
              background: transparent;
              border: solid 2px ${colors.yellow};
              border-radius: 0;
              margin-bottom: 13px;
              padding: 15px;
              color: #fff;
              display: block;
              &::placeholder {
                text-transform: uppercase;
                color: #ddd5ca;
              }
            }
            label {
              color: #ddd5ca;
              text-transform: uppercase;
              cursor: pointer;
            }
            input[type="file"] {
              position: absolute;
              width: 1px;
              height: 1px;
              padding: 0;
              margin: -1px;
              overflow: hidden;
              clip: rect(0, 0, 0, 0);
              white-space: nowrap;
              border: 0;
            }
            button {
              display: block;
              width: 100%;
              margin-top: 38px;
              margin-bottom: 1.5rem;
            }
          }
          .form-text {
            background-color: ${colors.yellow};
            width: 100%;
            flex: 0 0 100%;
            padding: 100px 15px;
            text-align: center;
            @media (min-width: 768px) {
              width: 50%;
              flex: 0 0 50%;
            }
            @media (min-width: 992px) {
              padding: 100px 70px;
            }
            h2 {
              text-transform: uppercase;
              font-size: 1.2rem;
              line-height: 2;
              margin-bottom: 60px;
              span {
                display: block;
              }
            }
            ul {
              list-style: none;
              padding: 0;
              margin: 0;
              display: inline-block;
              text-align: left;
              line-height: 2;
              li {
                padding-left: 15px;
                position: relative;
                &:before {
                  content: "-";
                  display: block;
                  position: absolute;
                  top: 0;
                  left: 0;
                }
              }
            }
          }
          .loading {
            text-align: center;
            &__ring {
              display: inline-block;
              position: relative;
              width: 30px;
              height: 30px;
              div {
                box-sizing: border-box;
                display: block;
                position: absolute;
                width: 24px;
                height: 24px;
                margin: 3px;
                border: 3px solid #fff;
                border-radius: 50%;
                animation: ${ring} 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
                border-color: #fff transparent transparent transparent;
                &:nth-of-type(1) {
                  animation-delay: -0.45s;
                }
                &:nth-of-type(2) {
                  animation-delay: -0.3s;
                }
                &:nth-of-type(3) {
                  animation-delay: -0.15s;
                }
              }
            }
          }
          .form-message {
            text-align: center;
            color: #fff;
          }
        `}
      >
        <div className="form-wrapper" data-sal="slide-right">
          <form
            onSubmit={handleFormSubmit}
            data-netlify="true"
            name="Contacto"
            method="post"
          >
            <input type="hidden" name="form-name" value="Contacto" />
            <label htmlFor="name" className="sr-only">
              Nombre
            </label>
            <input
              id="name"
              type="text"
              placeholder="Nombre*"
              name="Nombre"
              required
            />
            <label htmlFor="email" className="sr-only">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Correo*"
              name="_replyto"
              required
            />
            <label htmlFor="averagePayment" className="sr-only">
              Pago promedio a la CFE
            </label>
            <input
              id="averagePayment"
              type="number"
              placeholder="Pago promedio bimestral a CFE*"
              min="0"
              name="Pago promedio bimestral a CFE"
            />
            <input
              id="receipt"
              type="file"
              name="attachment"
              onChange={handleFileUpload}
            />
            <label htmlFor="receipt">
              <span>Sube tu recibo de luz (opcional)</span>
            </label>
            <Button
              type="submit"
              disabled={serverState.submitting}
              aria-label="button"
            >
              Enviar
            </Button>
            {serverState.submitting && (
              <div className="loading">
                <div className="loading__ring">
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </div>
            )}
            {serverState.status && (
              <div className="form-message">{serverState.status.msg}</div>
            )}
          </form>
        </div>
        <div className="form-text" data-sal="slide-left">
          <h2>
            {primary.titulo.map((line, index) => (
              <span key={`contact-form-line-${index}`}>{line.text}</span>
            ))}
          </h2>
          {RichText.render(primary.content)}
        </div>
      </div>
    </>
  )
}

export default ContactForm
