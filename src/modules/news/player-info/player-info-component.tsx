import React, { Component, Fragment } from 'react';
import P1 from '../../../assets/img/players/1.jpg';
import P2 from '../../../assets/img/players/2.jpg';
import P3 from '../../../assets/img/players/3.jpg';

class PlayerInfoComponent extends Component {
    render() {
        return(
            <Fragment>
                <div className="panel-box">
                    <div className="titles">
                        <h4>Best Players</h4>
                    </div>
                    <div className="row">

                        <div className="col-xs-6 col-sm-3 col-md-4 col-lg-4">
                            <div className="box-info">
                                <a href="single-player.html">
                                    <img src={P1} alt="" className="img-responsive" />
                                </a>
                                <h6 className="entry-title"><a href="single-player.html">Cristiano Ronaldo</a></h6>
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-3 col-md-4 col-lg-4">
                            <div className="box-info">
                                <a href="single-player.html">
                                    <img src={P2} alt="" className="img-responsive" />
                                </a>
                                <h6 className="entry-title"><a href="single-player.html">Lionel Messi</a></h6>
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-3 col-md-4 col-lg-4">
                            <div className="box-info">
                                <a href="single-player.html">
                                    <img src={P3} alt="" className="img-responsive" />
                                </a>
                                <h6 className="entry-title"><a href="single-player.html">Neymar</a></h6>
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-3 col-md-4 col-lg-4">
                            <div className="box-info">
                                <a href="single-player.html">
                                    <img src={P1} alt="" className="img-responsive" />
                                </a>
                                <h6 className="entry-title"><a href="single-player.html">Cristiano Ronaldo</a></h6>
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-3 col-md-4 col-lg-4">
                            <div className="box-info">
                                <a href="single-player.html">
                                    <img src={P2} alt="" className="img-responsive" />
                                </a>
                                <h6 className="entry-title"><a href="single-player.html">Lionel Messi</a></h6>
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-3 col-md-4 col-lg-4">
                            <div className="box-info">
                                <a href="single-player.html">
                                    <img src={P3} alt="" className="img-responsive" />
                                </a>
                                <h6 className="entry-title"><a href="single-player.html">Neymar</a></h6>
                            </div>
                        </div>

                    </div>
                </div>
            </Fragment>
        );
    }
}

export default PlayerInfoComponent;