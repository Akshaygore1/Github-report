import React from "react"
import Spinner from "./github.gif"

function Loader() {
  return (
    <div className="w-56 mt-5">
      <img src={Spinner} alt="Loading" />
    </div>
  )
}

export default Loader
