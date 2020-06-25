import { useStaticQuery, graphql } from "gatsby"

const useSlices = () => {
  const { prismic } = useStaticQuery(graphql`
    {
      prismic {
        allHomepages {
          edges {
            node {
              body {
                ... on PRISMIC_HomepageBodyHero_slider {
                  type
                  fields {
                    button_text
                    button_url
                    headline
                    image
                    imageSharp {
                      childImageSharp {
                        fluid {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                }
                ... on PRISMIC_HomepageBodyTexto_con_titulo {
                  type
                  primary {
                    title
                    text
                  }
                }
                ... on PRISMIC_HomepageBodyGrid_de_texto {
                  type
                  primary {
                    title
                  }
                  fields {
                    title
                    content
                  }
                }
                ... on PRISMIC_HomepageBodyTexto_con_imagen {
                  type
                  primary {
                    title
                  }
                  fields {
                    title
                    content
                    image
                    imageSharp {
                      childImageSharp {
                        fluid {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                }
                ... on PRISMIC_HomepageBodyGrid_de_imagenes {
                  type
                  primary {
                    title
                  }
                  fields {
                    title
                    content
                    image
                    imageSharp {
                      childImageSharp {
                        fluid {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                }
                ... on PRISMIC_HomepageBodyLista_numerica {
                  type
                  primary {
                    title
                    description
                  }
                  fields {
                    title
                    content
                  }
                }
                ... on PRISMIC_HomepageBodySlider_de_imagenes {
                  type
                  fields {
                    image
                    imageSharp {
                      childImageSharp {
                        fluid {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                }
                ... on PRISMIC_HomepageBodyFormulario_de_contacto {
                  type
                  primary {
                    titulo
                    content
                  }
                }
                ... on PRISMIC_HomepageBodyHightlight {
                  type
                  primary {
                    title
                    content
                    image
                    imageSharp {
                      childImageSharp {
                        fluid {
                          ...GatsbyImageSharpFluid
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  return prismic.allHomepages.edges[0].node.body.map(slice => {
    const content = {}
    if (slice.fields) {
      content["fields"] = slice.fields
    }
    if (slice.primary) {
      content["primary"] = slice.primary
    }
    return {
      type: slice.type,
      ...content,
    }
  })
}

export default useSlices
