import React, { Component, Fragment } from 'react';
import BgCustomComponent from '../../layout/bg-custom/bg-custom-component';
import Bantul from '../../../assets/img/logo/Bantul.png';
import KJ from '../../../assets/img/logo/kota-jogja.png';
import {Link} from 'react-router-dom';

class ResultListComponent extends Component<any, any> {
    render() {
        return(
            <Fragment>
                <BgCustomComponent />
                <section className="content-info">
                    <div className="container padding-top">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="recent-results results-page">
                                    <div className="info-results">
                                        <ul>
                                            <li>
                                                <span className="head">
                                                    Bantul Vs Yogyakarta | Cabor Sepakbola <span className="date">27 AGT 2019</span>
                                                </span>
                                                <div className="goals-result">
                                                    <Link to='/perolehan-medali'>
                                                        <img src={Bantul} alt="" />
                                                        Bantul
                                                    </Link>
                                                    <span className="goals">
                                                        <b>2</b> - <b>3</b>
                                                        <Link to='/perolehan-medali'>
                                                            <span className="btn theme white-text">1 Emas untuk Yogyakarta</span>
                                                        </Link>
                                                        
                                                    </span>
                                                    <Link to='/perolehan-medali'>
                                                        <img src={KJ} alt="" />
                                                        Yogyakarta
                                                    </Link>
                                                </div>
                                            </li>
                                            <li>
                                                <span className="head">
                                                    Bantul Vs Yogyakarta | Cabor Sepakbola <span className="date">27 AGT 2019</span>
                                                </span>
                                                <div className="goals-result">
                                                    <Link to='/perolehan-medali'>
                                                        <img src={Bantul} alt="" />
                                                        Bantul
                                                    </Link>
                                                    <span className="goals">
                                                        <b>2</b> - <b>3</b>
                                                        <Link to='/perolehan-medali'>
                                                            <span className="btn theme white-text">1 Emas untuk Yogyakarta</span>
                                                        </Link>
                                                    </span>
                                                    <Link to='/perolehan-medali'>
                                                        <img src={KJ} alt="" />
                                                        Yogyakarta
                                                    </Link>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}

export default ResultListComponent;