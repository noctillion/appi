import React from "react"
import { Link, graphql } from "gatsby" // de aqui viene data

import Layout from "../components/layout"
import BackgroundSection from "../components/global/backgroundSection"
import Info from "../components/home/info"

import SEO from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <BackgroundSection
      img={data.img.childImageSharp.fluid}
      title="Plants place"
      styledClass="default-background"
    />
    <Info />
  </Layout>
)

/* ...GatsbyImageSharpFluid_tracedSVG era src en busqueda en visual graphql */
export let query = graphql`
  {
    img: file(relativePath: { eq: "default-background.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`

export default IndexPage
