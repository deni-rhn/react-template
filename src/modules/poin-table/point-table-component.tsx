import React, { Component, Fragment } from 'react';
import BgCustomComponent from '../layout/bg-custom/bg-custom-component';
import Sleman from '../../assets/img/logo/sleman3.png';
import GK from '../../assets/img/logo/gk.png';
import KP from '../../assets/img/logo/k-progo.png';
import KJ from '../../assets/img/logo/kota-jogja.png';
import Bantul from '../../assets/img/logo/Bantul.png';

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
                                            <th className="text-center">Emas</th>
                                            <th className="text-center">Perak</th>
                                            <th className="text-center">Perunggu</th>
                                            <th className="text-center">Total Medali</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-center">
                                        <tr>
                                            <td className="text-left number">1 <i className="fa fa-caret-up" aria-hidden="true"></i>
                                            </td>
                                            <td className="text-left">
                                                <img src={Sleman} alt="Colombia" /><p className="mt-10">Sleman</p>
                                            </td>
                                            <td>38</td>
                                            <td>26</td>
                                            <td>9</td>
                                            <td>3</td>
                                        </tr>
                                        <tr>
                                            <td className="text-left number">2 <i className="fa fa-caret-down" aria-hidden="true"></i>
                                            </td>
                                            <td className="text-left">
                                                <img src={GK} alt="Brazil" /><span>Gunungkidul</span>
                                            </td>
                                            <td>38</td>
                                            <td>24</td>
                                            <td>7</td>
                                            <td>7</td>
                                        </tr>
                                        <tr>
                                            <td className="text-left number">3 <i className="fa fa-caret-up" aria-hidden="true"></i>
                                            </td>
                                            <td className="text-left">
                                                <img src={KJ} alt="Argentina" /><span>Yogyakarta</span>
                                            </td>
                                            <td>38</td>
                                            <td>22</td>
                                            <td>9</td>
                                            <td>7</td>
                                        </tr>
                                        <tr>
                                            <td className="text-left number">4 <i className="fa fa-caret-down" aria-hidden="true"></i>
                                            </td>
                                            <td className="text-left">
                                                <img src={KP} alt="Argentina" /><span>Kulon Progo</span>
                                            </td>
                                            <td>38</td>
                                            <td>22</td>
                                            <td>9</td>
                                            <td>7</td>
                                        </tr>
                                        <tr>
                                            <td className="text-left number">5 <i className="fa fa-caret-up" aria-hidden="true"></i>
                                            </td>
                                            <td className="text-left">
                                                <img src={Bantul} alt="Argentina" /><span>Bantul</span>
                                            </td>
                                            <td>38</td>
                                            <td>22</td>
                                            <td>9</td>
                                            <td>7</td>
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