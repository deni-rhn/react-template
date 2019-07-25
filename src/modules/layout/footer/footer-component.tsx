import React, { Component, Fragment } from 'react';
import LinkFooter from './link-footer/link-footer';
import SocmedFooter from './socmed-footer/socmed-footer';

class FooterComponent extends Component {
    render() {
        return(
            <Fragment>
                <footer id="footer">
                    <div className="top-footer">
                        <SocmedFooter /> 
                    </div>
                    <div className="links-footer">
                        <div className="container">
                            <div className="row">
                                <LinkFooter />
                            </div>
                        </div>
                    </div>
                </footer>
                <div className="footer-down">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <p>&copy; 2019 Porda DIY . All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default FooterComponent;