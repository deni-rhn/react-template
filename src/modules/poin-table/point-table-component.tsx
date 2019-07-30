import React, { Component, Fragment } from 'react';
import Ir from '../../assets/img/club-logo/irn.png';
import Uru from '../../assets/img/club-logo/uru.png';
import Por from '../../assets/img/club-logo/por.png';
import BgCustomComponent from '../layout/bg-custom/bg-custom-component';

class PointTableComponent extends Component<any, any> {
    render() {
        return(
            <Fragment>
                <BgCustomComponent />
                <section className="content-info">
                    <div className="container paddings-mini">
                        <div className="row">
                            <div className="col-lg-12">
                                <table className="table-striped table-responsive table-hover result-point">
                                    <thead className="point-table-head">
                                        <tr>
                                            <th className="text-left">No</th>
                                            <th className="text-left">TEAM</th>
                                            <th className="text-center">P</th>
                                            <th className="text-center">W</th>
                                            <th className="text-center">D</th>
                                            <th className="text-center">L</th>
                                            <th className="text-center">GS</th>
                                            <th className="text-center">GA</th>
                                            <th className="text-center">+/-</th>
                                            <th className="text-center">PTS</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-center">
                                        <tr>
                                            <td className="text-left number">1 <i className="fa fa-caret-up" aria-hidden="true"></i>
                                            </td>
                                            <td className="text-left">
                                                <img src={Ir} alt="Colombia" /><span>Iran</span>
                                            </td>
                                            <td>38</td>
                                            <td>26</td>
                                            <td>9</td>
                                            <td>3</td>
                                            <td>73</td>
                                            <td>32</td>
                                            <td>+41</td>
                                            <td>87</td>
                                        </tr>
                                        <tr>
                                            <td className="text-left number">2 <i className="fa fa-caret-up" aria-hidden="true"></i>
                                            </td>
                                            <td className="text-left">
                                                <img src={Uru} alt="Brazil" /><span>Uruguay</span>
                                            </td>
                                            <td>38</td>
                                            <td>24</td>
                                            <td>7</td>
                                            <td>7</td>
                                            <td>83</td>
                                            <td>38</td>
                                            <td>+45</td>
                                            <td>79</td>
                                        </tr>
                                        <tr>
                                            <td className="text-left number">3 <i className="fa fa-caret-up" aria-hidden="true"></i>
                                            </td>
                                            <td className="text-left">
                                                <img src={Por} alt="Argentina" /><span>Potugal</span>
                                            </td>
                                            <td>38</td>
                                            <td>22</td>
                                            <td>9</td>
                                            <td>7</td>
                                            <td>71</td>
                                            <td>36</td>
                                            <td>+35</td>
                                            <td>75</td>
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

export default PointTableComponent;