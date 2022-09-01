import React from 'react'

function Profile(props) {
 
  return (
    <div>
        <img src={props.data.Img} alt="prof"></img>
        <h1>{props.data.FullName}</h1>
        <h1>{props.data.Bio}</h1>
        <h1>{props.data.Profession}</h1>
        </div>
  )
}

export default Profile