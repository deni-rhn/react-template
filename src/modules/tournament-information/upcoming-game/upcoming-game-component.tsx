import React, { Component, Fragment } from 'react';
import Rus from '../../../assets/img/club-logo/rusia.png';
import SA from '../../../assets/img/club-logo/arabia.png';

class UpcomingGameComponent extends Component {
    render() {
        return(
            <Fragment>
                <div className="col-xl-3 col-md-12">
                    <div className="counter-home-wraper">
                        <div className="title-color text-center">
                            <h4>Porda DIY 2019</h4>
                        </div>
                        <div className="content-counter content-counter-home">
                            <p className="text-center">
                                <i className="fa fa-clock-o"></i>
                                Countdown Till Start
                            </p>
                            <div id="event-one" className="counter">
                                00:00:00
                            </div>
                            <ul className="post-options">
                                <li><i className="fa fa-calendar"></i>14 June, 2018</li>
                                <li><i className="fa fa-clock-o"></i>Kick-of, 12:00 PM</li>
                            </ul>
                            <div className="list-groups">
                                <div className="row align-items-center">
                                    <div className="col-md-12">
                                        <p>GROUP A, Luzhniki Stadium Moscow</p>
                                    </div>
                                    <div className="col-md-5">
                                        <img src={Rus} alt="" />
                                        <span>RUSSIA</span>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="vs">Vs</div>
                                    </div>
                                    <div className="col-md-5">
                                        <img src={SA} alt="" />
                                        <span>S. ARABIA</span>
                                    </div>
                                </div>
                            </div>
                            <span className="btn btn-primary">
                                PURCHASE
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