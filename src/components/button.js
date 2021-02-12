import React from "react"
import { css } from "@emotion/core"
import { colors } from "./colors"

const Button = ({ children, onClick, type, disabled, ...props }) => {
  return (
    <>
      <button
        type={type}
        css={css`
          background-color: ${colors.yellow};
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 0.2em;
          border: 0;
          padding: 15px 60px;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
          &:hover {
            background-color: ${colors.darkYellow};
          }
          &:disabled {
            cursor: not-allowed;
          }
        `}
        onClick={onClick}
        disabled={disabled}
        {...props}
      >
        {children}
      </button>
    </>
  )
}

export default Button
