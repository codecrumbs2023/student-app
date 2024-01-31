import React from 'react'

const ChildComponent = (props) => {
    const { message } = props;
  return (
    <div>{message}</div>
  )
}

export default ChildComponent