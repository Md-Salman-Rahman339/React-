import React from 'react'

const PP = (props) => {
    const {titletext,descText}=props
  return (
    <div>
      <h1>{titletext}</h1>
      <p>{descText}</p>
    </div>
  )
}

export default PP
