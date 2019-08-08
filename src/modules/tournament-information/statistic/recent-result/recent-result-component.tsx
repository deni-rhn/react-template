import React, { Component, Fragment } from 'react';

class RecentResultComponent extends Component {
    render() {
        return(
            <Fragment>
                <div className="col-lg-5">
                    <div className="recent-results">
                        <h5><span>Berita Terkini</span></h5>
                        <div className="info-results">
                            <ul>
                                <li>
                                    <span className="head">
                                        Medali Emas <span className="date">27 Agustus 2019</span>
                                    </span>
                                    <div className="goals-result">
                                        <div>
                                            <span className="white-text">Gunugkidul</span>
                                        </div>
                                        <span className="goals">
                                            <b>2</b>
                                        </span>
                                        <div>
                                            <span className="white-text"> di Cabor Bulutangkis</span>
                                        </div>
                                    </div>
                                </li>
                                <li>
                                    <span className="head">
                                        Medali Emas <span className="date">27 Agustus 2019</span>
                                    </span>
                                    <div className="goals-result">
                                        <div>
                                            <span className="white-text">Jogjakarta</span>
                                        </div>
                                        <span className="goals">
                                            <b>2</b>
                                        </span>
                                        <div>
                                            <span className="white-text"> di Cabor Renang</span>
                                        </div>
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