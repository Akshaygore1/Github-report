import React, { useEffect, useState } from "react"
import UserItem from "./UserItem"
import Loader from "../../Assets/Loader"

function UserResult() {
  const [users, setusers] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetchUsers()
  }, [])

  const fetchUsers = async () => {
    const response = await fetch(`${process.env.REACT_APP_GITHUB_URL}/users`, {
      headers: {
        Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`
      }
    })

    const data = await response.json()
    setusers(data)
    setLoading(false)
  }
  return (
    <>
      {!loading ? (
        <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
          {users.map((user) => (
            <UserItem key={user.id} user={user} />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </>
  )
}

export default UserResult
