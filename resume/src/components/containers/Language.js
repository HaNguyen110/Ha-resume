import React, { Component } from 'react'

export default class Language extends Component {
    render() {
        return (
            <div className="language" style = {{fontSize: "20px", fontFamily:"serif", letterSpacing: "1px"}}>
                <h4>LANGUAGES</h4>
                <hr />
                <i className="fas fa-flag-usa" style = {{fontSize: "20px"}}>English</i>
            </div>
        )
    }
}
