import React, { Component } from 'react'
import "./Button.css"
export class Button extends Component {
    render() {
        return (
            <div className="Button" 
            style={btnStyle}
            onClick={this.props.onClick}
            data-size={this.props.size}
            data-value={this.props.value}>
                
                {this.props.label}
            </div>
        )
    }
}

export default Button
const btnStyle = {
    background:'#cad2c5',
    width:'25%'
}
