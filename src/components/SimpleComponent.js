import React from 'react';

export default class SimpleComponent extends React.Component{
    state ={ 
        mood: "happy"
    }

    
    handleClick = () => {
        this.setState({
            mood: this.state.mood === "happy" ? this.state.mood = "sad" : this.state.mood = "happy"
        })
    }
    render() {
        return(
            <div onClick={this.handleClick}>{this.state.mood}</div>
        )
    }
}