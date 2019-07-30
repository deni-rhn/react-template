import React, { Component, Fragment } from 'react';
import BgCustomComponent from '../../layout/bg-custom/bg-custom-component';
import Uru from '../../../assets/img/club-logo/uru.png';
import Por from '../../../assets/img/club-logo/por.png';

class ResultListComponent extends Component<any, any> {
    render() {
        return(
            <Fragment>
                <BgCustomComponent />
                <section className="content-info">
                    <div className="container padding-top">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="recent-results results-page">
                                    <div className="info-results">
                                        <ul>
                                            <li>
                                                <span className="head">
                                                    Portugal Vs Spain <span className="date">27 Jun 2017</span>
                                                </span>
                                                <div className="goals-result">
                                                    <a href="single-team.html">
                                                        <img src={Por} alt="" />
                                                        Portugal
                                                    </a>
                                                    <span className="goals">
                                                        <b>2</b> - <b>3</b>
                                                        <a href="single-result.html" className="btn theme">View More</a>
                                                    </span>
                                                    <a href="single-team.html">
                                                        <img src={Uru} alt="" />
                                                        Spain
                                                    </a>
                                                </div>
                                            </li>
                                            <li>
                                                <span className="head">
                                                    Rusia Vs Colombia <span className="date">30 Jun 2017</span>
                                                </span>
                                                <div className="goals-result">
                                                    <a href="single-team.html">
                                                        <img src={Por} alt="" />
                                                        Rusia
                                                    </a>
                                                    <span className="goals">
                                                        <b>2</b> - <b>3</b>
                                                        <a href="single-result.html" className="btn theme">View More</a>
                                                    </span>
                                                    <a href="single-team.html">
                                                        <img src={Uru} alt="" />
                                                        Colombia
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default ResultListComponent;