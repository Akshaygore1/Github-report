import React, { useState } from "react"

function UserSearch() {
  const [text, settext] = useState("")

  const handleChange = (e) => {
    settext(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Txt", text)
  }
  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 mb-8 gap-8">
      <div>
        <form>
          <div className="form-control">
            <div className="relative">
              <input
                type="text"
                className="w-full pr-40 bg-gray-200 input input-lg text-black"
                placeholder="Search"
                onChange={handleChange}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none w-36 btn btn-lg"
                onClick={handleSubmit}
              >
                Go
              </button>
            </div>
          </div>
        </form>
      </div>
      <div>
        <button className="btn btn-ghost btn-lg">Clear</button>
      </div>
    </div>
  )
}

export default UserSearch
