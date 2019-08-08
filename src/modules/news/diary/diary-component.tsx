import React, { Component, Fragment } from 'react';
import Bantul from '../../../assets/img/logo/Bantul.png';
import Sleman from '../../../assets/img/logo/sleman3.png';

class DiaryComponent extends Component {
    render() {
        return(
            <Fragment>
                <div className="panel-box">
                    <div className="titles">
                        <h4><i className="fa fa-calendar"></i>Jadwal Pertandingan</h4>
                    </div>

                    <ul className="list-diary">

                        <li>
                            <h6>SEPAKBOLA <span>14 OKT 2019 - 18:00</span></h6>
                            <ul className="club-logo">
                                <li>
                                    <img src={Bantul} alt="" />
                                    <span>BANTUL</span>
                                </li>
                                <li>
                                    <img src={Sleman} alt="" />
                                    <span>SLEMAN</span>
                                </li>
                            </ul>
                        </li>


                        <li>
                            <h6>SEPAKBOLA <span>14 OKT 2019 - 18:00</span></h6>
                            <ul className="club-logo">
                                <li>
                                    <img src={Bantul} alt="" />
                                    <span>BANTUL</span>
                                </li>
                                <li>
                                    <img src={Sleman} alt="" />
                                    <span>SLEMAN</span>
                                </li>
                            </ul>
                        </li>

                        <li>
                            <h6>SEPAKBOLA <span>14 OKT 2019 - 18:00</span></h6>
                            <ul className="club-logo">
                                <li>
                                    <img src={Bantul} alt="" />
                                    <span>BANTUL</span>
                                </li>
                                <li>
                                    <img src={Sleman} alt="" />
                                    <span>SLEMAN</span>
                                </li>
                            </ul>
                        </li>


                        <li>
                            <h6>SEPAKBOLA <span>14 OKT 2019 - 18:00</span></h6>
                            <ul className="club-logo">
                                <li>
                                    <img src={Bantul} alt="" />
                                    <span>BANTUL</span>
                                </li>
                                <li>
                                    <img src={Sleman} alt="" />
                                    <span>SLEMAN</span>
                                </li>
                            </ul>
                        </li>

                    </ul>

                    <div className="text-right mt-10 p-8">
                        <button className="btn btn-sm btn-info">Selengkapnya ></button>
                        <p className="fs-8">*akan berfungsi menampilkan seluruh jadwal nantinya</p>
                    </div>

                </div>
            </Fragment>
        );
    }
}

export default DiaryComponent;