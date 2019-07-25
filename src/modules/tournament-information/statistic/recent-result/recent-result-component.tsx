import React, { Component, Fragment } from 'react';

class RecentResultComponent extends Component {
    render() {
        return(
            <Fragment>
                <div className="col-lg-4">
                    <div className="recent-results">
                        <h5><a href="group-list.html">Recent Result</a></h5>
                        <div className="info-results">
                            <ul>
                                <li>
                                    <span className="head">
                                        Portugal Vs Spain <span className="date">27 Jun 2017</span>
                                    </span>
                                    <div className="goals-result">
                                        <a href="single-team.html">
                                            <img src="../../../../assets/img/club-logo/esp.png" alt="" />
                                            Spain
                                        </a>
                                        <span className="goals">
                                            <b>2</b> - <b>3</b>
                                        </span>
                                        <a href="single-team.html">
                                            <img src="../../../../assets/img/club-logo/por.png" alt="" />
                                            Portugal
                                        </a>
                                    </div>
                                </li>
                                <li>
                                    <span className="head">
                                        Rusia Vs Colombia <span className="date">30 Jun 2017</span>
                                    </span>
                                    <div className="goals-result">
                                        <a href="single-team.html">
                                            <img src="../../../../assets/img/club-logo/rusia.png" alt="" />
                                            Rusia
                                        </a>
                                        <span className="goals">
                                            <b>2</b> - <b>3</b>
                                        </span>
                                        <a href="single-team.html">
                                            <img src="../../../../assets/img/club-logo/colombia.png" alt="" />
                                            Colombia
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default RecentResultComponent;