import React, { Component, Fragment } from 'react';
import Ir from '../../../assets/img/club-logo/irn.png';
import Uru from '../../../assets/img/club-logo/uru.png';
import Por from '../../../assets/img/club-logo/por.png';
import BgCustomComponent from '../../layout/bg-custom/bg-custom-component';

class PointTableComponent extends Component<any, any> {
    render() {
        return(
            <Fragment>
                <BgCustomComponent />
                <section className="content-info">
                    <div className="container paddings-mini">

                        <div className="row filter-class">
                            <div className="col-md-5">
                                <h3>Filter Perolehan Medali Cabang Olahraga</h3>
                                <select className="form-control">
                                    <option value="">Sepakbola</option>  
                                    <option value="">Renang</option>  
                                </select>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-lg-12">
                                <table className="table-striped table-responsive table-hover result-point">
                                    <thead className="point-table-head">
                                        <tr>
                                            <th className="text-left">No</th>
                                            <th className="text-left">Kabupaten</th>
                                            <th className="text-center">Gold/Emas</th>
                                            <th className="text-center">Silver/Perak</th>
                                            <th className="text-center">Bronze/Perunggu</th>
                                            <th className="text-center">Total Medali</th>
                                        </tr>
                                    </thead>
                                    <tbody className="text-center">
                                        <tr>
                                            <td className="text-left number">1 <i className="fa fa-caret-up" aria-hidden="true"></i>
                                            </td>
                                            <td className="text-left">
                                                <img src={Ir} alt="Colombia" /><span>Iran</span>
                                            </td>
                                            <td>3</td>
                                            <td>2</td>
                                            <td>1</td>
                                            <td>6</td>
                                        </tr>
                                        <tr>
                                            <td className="text-left number">2 <i className="fa fa-caret-up" aria-hidden="true"></i>
                                            </td>
                                            <td className="text-left">
                                                <img src={Uru} alt="Brazil" /><span>Uruguay</span>
                                            </td>
                                            <td>3</td>
                                            <td>1</td>
                                            <td>1</td>
                                            <td>5</td>
                                        </tr>
                                        <tr>
                                            <td className="text-left number">3 <i className="fa fa-caret-up" aria-hidden="true"></i>
                                            </td>
                                            <td className="text-left">
                                                <img src={Por} alt="Argentina" /><span>Potugal</span>
                                            </td>
                                            <td>1</td>
                                            <td>1</td>
                                            <td>2</td>
                                            <td>4</td>
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