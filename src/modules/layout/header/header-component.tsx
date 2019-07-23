import React, { Component, Fragment } from 'react';
import '../../../assets/css/_polda_diy.css';
import logo from '../../../assets/img/logo.png';

class HeaderComponent extends Component {

    render() {
        return(
            <Fragment>
                <header>

                    <div className="headerbox">
                        <div className="container">
                            <div className="row justify-content-between align-items-center">

                                <div className="col">
                                    <div className="logo">
                                        <a href="index.html" title="Return Home">
                                            <img src={logo} alt="Logo" className="logo_img" />
                                        </a>
                                    </div>
                                </div>

                                <div className="col">
                                    <a className="mobile-nav" href="#mobile-nav"><i className="fa fa-bars"></i></a>
                                </div>

                            </div>
                        </div>
                    </div>

                </header>
            </Fragment>
        );
    }
}

export default HeaderComponent;