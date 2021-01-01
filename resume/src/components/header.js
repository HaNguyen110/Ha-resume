import React, { Component } from 'react'
import { HashLink as Link } from 'react-router-hash-link';
export default class Header extends Component {
    render() {
        return (
            <>
                <nav style={{ backgroundColor: '#30b15b' }}>
                    <div className="container-fluid">
                        <div class="nav-wrapper">
                            <Link to='/' className='brand-logo'
                                style={{ color: 'black', fontFamily: "cursive", marginLeft: "15px", textShadow: "inherit" }}>
                                DEVELOPER RESUME
                            </Link>
                            <ul className='sidenav' id='side-nav'>
                                <li>
                                    <Link to='/' >
                                        <i className="fas fa-home" ></i>Home
                                </Link>
                                </li>

                                <li>
                                    <Link to="/educations">
                                        <i className="fas fa-graduation-cap"></i>Educations
                                </Link>
                                </li>
                                <li>
                                    <a href='https://i.topcv.vn/nguyenthithanhha?ref=3662607' target="blank">
                                        <i className="fas fa-download"></i> Download
                            </a>
                                </li>
                            </ul>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li>
                                    <Link to='/'>
                                        <i className="fas fa-home"></i> Home
                                </Link>
                                </li>
                                <li>
                                    <Link to='/educations'>
                                        <i className="fas fa-graduation-cap"></i> Educations
                            </Link>
                                </li>
                                <li>
                                    <a href='https://i.topcv.vn/nguyenthithanhha?ref=3662607' target="blank">
                                        <i className="fas fa-download"></i> Download
                                </a>
                                </li>
                            </ul>
                        </div>

                    </div>
                </nav>
            </>
        )
    }
}
