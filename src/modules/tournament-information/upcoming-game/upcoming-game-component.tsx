import React, { Component, Fragment } from 'react';
import sleman from '../../../assets/img/logo/sleman.png';
import bantul from '../../../assets/img/logo/Bantul.png';

class UpcomingGameComponent extends Component {
    render() {
        return(
            <Fragment>
                <div className="col-xl-3 col-md-12">
                    <div className="counter-home-wraper">
                        <div className="title-color text-center">
                            <h4>Pertandingan Terdekat</h4>
                        </div>
                        <div className="content-counter content-counter-home">
                            <p className="text-center">
                                <i className="fa fa-clock-o"> </i>
                                 Akan berlangsung dalam :
                            </p>
                            <div id="event-one" className="counter">
                                00:00:00
                            </div>
                            <ul className="post-options">
                                <li><i className="fa fa-calendar"></i>1 Oktober, 2019</li>
                                <li><i className="fa fa-clock-o"></i>Kick-of, 12:00 PM</li>
                            </ul>
                            <div className="list-groups">
                                <div className="row align-items-center">
                                    <div className="col-md-12">
                                        <p>SEPAKBOLA, Stadion Mandala Krida</p>
                                    </div>
                                    <div className="col-md-5">
                                        <img src={sleman} alt="" />
                                        <span>Kab. Sleman</span>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="vs">Vs</div>
                                    </div>
                                    <div className="col-md-5">
                                        <img src={bantul} alt="" />
                                        <span>Kab. Bantul</span>
                                    </div>
                                </div>
                            </div>
                            <span className="btn btn-primary">
                                PORDA XV 2019
                                <i className="fa fa-trophy"></i>
                            </span>
                        </div>
                    </div>

                </div>
            </Fragment>
        );
    }
}

export default UpcomingGameComponent;