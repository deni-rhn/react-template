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
                                <h5><a href="groups.html">GROUP A</a></h5>
                                <div className="item-group">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <img src={Rus} alt="" />
                                                Russia
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src={SA} alt="" />
                                                Saudi Arabia
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src={Egypt} alt="" />
                                                Egypt
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src={Uru} alt="" />
                                                Uruguay
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <h5><a href="groups.html">GROUP B</a></h5>
                                <div className="item-group">
                                    <ul>
                                        <li>
                                            <a href="#">
                                                <img src={Por} alt="" />
                                                Portugal
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src={Esp} alt="" />
                                                Spain
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src={Mor} alt="" />
                                                Morocco
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <img src={Ir} alt="" />
                                                IR Iran
                                            </a>
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