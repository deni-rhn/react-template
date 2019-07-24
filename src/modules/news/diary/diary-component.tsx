import React, { Component, Fragment } from 'react';
import Bra from '../../../assets/img/club-logo/bra.png';
import Rus from '../../../assets/img/club-logo/rusia.png';
import SA from '../../../assets/img/club-logo/arabia.png';
import Cos from '../../../assets/img/club-logo/costa-rica.png';

class DiaryComponent extends Component {
    render() {
        return(
            <Fragment>
                <div className="panel-box">
                    <div className="titles">
                        <h4><i className="fa fa-calendar"></i>Diary</h4>
                    </div>

                    <ul className="list-diary">

                        <li>
                            <h6>GROUP A <span>14 JUN 2018 - 18:00</span></h6>
                            <ul className="club-logo">
                                <li>
                                    <img src={Rus} alt="" />
                                    <span>RUSSIA</span>
                                </li>
                                <li>
                                    <img src={SA} alt="" />
                                    <span>SAUDI ARABIA</span>
                                </li>
                            </ul>
                        </li>


                        <li>
                            <h6>GROUP E <span>22 JUN 2018 - 15:00</span></h6>
                            <ul className="club-logo">
                                <li>
                                    <img src={Bra} alt="" />
                                    <span>BRAZIL</span>
                                </li>
                                <li>
                                    <img src={Cos} alt="" />
                                    <span>COSTA RICA</span>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <h6>GROUP A <span>14 JUN 2018 - 18:00</span></h6>
                            <ul className="club-logo">
                                <li>
                                    <img src={Rus} alt="" />
                                    <span>RUSSIA</span>
                                </li>
                                <li>
                                    <img src={SA} alt="" />
                                    <span>SAUDI ARABIA</span>
                                </li>
                            </ul>
                        </li>


                        <li>
                            <h6>GROUP E <span>22 JUN 2018 - 15:00</span></h6>
                            <ul className="club-logo">
                                <li>
                                    <img src={Bra} alt="" />
                                    <span>BRAZIL</span>
                                </li>
                                <li>
                                    <img src={Cos} alt="" />
                                    <span>COSTA RICA</span>
                                </li>
                            </ul>
                        </li>

                    </ul>

                </div>
            </Fragment>
        );
    }
}

export default DiaryComponent;