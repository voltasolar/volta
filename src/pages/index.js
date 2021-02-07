import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import useSlices from "../utils/useSlices"
import HeroSlider from "../components/heroSlider"
import TextWithTitle from "../components/textWithTitle"
import TextGrid from "../components/textGrid"
import TextWithImage from "../components/textWithImage"
import ImageGrid from "../components/imageGrid"
import CollapseList from "../components/collapseList"
import ImageSlider from "../components/imageSlider"
import ContactForm from "../components/contactForm"
import QuoteGenerator from "../components/quoteGenerator"
import HighlightBanner from "../components/highlightBanner"

const HomePage = () => {
  const slices = useSlices()
  return (
    <Layout>
      <SEO title="Inicio" />
      {slices.map((slice, index) => {
        switch (slice.type) {
          case "hero_slider":
            return (
              <HeroSlider
                key={`${slice.type}-${index}`}
                slides={slice.fields}
              />
            )
          case "texto_con_titulo":
            return (
              <TextWithTitle
                key={`${slice.type}-${index}`}
                content={slice.primary}
              />
            )
          case "grid_de_texto":
            return (
              <TextGrid
                key={`${slice.type}-${index}`}
                primary={slice.primary}
                fields={slice.fields}
              />
            )
          case "texto_con_imagen":
            return (
              <TextWithImage
                key={`${slice.type}-${index}`}
                primary={slice.primary}
                fields={slice.fields}
              />
            )
          case "grid_de_imagenes":
            return (
              <ImageGrid
                key={`${slice.type}-${index}`}
                primary={slice.primary}
                fields={slice.fields}
              />
            )
          case "lista_numerica":
            return (
              <CollapseList
                key={`${slice.type}-${index}`}
                primary={slice.primary}
                fields={slice.fields}
              />
            )
          case "slider_de_imagenes":
            return (
              <ImageSlider
                key={`${slice.type}-${index}`}
                fields={slice.fields}
              />
            )
          case "formulario_de_contacto":
            return (
              // <ContactForm
              //   key={`${slice.type}-${index}`}
              //   primary={slice.primary}
              // />
              <QuoteGenerator
                key={`${slice.type}-${index}`}
                primary={slice.primary}
              />
            )
          case "hightlight":
            return (
              <HighlightBanner
                key={`${slice.type}-${index}`}
                primary={slice.primary}
              />
            )
          default:
            return <p key={`default-${index}`}>No component was found</p>
        }
      })}
    </Layout>
  )
}

export default HomePage
// import React from "react"
// import { Link } from "gatsby"

// import Layout from "../components/layout"
// import Image from "../components/image"
// import SEO from "../components/seo"

// const IndexPage = () => (
//   <Layout>
//     <SEO title="Home" />
//     <h1>Hi people</h1>
//     <p>Welcome to your new Gatsby site.</p>
//     <p>Now go build something great.</p>
//     <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
//       <Image />
//     </div>
//     <Link to="/page-2/">Go to page 2</Link> <br />
//     <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
//   </Layout>
// )

// export default IndexPage
