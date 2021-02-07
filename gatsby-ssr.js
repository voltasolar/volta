import React from "react"

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script
      key="https://code.jquery.com/jquery-3.3.1.min.js"
      src="https://code.jquery.com/jquery-3.3.1.min.js"
    />,
    <script
      key="https://ctrl-sun-production.s3.amazonaws.com/lib/qq_public_bundle.js"
      src="https://ctrl-sun-production.s3.amazonaws.com/lib/qq_public_bundle.js"
      type="module"
    />,
  ])
}
