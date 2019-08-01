import React, { Component, Fragment } from 'react';

class LinkFooter extends Component {
    render() {
        return(
            <Fragment>
                <div className="col-lg-2 col-md-5 col-sm-5">
                    <div className="info-links">
                        <h5>Organisation</h5>
                        <ul>
                            <li><span>Volunteers</span></li>
                            <li><span>Committees</span></li>
                            <li><span>Official Documents</span></li>
                            <li><span>Terms of Service</span></li>
                        </ul>
                    </div>
                </div>


                <div className="col-lg-4 col-md-7 col-sm-7">
                    <div className="info-links">
                        <h5>Groups</h5>
                        <ul className="columns">
                            <li><span>GROUP A</span></li>
                            <li><span>GROUP B</span></li>
                            <li><span>GROUP C</span></li>
                            <li><span>GROUP D</span></li>
                            <li><span>GROUP E</span></li>
                            <li><span>GROUP F</span></li>
                            <li><span>GROUP G</span></li>
                            <li><span>GROUP H</span></li>
                        </ul>
                    </div>
                </div>


                <div className="col-lg-2 col-md-5 col-sm-5">
                    <div className="info-links">
                        <h5>Interest Links</h5>
                        <ul>
                            <li><span>Statistics</span></li>
                            <li><span>Teams</span></li>
                            <li><span>Qualifiers</span></li>
                            <li><span>Ticketing</span></li>
                        </ul>
                    </div>
                </div>


                <div className="col-lg-4 col-md-7 col-sm-7">
                    <div className="info-links">
                        <h5>Organisation</h5>
                        <ul className="columns">
                            <li><span>NIZHNY NOVGOROD</span></li>
                            <li><span>SAINT PETERSBURG</span></li>
                            <li><span>EKATERINBURG</span></li>
                            <li><span>MOSCOW</span></li>
                            <li><span>KAZAN</span></li>
                            <li><span>KALININGRAD</span></li>
                            <li><span>VOLGOGRAD</span></li>
                            <li><span>ROSTOV-ON-DON</span></li>
                        </ul>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default LinkFooter;