import React, { Component, Fragment } from 'react';

class SocmedFooter extends Component {
    render() {
        return(
            <Fragment>
                <div className="col-lg-12">
                    <div className="logo-footer">
                        <h2>PORDA XV 2019</h2>
                    </div>
                </div>


                <ul className="social">
                    <li>
                        <div>
                            <span className="facebook">
                                <i className="fa fa-facebook"></i>
                            </span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span className="twitter-icon">
                                <i className="fa fa-twitter"></i>
                            </span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span className="vimeo">
                                <i className="fa fa-vimeo-square"></i>
                            </span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span className="google-plus">
                                <i className="fa fa-google-plus"></i>
                            </span>
                        </div>
                    </li>
                    <li>
                        <div>
                            <span className="youtube">
                                <i className="fa fa-youtube"></i>
                            </span>
                        </div>
                    </li>
                </ul>
            </Fragment>
        );
    }
}

export default SocmedFooter;