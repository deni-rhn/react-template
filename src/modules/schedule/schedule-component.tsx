import React, { Component, Fragment } from 'react';
import BgCustomComponent from '../layout/bg-custom/bg-custom-component';
import Bantul from '../../assets/img/logo/Bantul.png';
import KJ from '../../assets/img/logo/kota-jogja.png';

class ScheduleComponent extends Component {
    render() {
        return(
            <Fragment>
                <BgCustomComponent />
                <section className="content-info">
                    <div className="container paddings-mini">
                        <div className="row">
                            <div className="col-lg-12">
                                <h3 className="clear-title">Jadwal Lengkap Pertandingan</h3>
                            </div>
                            <div className="col-lg-12">
                                <table className="table-striped table-responsive table-hover">
                                    <thead>
                                        <tr>
                                            <th>Team A</th>
                                            <th className="text-center">VS</th>
                                            <th>Team B</th>
                                            <th>Cabang Olahraga</th>
                                            <th>Details</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <img src={Bantul} alt="icon" />
                                                <strong>Bantul</strong><br />
                                            </td>
                                            <td className="text-center">Vs</td>
                                            <td>
                                                <img src={KJ} alt="icon1" />
                                                <strong>Yogyakarta</strong><br />
                                            </td>
                                            <td>
                                                SEPAKBOLA
                                            </td>
                                            <td>
                                                1 Oktober 2019, 15:00:00<br /> 
                                                <small className="meta-text">Stadion Mandala Krida</small>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={Bantul} alt="icon" />
                                                <strong>Bantul</strong><br />
                                            </td>
                                            <td className="text-center">Vs</td>
                                            <td>
                                                <img src={KJ} alt="icon1" />
                                                <strong>Yogyakarta</strong><br />
                                            </td>
                                            <td>
                                                SEPAKBOLA
                                            </td>
                                            <td>
                                                1 Oktober 2019, 15:00:00<br /> 
                                                <small className="meta-text">Stadion Mandala Krida</small>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <img src={Bantul} alt="icon" />
                                                <strong>Bantul</strong><br />
                                            </td>
                                            <td className="text-center">Vs</td>
                                            <td>
                                                <img src={KJ} alt="icon1" />
                                                <strong>Yogyakarta</strong><br />
                                            </td>
                                            <td>
                                                SEPAKBOLA
                                            </td>
                                            <td>
                                                1 Oktober 2019, 15:00:00<br /> 
                                                <small className="meta-text">Stadion Mandala Krida</small>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default ScheduleComponent;