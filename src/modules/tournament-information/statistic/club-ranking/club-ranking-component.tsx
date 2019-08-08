import React, { Component, Fragment } from 'react';

class ClubRankingComponent extends Component {
    render() {
        return(
            <Fragment>
                <div className="col-lg-4">
                    <div className="club-ranking">
                        <h5><span>Perolehan Medali Emas</span></h5>
                        <div className="info-ranking">
                            <ul>
                                <li>
                                    <span className="position white-text">
                                        1
                                    </span>
                                    <span className="white-text">
                                        Jogjakarta
                                    </span>
                                    <span className="points">
                                        90
                                    </span>
                                </li>
                                <li>
                                    <span className="position white-text">
                                        2
                                    </span>
                                    <span className="white-text">
                                        Sleman
                                    </span>
                                    <span className="points">
                                        86
                                    </span>
                                </li>
                                <li>
                                    <span className="position white-text">
                                        3
                                    </span>
                                    <span className="white-text">
                                        Bantul
                                    </span>
                                    <span className="points">
                                        84
                                    </span>
                                </li>
                                <li>
                                    <span className="position white-text">
                                        4
                                    </span>
                                    <span className="white-text">
                                        Gunungkidul
                                    </span>
                                    <span className="points">
                                        80
                                    </span>
                                </li>
                                <li>
                                    <span className="position white-text">
                                        5
                                    </span>
                                    <span className="white-text">
                                        Kulon Progo
                                    </span>
                                    <span className="points">
                                        76
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