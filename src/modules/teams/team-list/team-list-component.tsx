import React, { Component, Fragment } from 'react';
import Por from '../../../assets/img/club-logo/por.png';
import PorTeams from '../../../assets/img/club-teams/portugal.jpg';
import BgCustomComponent from '../../layout/bg-custom/bg-custom-component';

class TeamListComponent extends Component {
    render() {
        return(
            <Fragment>
                <BgCustomComponent />
                <section className="content-info">
                    <div className="container padding-top">
                        <div className="row portfolioContainer">
                            <div className="col-md-6 col-lg-4 col-xl-3 group-a">
                                <div className="item-team">
                                    <div className="head-team">
                                        <img src={PorTeams} alt="location-team" />
                                        <div className="overlay"><a href="single-team.html">+</a></div>
                                    </div>
                                    <div className="info-team">
                                        <span className="logo-team">
                                            <img src={Por} alt="logo-team" />
                                        </span>
                                        <h4>Gunungkidul</h4>
                                        <span className="location-team">
                                            <i className="fa fa-map-marker" aria-hidden="true"></i>
                                            Stadium
                                        </span>
                                        <span className="group-team">
                                            <i className="fa fa-trophy" aria-hidden="true"></i>
                                            Group A
                                        </span>
                                    </div>
                                    <a href="single-team.html" className="btn">Team Profile <i className="fa fa-angle-right"
                                            aria-hidden="true"></i></a>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xl-3 group-a">
                                <div className="item-team">
                                    <div className="head-team">
                                        <img src={PorTeams} alt="location-team" />
                                        <div className="overlay"><a href="single-team.html">+</a></div>
                                    </div>
                                    <div className="info-team">
                                        <span className="logo-team">
                                            <img src={Por} alt="logo-team" />
                                        </span>
                                        <h4>Yogyakarta</h4>
                                        <span className="location-team">
                                            <i className="fa fa-map-marker" aria-hidden="true"></i>
                                            Stadium
                                        </span>
                                        <span className="group-team">
                                            <i className="fa fa-trophy" aria-hidden="true"></i>
                                            Group A
                                        </span>
                                    </div>
                                    <a href="single-team.html" className="btn">Team Profile <i className="fa fa-angle-right"
                                            aria-hidden="true"></i></a>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xl-3 group-a">
                                <div className="item-team">
                                    <div className="head-team">
                                        <img src={PorTeams} alt="location-team" />
                                        <div className="overlay"><a href="single-team.html">+</a></div>
                                    </div>
                                    <div className="info-team">
                                        <span className="logo-team">
                                            <img src={Por} alt="logo-team" />
                                        </span>
                                        <h4>Sleman</h4>
                                        <span className="location-team">
                                            <i className="fa fa-map-marker" aria-hidden="true"></i>
                                            Stadium
                                        </span>
                                        <span className="group-team">
                                            <i className="fa fa-trophy" aria-hidden="true"></i>
                                            Group A
                                        </span>
                                    </div>
                                    <a href="single-team.html" className="btn">Team Profile <i className="fa fa-angle-right"
                                            aria-hidden="true"></i></a>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xl-3 group-a">
                                <div className="item-team">
                                    <div className="head-team">
                                        <img src={PorTeams} alt="location-team" />
                                        <div className="overlay"><a href="single-team.html">+</a></div>
                                    </div>
                                    <div className="info-team">
                                        <span className="logo-team">
                                            <img src={Por} alt="logo-team" />
                                        </span>
                                        <h4>Bantul</h4>
                                        <span className="location-team">
                                            <i className="fa fa-map-marker" aria-hidden="true"></i>
                                            Stadium
                                        </span>
                                        <span className="group-team">
                                            <i className="fa fa-trophy" aria-hidden="true"></i>
                                            Group A
                                        </span>
                                    </div>
                                    <a href="single-team.html" className="btn">Team Profile <i className="fa fa-angle-right"
                                            aria-hidden="true"></i></a>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4 col-xl-3 group-a">
                                <div className="item-team">
                                    <div className="head-team">
                                        <img src={PorTeams} alt="location-team" />
                                        <div className="overlay"><a href="single-team.html">+</a></div>
                                    </div>
                                    <div className="info-team">
                                        <span className="logo-team">
                                            <img src={Por} alt="logo-team" />
                                        </span>
                                        <h4>Kulon Progo</h4>
                                        <span className="location-team">
                                            <i className="fa fa-map-marker" aria-hidden="true"></i>
                                            Stadium
                                        </span>
                                        <span className="group-team">
                                            <i className="fa fa-trophy" aria-hidden="true"></i>
                                            Group A
                                        </span>
                                    </div>
                                    <a href="single-team.html" className="btn">Team Profile <i className="fa fa-angle-right"
                                            aria-hidden="true"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default TeamListComponent;