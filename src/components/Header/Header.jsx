import React from "react"

export default profile = ({username,avatar,followers}) =>{
    return (
        <div>
            <h1>{username}</h1>
            <img src={avatar} alt="" />
            <span>Number of followers {followers}</span>
        </div>
    )
}