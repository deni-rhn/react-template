import Helmet from 'react-helmet';
import NavComponent from '../nav/nav-component';
import React, { Component, Fragment } from 'react';
import FooterComponent from '../footer/footer-component';
import HeaderComponent from '../header/header-component';
import HomeComponent from '../home-component';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PointTableComponent from '../../poin-table/point-table-component';

class PatternComponent extends Component {

    render() {
        return(
            <Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Porda DIY 2019</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                </Helmet>
                <Router>
                    <Switch>
                        <div id="layout">

                            <HeaderComponent />
                                
                            <NavComponent />
                                <Route path='/' exact={true} component={HomeComponent} />
                                <Route path='/perolehan-medali' exact={true} component={PointTableComponent} />
                            
                        </div>
                    </Switch>
                </Router>

                <FooterComponent />
                
            </Fragment>
        );
    }
}

export default PatternComponent;