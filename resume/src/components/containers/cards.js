import React, { Component } from 'react'
import Img from '../../assets/IMG_7682.JPG'
export default class Card extends Component {
    render() {
        return (

            <div className="card" style={{marginTop: "45px", width: '100%', borderRadius: '50px', 
            boxShadow: 'initial' }}>
                <div className="card-image waves-effect waves-block waves-light">
                    <img className="activator" src={Img} />
                </div>

                <div className="card-reveal">
                    <p>Here is some more information about this product that is only revealed once clicked on.</p>
                </div>
            </div>

        )
    }
}
