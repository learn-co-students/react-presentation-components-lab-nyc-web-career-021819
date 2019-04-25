// Code SimplerComponent Here
import React, {Component} from 'react'

function SimplerComponent(handleClick){

    handleClick = () => {
      alert("Ahhhh! You can click me?")
    }
  return (
    <div onClick={this.props.handleClick}>
    {"I am just happy"}
    </div>
  )
}


export default SimplerComponent
