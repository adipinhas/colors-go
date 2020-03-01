import React, { Component } from 'react'

export default class Copied extends Component {
    render() {
        return (
            <div className={`copied-message ${this.props.isPopup &&"showing"}`}
            >
                COPIED!
            </div>
        )
    }
}
