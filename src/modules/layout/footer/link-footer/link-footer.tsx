import React, { Component, Fragment } from 'react';

class LinkFooter extends Component {
    render() {
        return(
            <Fragment>
                <div className="col-lg-2 col-md-5 col-sm-5">
                    <div className="info-links">
                        <h5>Organisation</h5>
                        <ul>
                            <li><a href="#">Volunteers</a></li>
                            <li><a href="#">Committees</a></li>
                            <li><a href="#">Official Documents</a></li>
                            <li><a href="#">Terms of Service</a></li>
                        </ul>
                    </div>
                </div>


                <div className="col-lg-4 col-md-7 col-sm-7">
                    <div className="info-links">
                        <h5>Groups</h5>
                        <ul className="columns">
                            <li><a href="#">GROUP A</a></li>
                            <li><a href="#">GROUP B</a></li>
                            <li><a href="#">GROUP C</a></li>
                            <li><a href="#">GROUP D</a></li>
                            <li><a href="#">GROUP E</a></li>
                            <li><a href="#">GROUP F</a></li>
                            <li><a href="#">GROUP G</a></li>
                            <li><a href="#">GROUP H</a></li>
                        </ul>
                    </div>
                </div>


                <div className="col-lg-2 col-md-5 col-sm-5">
                    <div className="info-links">
                        <h5>Interest Links</h5>
                        <ul>
                            <li><a href="#">Statistics</a></li>
                            <li><a href="#">Teams</a></li>
                            <li><a href="#">Qualifiers</a></li>
                            <li><a href="#">Ticketing</a></li>
                        </ul>
                    </div>
                </div>


                <div className="col-lg-4 col-md-7 col-sm-7">
                    <div className="info-links">
                        <h5>Organisation</h5>
                        <ul className="columns">
                            <li><a href="#">NIZHNY NOVGOROD</a></li>
                            <li><a href="#">SAINT PETERSBURG</a></li>
                            <li><a href="#">EKATERINBURG</a></li>
                            <li><a href="#">MOSCOW</a></li>
                            <li><a href="#">KAZAN</a></li>
                            <li><a href="#">KALININGRAD</a></li>
                            <li><a href="#">VOLGOGRAD</a></li>
                            <li><a href="#">ROSTOV-ON-DON</a></li>
                        </ul>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default LinkFooter;