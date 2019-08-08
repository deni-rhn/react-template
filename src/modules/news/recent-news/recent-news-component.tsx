import React, { Component, Fragment } from 'react';
import Tenis from '../../../assets/img/logo/tenis.png';
import Takraw from '../../../assets/img/logo/takraw.png';
import Sroda from '../../../assets/img/logo/sprd.png';
import Panahan from '../../../assets/img/logo/panahan.png';

class RecentNewsComponent extends Component {
    render() {
        return(
            <Fragment>
                <div className="panel-box">
                    <div className="titles">
                        <h4>40 Cabang Olahraga yang dipertandingkan</h4>
                    </div>

                    <div className="post-item">
                        <div className="row">
                            <div className="col-3 mt-10">
                                <img src={Tenis} alt=""/>
                                <p className="text-center fs-12 cst">Tenis Meja</p>
                            </div>
                            <div className="col-3 mt-10">
                                <img src={Takraw} alt=""/>
                                <p className="text-center fs-12 cst">Sepak Takraw</p>
                            </div>
                            <div className="col-3 mt-10">
                                <img src={Sroda} alt=""/>
                                <p className="text-center fs-12 cst">Sepatu Roda</p>
                            </div>
                            <div className="col-3 mt-10">
                                <img src={Panahan} alt=""/>
                                <p className="text-center fs-12 cst">Panahan</p>
                            </div>
                            <div className="col-3 mt-10">
                                <img src={Tenis} alt=""/>
                                <p className="text-center fs-12 cst">Tenis Meja</p>
                            </div>
                            <div className="col-3 mt-10">
                                <img src={Takraw} alt=""/>
                                <p className="text-center fs-12 cst">Sepak Takraw</p>
                            </div>
                            <div className="col-3 mt-10">
                                <img src={Sroda} alt=""/>
                                <p className="text-center fs-12 cst">Sepatu Roda</p>
                            </div>
                            <div className="col-3 mt-10">
                                <img src={Panahan} alt=""/>
                                <p className="text-center fs-12 cst">Panahan</p>
                            </div>
                            <div className="col-md-12 text-right mt-10">
                                <button className="btn btn-info">Lihat selengkapnya ></button>
                                <p className="fs-8">*akan berfungsi menampilkan daftar cabor nantinya</p>
                            </div>                         
                        </div>
                    </div>

                </div>
            </Fragment>
        );
    }
}

export default RecentNewsComponent;