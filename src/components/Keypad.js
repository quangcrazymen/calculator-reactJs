import React, { Component } from 'react'
import "./Keypad.css"
export class Keypad extends Component {
    render() {
        return (
            //using composition instead of inheritance
            <div className="Keypad">
                {this.props.children}
            </div>
        )
    }
}

export default Keypad
