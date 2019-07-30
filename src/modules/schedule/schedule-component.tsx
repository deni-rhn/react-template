import React, { Component, Fragment } from 'react';
import BgCustomComponent from '../layout/bg-custom/bg-custom-component';
import Uru from '../../assets/img/club-logo/uru.png';
import Por from '../../assets/img/club-logo/por.png';

class ScheduleComponent extends Component {
    render() {
        return(
            <Fragment>
                <BgCustomComponent />
                <section className="content-info">
                    <div className="container paddings-mini">
                        <div className="row">
                            <div className="col-lg-12">
                                <h3 className="clear-title">Matches</h3>
                            </div>
                            <div className="col-lg-12">
                                <table className="table-striped table-responsive table-hover">
                                    <thead>
                                        <tr>
                                            <th>Team A</th>
                                            <th className="text-center">VS</th>
                                            <th>Team B</th>
                                            <th>Details</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>
                                                <img src={Uru} alt="icon" />
                                                <strong>Colombia</strong><br />
                                                <small className="meta-text">GROUP H.</small>
                                            </td>
                                            <td className="text-center">Vs</td>
                                            <td>
                                                <img src={Por} alt="icon1" />
                                                <strong>Japan</strong><br />
                                                <small className="meta-text">GROUP H.</small>
                                            </td>
                                            <td>
                                                Jun 19, 07:00<br /> 
                                                <small className="meta-text">Mordovia Arena,Saransk</small>
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