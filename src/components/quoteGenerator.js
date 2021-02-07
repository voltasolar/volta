import React, { useState, useEffect } from "react"
import { css } from "@emotion/core"
import { window, document } from "browser-monads"

import { colors } from "./colors"
import Button from "./button"
import Energy from "../images/energy_1.inline.svg"
import Money from "../images/money_1.inline.svg"
import Rocket from "../images/rocket_1.inline.svg"

const QuoteGenerator = ({ primary }) => {
  const [selectedForm, setSelectedForm] = useState(1)

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", () => {
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
    })
  }, [selectedForm])

  return (
    <>
      <div
        id="contacto"
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
              }
            }
            @media (min-width: 768px) {
              width: 50%;
              flex: 0 0 50%;
              order: 0;
            }
            @media (min-width: 992px) {
              padding: 70px 100px;
            }
          }
          .form-text {
            background-color: ${colors.yellow};
            width: 100%;
            flex: 0 0 100%;
            padding: 100px 15px;
            text-align: center;
            order: 0;
            @media (min-width: 768px) {
              width: 50%;
              flex: 0 0 50%;
              order: 1;
            }
            @media (min-width: 992px) {
              padding: 100px 70px;
            }
            form {
              width: 100%;
            }
            input,
            textarea,
            label {
              width: 100%;
              background: transparent;
              border: solid 2px #000;
              border-radius: 0;
              margin-bottom: 13px;
              padding: 15px;
              color: #000;
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
              border: solid 2px #000;
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
              >
                <Rocket />
              </Button>
              <h3>Lectura de recibo con RPU</h3>
            </div>
            <div>
              <Button
                onClick={() => {
                  setSelectedForm(2)
                }}
              >
                <Money />
              </Button>
              <h3>De precio a consumo</h3>
            </div>
            <div>
              <Button
                onClick={() => {
                  setSelectedForm(3)
                }}
              >
                <Energy />
              </Button>
              <h3>Consumo</h3>
            </div>
          </div>
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
              <label htmlFor="" className="sr-only">
                Localidad
              </label>
              <select
                className="form-control select-select2 select2-hidden-accessible inverter-options"
                name="locations"
                id=""
              >
                <option id="" value="">
                  Localidad
                </option>
              </select>
              <label htmlFor="" className="sr-only">
                Tarifa
              </label>
              <select
                className="form-control select-select2 select2-hidden-accessible inverter-options"
                name="energy_rates"
                id=""
              >
                <option id="" value="">
                  Tarifa
                </option>
              </select>
              <label htmlFor="" className="sr-only">
                Monto Mayor (MXN)
              </label>
              <input
                type="text"
                id="first_payment_input"
                name="first_payment"
                className="ctrlSun-form-control"
                placeholder="Monto Mayor (MXN)"
              ></input>
              <label htmlFor="" className="sr-only">
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
          {/* {selectedForm === 3 && (
            <form id="serviceNumberConsumptionForm">
              <label htmlFor="" className="sr-only">
                Nombre del Contacto
              </label>
              <input
                type="text"
                name="contact_name"
                className="ctrlSun-form-control"
                placeholder="Nombre del Contacto"
              />
              <label htmlFor="" className="sr-only">
                Número Celular
              </label>
              <input
                type="text"
                name="mobile"
                id="mobile_input"
                className="ctrlSun-form-control"
                placeholder="Número Celular"
              ></input>
              <label htmlFor="" className="sr-only">
                Correo
              </label>
              <input
                type="email"
                name="email"
                className="ctrlSun-form-control"
                placeholder="Correo"
              ></input>
              <label htmlFor="" className="sr-only">
                Localidad
              </label>
              <select className="form-control" name="locations" id="">
                <option id="" value="">
                  Localidad
                </option>
              </select>
              <label htmlFor="" className="sr-only">
                Tarifa
              </label>
              <select className="form-control" name="energy_rates" id="">
                <option id="" value="">
                  Tarifa
                </option>
              </select>
              <label htmlFor="" className="sr-only">
                Consumo Mayor (kWh)
              </label>
              <input
                type="text"
                id="first_payment_input"
                name="first_consumption"
                className="ctrlSun-form-control"
                placeholder="Consumo Mayor (kWh)"
              />
              <label htmlFor="" className="sr-only">
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
          )} */}
        </div>
      </div>
    </>
  )
}

export default QuoteGenerator
