import React from "react"
import { Link } from "gatsby"

import Image from "../components/image"

const IndexPage = () => (
  <div
    className="background"
    style={{
      // Defaults are overwrite-able by setting one or each of the following:
      backgroundSize: "contain",
      backgroundPosition: "center",
      backgroundRepeat: "cover",
    }}
  >
    <Image />
  </div>
)

export default IndexPage
