import React, { Component, Fragment } from 'react';
import '../../../assets/css/_polda_diy.css';
import '../../../assets/css/custom.css';
import logo from '../../../assets/img/logo.png';
import 'bootstrap/dist/js/bootstrap.min.js';
import {Link} from 'react-router-dom';

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
                                        <Link to="/">
                                            <span>
                                                <img src={logo} alt="Logo" className="logo_img" />
                                            </span>
                                        </Link>                                        
                                    </div>
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