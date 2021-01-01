import React, { Component } from 'react'

export default class Skill extends Component {
    render() {
        return (
            <div className="Skill" style={{ fontSize: "20px", fontFamily: "serif", letterSpacing: "1px" }}>
                <span><h4>SKILLS</h4><hr /></span>
                <blockquote>
                    <p>- HTML / CSS </p>
                    <p>- JavaScript / DOM </p>
                    <p>- CSS Preprocessing </p>
                    <p>- Version Control / Git </p>
                    <p>- Responsive </p>
                    <p>- Browser development tools </p>
                </blockquote>
            </div>
        )
    }
}
