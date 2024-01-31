import React from 'react'
import ChildComponent from './ChildComponent'

export const ParentComponent = () => {
    const messageText = "Welcome to React"
  return (
    <div>
    <ChildComponent message={messageText}/>
    </div>
  )
}

export default ParentComponent;
