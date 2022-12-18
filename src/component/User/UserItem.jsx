import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

function UserItem({ user: { login, avatar_url } }) {
  return (
    <div className="card shadow-lg compact bg-slate-300">
      <div className="flex-column item-center space-x-4 card-body">
        <div className="flex justify-center">
          <div className="avatar">
            <div className="w-24 rounded-full">
              <img src={avatar_url} />
            </div>
          </div>
        </div>
        <div className="flex-col">
          <h2 className="card-title justify-center pr-4">{login}</h2>
          <Link
            className="text-base-content text-opacity-70 pl-7"
            to={`/users/${login}`}
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  )
}

UserItem.propTypes = {
  user: PropTypes.object.isRequired
}
export default UserItem
