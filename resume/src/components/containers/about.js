import React, { Component } from 'react'

export default class About extends Component {
    render() {
        return (
            <div className='row' style={{ marginLeft: "5px", fontFamily: "serif", fontSize: "19px" }} >
                <blockquote>
                    <div className="col s12">
                        <h3>About Me: </h3>
                        <hr />
                    </div>

                    <div className="col s6" style={{ letterSpacing: "0.8px", fontWeight: "450" }}>
                        <strong>First Name: </strong>
                        <span>Nguyen</span>
                    </div>
                    <div className="col s6" style={{ letterSpacing: "0.8px", fontWeight: "450" }}>
                        <strong>Last Name: </strong>
                        <span>Ha</span>
                    </div>
                    <div className="col s6" style={{ letterSpacing: "0.8px", fontWeight: "450" }}>
                        <strong>Sex: </strong>
                        <span>Female</span>
                    </div>
                    <div className="col s6" style={{ letterSpacing: "0.8px", fontWeight: "450" }}>
                        <strong>Date: </strong>
                        <span>01-10-1999</span>
                    </div>
                    <div className="col s6" style={{ letterSpacing: "0.8px", fontWeight: "450" }}>
                        <strong>Address: </strong>
                        <span>Da Nang, Viet Nam</span>
                    </div>
                    <div className="col s6" style={{ letterSpacing: "0.8px", fontWeight: "450" }}>
                        <strong>Phone: </strong>
                        <span>0935425803</span>
                    </div>
                    <div className="col s6" style={{ letterSpacing: "0.8px", fontWeight: "450" }}>
                        <strong>Email: </strong>
                        <span>hanguyen@gmail.com</span>
                    </div>
                    <div className="col s12" style={{
                        fontSize: "20px", textAlign: "center",
                        paddingLeft: "0px", color: "red", fontWeight: "700", fontFamily: "monospace",
                        paddingRight: "60px"
                    }}>
                        <p>
                            "Don’t wait for the perfect moment, take the moment and make it
                            perfect."
                    </p>
                    </div>
                </blockquote>
            </div>

        )
    }
}
