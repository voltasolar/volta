/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
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
