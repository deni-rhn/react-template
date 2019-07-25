import React, { Component, Fragment } from 'react';

class TopPlayerComponent extends Component {
    render() {
        return(
            <Fragment>
                <div className="col-lg-4">
                    <div className="player-ranking">
                        <h5><a href="group-list.html">Top player</a></h5>
                        <div className="info-player">
                            <ul>
                                <li>
                                    <span className="position">
                                        1
                                    </span>
                                    <a href="single-team.html">
                                        <img src="../../../../assets/img/players/1.jpg" alt="" />
                                        Cristiano R.
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
                                        <img src="../../../../assets/img/players/2.jpg" alt="" />
                                        Lionel Messi
                                    </a>
                                    <span className="points">
                                        88
                                    </span>
                                </li>
                                <li>
                                    <span className="position">
                                        3
                                    </span>
                                    <a href="single-team.html">
                                        <img src="../../../../assets/img/players/3.jpg" alt="" />
                                        Neymar
                                    </a>
                                    <span className="points">
                                        86
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

export default TopPlayerComponent;