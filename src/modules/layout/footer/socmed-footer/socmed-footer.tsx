import React, { Component, Fragment } from 'react';

class SocmedFooter extends Component {
    render() {
        return(
            <Fragment>
                <div className="col-lg-12">
                    <div className="logo-footer">
                        <h2>Sports Cup</h2>
                    </div>
                </div>


                <ul className="social">
                    <li>
                        <div>
                            <a href="#" className="facebook">
                                <i className="fa fa-facebook"></i>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div>
                            <a href="#" className="twitter-icon">
                                <i className="fa fa-twitter"></i>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div>
                            <a href="#" className="vimeo">
                                <i className="fa fa-vimeo-square"></i>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div>
                            <a href="#" className="google-plus">
                                <i className="fa fa-google-plus"></i>
                            </a>
                        </div>
                    </li>
                    <li>
                        <div>
                            <a href="#" className="youtube">
                                <i className="fa fa-youtube"></i>
                            </a>
                        </div>
                    </li>
                </ul>
            </Fragment>
        );
    }
}

export default SocmedFooter;