import React from 'react'

function Components(props) {
  return (
    <div>
        <h1>Student ID</h1>
        <h2>Name = {props.name}</h2>
        <h2>Age = {props.age}</h2>
        <h2>Hobby = {props.hobby}</h2>
        </div>

  )
}

export default Components