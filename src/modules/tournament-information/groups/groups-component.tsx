import React, { Component, Fragment } from 'react';
import Ir from '../../../assets/img/club-logo/irn.png';
import Uru from '../../../assets/img/club-logo/uru.png';
import Por from '../../../assets/img/club-logo/por.png';
import Esp from '../../../assets/img/club-logo/esp.png';
import Mor from '../../../assets/img/club-logo/mar.png';
import Rus from '../../../assets/img/club-logo/rusia.png';
import SA from '../../../assets/img/club-logo/arabia.png';
import Egypt from '../../../assets/img/club-logo/egy.png';

class GroupsComponent extends Component {
    render() {
        return(
            <Fragment>
                <div className="tab-pane" id="groups">
                    <div className="groups-list">
                        <div className="row">
                            <div className="col-lg-3 col-md-6">
                                <h5><span>GROUP A</span></h5>
                                <div className="item-group">
                                    <ul>
                                        <li>
                                            <span>
                                                <img src={Rus} alt="" />
                                                Russia
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <img src={SA} alt="" />
                                                Saudi Arabia
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <img src={Egypt} alt="" />
                                                Egypt
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <img src={Uru} alt="" />
                                                Uruguay
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <h5><span>GROUP B</span></h5>
                                <div className="item-group">
                                    <ul>
                                        <li>
                                            <span>
                                                <img src={Por} alt="" />
                                                Portugal
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <img src={Esp} alt="" />
                                                Spain
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <img src={Mor} alt="" />
                                                Morocco
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <img src={Ir} alt="" />
                                                IR Iran
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Fragment>
        );
    }
}

export default GroupsComponent;