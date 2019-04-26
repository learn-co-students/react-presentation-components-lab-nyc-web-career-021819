import React, { Component } from 'react'

export default class SimpleComponent extends Component {

  state = {
    mood: 'happy'
  }

  onClick = () => {
    const toggleMood = this.state.mood === 'happy' ? 'sad' : 'happy';
    this.setState({ mood: toggleMood });
  }

  render() {
    return (
      <div onClick={this.onClick}>
        {this.state.mood}
      </div>
    )
  }
}
