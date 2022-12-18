import React from "react"
import UserResult from "../component/User/UserResult"
import UserSearch from "../component/User/UserSearch"

function Home() {
  return (
    <div className="container">
      <div className="flex justify-center">
        {/* <h1 className="text-4xl">Welcome To Github Finder</h1> */}
        {/* <UserSearch /> */}
        <UserResult />
      </div>
    </div>
  )
}

export default Home
