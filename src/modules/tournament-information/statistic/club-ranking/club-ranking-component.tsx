import React, { Component, Fragment } from 'react';

class ClubRankingComponent extends Component {
    render() {
        return(
            <Fragment>
                <div className="col-lg-4">
                    <div className="club-ranking">
                        <h5><a href="group-list.html">Club Ranking</a></h5>
                        <div className="info-ranking">
                            <ul>
                                <li>
                                    <span className="position">
                                        1
                                    </span>
                                    <a href="single-team.html">
                                        <img src="../../../../assets/img/club-logo/rusia.png" alt="" />
                                        Russia
                                    </a>
                                    <span className="points">
                                        90
                                    </span>
                                </li>
                                <li>
                                    <span className="position">
                                        2
                                    </span>
                                    <a href="single-team.html">
                                        <img src="../../../../assets/img/club-logo/arabia.png" alt="" />
                                        Saudi Arabia
                                    </a>
                                    <span className="points">
                                        86
                                    </span>
                                </li>
                                <li>
                                    <span className="position">
                                        3
                                    </span>
                                    <a href="single-team.html">
                                        <img src="../../../../assets/img/club-logo/bel.png" alt="" />
                                        Egypt
                                    </a>
                                    <span className="points">
                                        84
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default ClubRankingComponent;