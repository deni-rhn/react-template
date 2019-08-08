import React, { Component, Fragment } from 'react';
import Bantul from '../../../assets/img/logo/Bantul-gd.png';
import GK from '../../../assets/img/logo/gk.png';
import KJ from '../../../assets/img/logo/kota-jogja.png';
import Kprogo from '../../../assets/img/logo/k-progo.png';
import Sleman from '../../../assets/img/logo/sleman3.png';

class PlayerInfoComponent extends Component {
    render() {
        return(
            <Fragment>
                <div className="panel-box">
                    <div className="titles">
                        <h4>Peserta PORDA XV 2019</h4>
                    </div>
                    
                    <div className="row">

                        <div className="col-xs-6 col-sm-3 col-md-4 col-lg-4 mt-10 mb-20">
                            <div className="card no-border">
                                <div className="wrapper">
                                    <img className="card-img-top img-fluid" src={Bantul} alt="" />
                                </div>
                                <h4 className="card-title text-center">Bantul</h4>
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-3 col-md-4 col-lg-4 mt-10 mb-20">
                            <div className="card no-border">
                                <div className="wrapper">
                                    <img className="card-img-top img-fluid" src={GK} alt="" />
                                </div>
                                <h4 className="card-title text-center">Gunungkidul</h4>
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-3 col-md-4 col-lg-4 mt-10 mb-20">
                            <div className="card no-border">
                                <div className="wrapper">
                                    <img className="card-img-top img-fluid" src={KJ} alt="" />
                                </div>
                                <h4 className="card-title text-center">Yogyakarta</h4>
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-3 col-md-4 col-lg-4 mt-10 mb-20">
                            <div className="card no-border">
                                <div className="wrapper">
                                    <img className="card-img-top img-fluid" src={Kprogo} alt="" />
                                </div>
                                <h4 className="card-title text-center">Kulon Progo</h4>
                            </div>
                        </div>
                        <div className="col-xs-6 col-sm-3 col-md-4 col-lg-4 mt-10 mb-20">
                            <div className="card no-border">
                                <div className="wrapper">
                                    <img className="card-img-top img-fluid" src={Sleman} alt="" />
                                </div>
                                <h4 className="card-title text-center">Sleman</h4>
                            </div>
                        </div>

                    </div>
                    
                </div>
            </Fragment>
        );
    }
}

export default PlayerInfoComponent;