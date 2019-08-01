import Helmet from 'react-helmet';
import NavComponent from '../nav/nav-component';
import React, { Component, Fragment } from 'react';
import FooterComponent from '../footer/footer-component';
import HeaderComponent from '../header/header-component';
import HomeComponent from '../home-component';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import PointTableComponent from '../../poin-table/point-table-component';
import ResultListComponent from '../../result/result-list/result-list-component';
import ScheduleComponent from '../../schedule/schedule-component';
import TeamListComponent from '../../teams/team-list/team-list-component';
import PointTableCabangComponent from '../../poin-table/point-table-cabang/point-table-cabang-component';

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
                                <Route path='/hasil-pertandingan' exact={true} component={ResultListComponent} />
                                <Route path='/jadwal-pertandingan' exact={true} component={ScheduleComponent} />
                                <Route path='/daftar-tim' exact={true} component={TeamListComponent} />
                                <Route path='/medali-cabang' exact={true} component={PointTableCabangComponent} />
                            
                        </div>
                    </Switch>
                </Router>

                <FooterComponent />
                
            </Fragment>
        );
    }
}

export default PatternComponent;