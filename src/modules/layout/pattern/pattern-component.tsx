import Helmet from 'react-helmet';
import React, { Component, Fragment } from 'react';
import HeaderComponent from '../header/header-component';

class PatternComponent extends Component {
    render() {
        return(
            <Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Porda DIY 2019</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                </Helmet>
                <div id="layout">
                    <HeaderComponent />
                </div>
            </Fragment>
        );
    }
}

export default PatternComponent;