import React, { useState, useEffect } from "react"
import { css } from "@emotion/core"
import { window } from "browser-monads"
import Modal from "react-modal"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import { colors } from "./colors"
import Button from "./button"
import Energy from "../images/energy_1.inline.svg"
import Money from "../images/money_1.inline.svg"
import Recibo from "../images/recibo-icon.inline.svg"

const QuoteGenerator = () => {
  const [selectedForm, setSelectedForm] = useState(1)
  const [isOpen, setIsOpen] = useState(false)

  const { file } = useStaticQuery(graphql`
    {
      file(name: { eq: "datos-consumo" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  useEffect(() => {
    if (selectedForm === 1) {
      window.init_form_rpu(
        process.env.GATSBY_ACCESS_TOKEN,
        "serviceNumberRpuForm",
        "serviceNumberRpuFormErrors"
      )
    }
    if (selectedForm === 2) {
      window.init_form_payment(
        process.env.GATSBY_ACCESS_TOKEN,
        "paymentToConsumptionForm",
        "paymentToConsumptionFormErrors"
      )
    }
    if (selectedForm === 3) {
      window.init_form_consumption(
        process.env.GATSBY_ACCESS_TOKEN,
        "serviceNumberConsumptionForm",
        "serviceNumberConsumptionFormErrors"
      )
    }
  }, [selectedForm])

  return (
    <>
      <div
        id="cotiza"
        css={css`
          display: flex;
          flex-wrap: wrap;
          overflow: hidden;
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
            background-color: #f6f6f6;
            width: 100%;
            flex: 0 0 100%;
            padding: 70px 15px;
            position: relative;
            overflow: hidden;
            order: 1;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
            h2 {
              color: #000;
              margin-bottom: 2rem;
              text-transform: uppercase;
              letter-spacing: 0.2em;
              font-size: 1rem;
              text-align: center;
            }
            .button-group {
              display: flex;
              margin-left: -10px;
              margin-right: -10px;
              min-width: 100%;
              h3 {
                text-align: center;
                font-size: 1rem;
              }
              button {
                padding: 0;
                width: 100%;
                position: relative;
                &:after {
                  content: "";
                  display: block;
                  padding-top: 100%;
                }
                &.active {
                  background-color: ${colors.darkYellow};
                }
                svg {
                  width: 40px;
                  position: absolute;
                  top: 0;
                  left: 0;
                  right: 0;
                  bottom: 0;
                  margin: auto;
                  height: auto;
                }
              }
              & > div {
                padding: 0 10px;
                flex: 1;
                &:first-of-type {
                  svg {
                    width: 30px;
                  }
                }
                p {
                  font-size: 0.9rem;
                }
              }
            }
            @media (min-width: 768px) {
              width: 50%;
              flex: 0 0 50%;
            }
            @media (min-width: 992px) {
              padding: 70px 100px;
            }
          }
          .form-text {
            background-color: #e5e5e5;
            width: 100%;
            flex: 0 0 100%;
            padding: 100px 15px;
            text-align: center;
            order: 1;
            @media (min-width: 768px) {
              width: 50%;
              flex: 0 0 50%;
            }
            @media (min-width: 992px) {
              padding: 100px 70px;
            }
            form {
              width: 100%;
            }
            input,
            textarea,
            label,
            select {
              width: 100%;
              background: transparent;
              border: solid 2px #000;
              border-radius: 0;
              margin-bottom: 13px;
              padding: 15px;
              color: #000;
              font-size: 0.8rem;
              display: block;
              &::placeholder {
                text-transform: uppercase;
                color: #000;
              }
            }
            label {
              color: #ddd5ca;
              text-transform: uppercase;
              cursor: pointer;
            }
            button {
              display: block;
              width: 100%;
              margin-top: 38px;
              margin-bottom: 1.5rem;
            }
          }
          .helpText {
            display: flex;
            align-items: center;
            font-size: 0.8rem;
            margin-right: auto;
            border: none;
            background: transparent;
            margin-top: 1.5rem;
            span {
              width: 20px;
              height: 20px;
              background-color: ${colors.darkYellow};
              color: #000;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              margin-right: 10px;
            }
          }
        `}
      >
        <div className="form-wrapper" data-sal="slide-right">
          <h2>Selecciona una opción para cotizar:</h2>
          <div className="button-group">
            <div>
              <Button
                onClick={() => {
                  setSelectedForm(1)
                }}
                className={selectedForm === 1 ? "active" : ""}
              >
                <Recibo />
              </Button>
              <p>Lectura de recibo con número de servicio</p>
            </div>
            <div>
              <Button
                onClick={() => {
                  setSelectedForm(2)
                }}
                className={selectedForm === 2 ? "active" : ""}
              >
                <Money />
              </Button>
              <p>Precio de tu recibo</p>
            </div>
            <div>
              <Button
                onClick={() => {
                  setSelectedForm(3)
                }}
                className={selectedForm === 3 ? "active" : ""}
              >
                <Energy />
              </Button>
              <p>Consumo de energía</p>
            </div>
          </div>
          <button
            className="helpText"
            onClick={() => {
              setIsOpen(true)
            }}
          >
            <span>?</span>
            ¿Cómo obtener mis datos?
          </button>
        </div>
        <div className="form-text" data-sal="slide-left">
          {selectedForm === 1 && (
            <form id="serviceNumberRpuForm">
              <label htmlFor="service_number_rpu" className="sr-only">
                Número de Servicio (RPU)
              </label>
              <input
                id="service_number_rpu"
                type="text"
                name="service_number_rpu"
                className="ctrlSun-form-control"
                placeholder="Número de Servicio (RPU)"
              />
              <label htmlFor="contact_name" className="sr-only">
                Nombre del Contacto
              </label>
              <input
                type="text"
                id="contact_name"
                name="contact_name"
                className="ctrlSun-form-control"
                placeholder="Nombre del Contacto"
              ></input>
              <label htmlFor="mobile_input" className="sr-only">
                Número Celular
              </label>
              <input
                type="text"
                name="mobile"
                id="mobile_input"
                className="ctrlSun-form-control"
                placeholder="Número Celular"
              ></input>
              <label htmlFor="email" className="sr-only">
                Correo
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="ctrlSun-form-control"
                placeholder="Correo"
              ></input>
              <Button
                type="button"
                aria-label="button"
                id="submitButtonRpuForm"
              >
                Generar Cotización
              </Button>
              <div id="serviceNumberRpuFormErrors"></div>
            </form>
          )}
          {selectedForm === 2 && (
            <form id="paymentToConsumptionForm">
              <label htmlFor="contact_name" className="sr-only">
                Nombre del Contacto
              </label>
              <input
                type="text"
                id="contact_name"
                name="contact_name"
                className="ctrlSun-form-control"
                placeholder="Nombre del Contacto"
              />
              <label htmlFor="mobile_input" className="sr-only">
                Número Celular
              </label>
              <input
                type="text"
                name="mobile"
                id="mobile_input"
                className="ctrlSun-form-control"
                placeholder="Número Celular"
              ></input>
              <label htmlFor="email" className="sr-only">
                Correo
              </label>
              <input
                type="email"
                name="email"
                className="ctrlSun-form-control"
                placeholder="Correo"
              ></input>
              <label htmlFor="locations" className="sr-only">
                Localidad
              </label>
              <select
                className="form-control select-select2 select2-hidden-accessible inverter-options"
                name="locations"
                id="locations"
              >
                <option id="" value="">
                  ------------
                </option>
              </select>
              <label htmlFor="rates" className="sr-only">
                Tarifa
              </label>
              <select
                className="form-control select-select2 select2-hidden-accessible inverter-options"
                name="energy_rates"
                id="rates"
              >
                <option id="" value="">
                  Tarifa
                </option>
              </select>
              <label htmlFor="first_payment_input" className="sr-only">
                Monto Mayor (MXN)
              </label>
              <input
                type="text"
                id="first_payment_input"
                name="first_payment"
                className="ctrlSun-form-control"
                placeholder="Monto Mayor (MXN)"
              ></input>
              <label htmlFor="second_payment_input" className="sr-only">
                Monto Menor (MXN)
              </label>
              <input
                type="text"
                id="second_payment_input"
                name="second_payment"
                className="ctrlSun-form-control"
                placeholder="Monto Menor (MXN)"
              ></input>
              <Button
                type="button"
                aria-label="button"
                id="submitButtonPaymentForm"
              >
                Generar Cotización
              </Button>
              <div id="paymentToConsumptionFormErrors"></div>
            </form>
          )}
          {selectedForm === 3 && (
            <form id="serviceNumberConsumptionForm">
              <label htmlFor="contact_name" className="sr-only">
                Nombre del Contacto
              </label>
              <input
                type="text"
                name="contact_name"
                id="contact_name"
                className="ctrlSun-form-control"
                placeholder="Nombre del Contacto"
              />
              <label htmlFor="mobile_input" className="sr-only">
                Número Celular
              </label>
              <input
                type="text"
                name="mobile"
                id="mobile_input"
                className="ctrlSun-form-control"
                placeholder="Número Celular"
              ></input>
              <label htmlFor="email" className="sr-only">
                Correo
              </label>
              <input
                type="email"
                name="email"
                id="email"
                className="ctrlSun-form-control"
                placeholder="Correo"
              ></input>
              <label htmlFor="locations" className="sr-only">
                Localidad
              </label>
              <select className="form-control" name="locations" id="locations">
                <option id="" value="">
                  Localidad
                </option>
              </select>
              <label htmlFor="rates" className="sr-only">
                Tarifa
              </label>
              <select className="form-control" name="energy_rates" id="rates">
                <option id="" value="">
                  Tarifa
                </option>
              </select>
              <label htmlFor="first_payment_input" className="sr-only">
                Consumo Mayor (kWh)
              </label>
              <input
                type="text"
                id="first_payment_input"
                name="first_consumption"
                className="ctrlSun-form-control"
                placeholder="Consumo Mayor (kWh)"
              />
              <label htmlFor="second_payment_input" className="sr-only">
                Consumo Menor (kWh)
              </label>
              <input
                type="text"
                id="second_payment_input"
                name="second_consumption"
                className="ctrlSun-form-control"
                placeholder="Consumo Menor (kWh)"
              />
              <Button
                type="button"
                aria-label="button"
                id="submitButtonConsumptionForm"
              >
                Generar Cotización
              </Button>
              <div id="serviceNumberConsumptionFormErrors"></div>
            </form>
          )}
        </div>
      </div>
      <Modal
        isOpen={isOpen}
        style={{
          overlay: {
            backgroundColor: "rgba(0,0,0,0.8)",
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 1999,
          },
          content: {
            maxWidth: "700px",
            display: "flex",
            margin: "auto",
            alignItems: "center",
            background: "transparent",
            border: "none",
          },
        }}
        shouldCloseOnOverlayClick
        onRequestClose={() => {
          setIsOpen(false)
        }}
        closeTimeoutMS={1000}
      >
        <div
          style={{
            width: "100%",
            position: "relative",
            background: "#fff",
            paddingTop: "50px",
          }}
        >
          <Button
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              zIndex: 2,
              padding: "10px",
              fontSize: "0.8rem",
            }}
            onClick={() => {
              setIsOpen(false)
            }}
          >
            x
          </Button>
          <Img fluid={file.childImageSharp.fluid} alt="recibo" />
        </div>
      </Modal>
    </>
  )
}

export default QuoteGenerator
