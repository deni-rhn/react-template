import React, { Component, Fragment } from 'react';
import '../../../assets/css/_polda_diy.css';
// import Blog1 from '../../../assets/img/blog/1.jpg';
// import Blog2 from '../../../assets/img/blog/2.jpg';
// import Blog3 from '../../../assets/img/blog/3.jpg';
import {Link} from 'react-router-dom';

class NavComponent extends Component<any, any> {

    render(){
        return(
            <Fragment>

                <nav className="mainmenu nav-sticky">
                    <div className="container">

                        <ul className="sf-menu" id="menu">
                            <li className="current">
                                <Link to='/perolehan-medali'>
                                    <span>Perolehan Medali</span>
                                </Link>
                                {/* <ul className="sub-current">
                                    <li>
                                        <span/a>
        span                           </li>
                                </ul> */}
                            </li>

                            <li>
                                <Link to="/daftar-tim">
                                    <span>Data Team</span>
                                </Link>
                                {/* <div className="sf-mega">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <h5><i className="fa fa-users" aria-hidden="true"></i> Daftar Team</h5>
                                            <div className="img-hover">
                                                <Link to="/daftar-tim">
                                                    <img src={Blog1} alt="" className="img-responsive" />
                                                    <div className="overlay"><span>+</span></div>
                                                </Link>
                                            </div>
                                        </div>
                                        <div className="col-md-3"> */}
                                            {/* <h5><i className="fa fa-futbol-o" aria-hidden="true"></i> Players List</h5>
                                            <div className="img-hover">
                                                <img src={Blog2} alt="" className="img-responsive" />
                                                <div className="overlay"><a href="players.html">+</a></div>
                                            </div> */}
                                        {/* </div>
                                        <div className="col-md-3"> */}
                                            {/* <h5><i className="fa fa-gamepad" aria-hidden="true"></i> Results Info</h5>
                                            <div className="img-hover">
                                                <img src={Blog3} alt="" className="img-responsive" />
                                                <div className="overlay"><a href="results.html">+</a></div>
                                            </div> */}
                                        {/* </div>
                                    </div>
                                </div> */}
                            </li>

                            <li>
                                <span>Informasi</span>
                                <div className="sf-mega">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <h5>Hasil Pertandingan</h5>
                                            <ul>
                                                <li>
                                                    <Link to="/hasil-pertandingan">
                                                        <span>Cek Hasil Pertandingan</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-3">
                                            <h5>Jadwal</h5>
                                            <ul>
                                                <li>
                                                    <Link to="/jadwal-pertandingan">
                                                        <span>Cek Jadwal Pertandingan</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-3">
                                            <h5>Medali</h5>
                                            <ul>
                                                <li>
                                                    <Link to="/medali-cabang">
                                                        <span>Perolehan Medali Per Cabang</span>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="col-md-3">
                                            {/* <h5>News</h5>
                                            <ul>
                                                <li>
                                                    <spanf Sidebar</aspan
                                                </li>
                                            </ul> */}
                                        </div>
                                        <i className="fa fa-trophy big-icon" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </li>
                        </ul>

                    </div>
                </nav>

                <div id="mobile-nav" className="mobile-sticky navbar-fixed-top zi">

                    <div className="pos-f-t">
                        <div className="collapse" id="navbarToggleExternalContent">
                            <div className="bg-white">
                                <ul className="list-group mob-li">
                                    <li className="list-group-item">
                                        <Link to='/perolehan-medali'>
                                            <span>Perolehan Medali</span>
                                        </Link>
                                    </li>
                                    <li className="list-group-item">
                                        <Link to="/daftar-tim">
                                            <span>Data Team</span>
                                        </Link>
                                    </li>
                                    <li className="list-group-item">
                                        <div className="btn-group dropright">
                                            <button type="button" className="btn btn-tg dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                Informasi
                                            </button>
                                            <div className="dropdown-menu">
                                                <Link to="/hasil-pertandingan">
                                                    <span className="dropdown-item">Cek Hasil Pertandingan</span>
                                                </Link>
                                                <Link to="/jadwal-pertandingan">
                                                    <span className="dropdown-item">Cek Jadwal Pertandingan</span>
                                                </Link>
                                                <Link to="/medali-cabang">
                                                    <span className="dropdown-item">Perolehan Medali Per Cabang</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <nav className="navbar navbar-dark bg-dark">
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                        </nav>
                    </div>

                </div>
            
            </Fragment>
        );
    }
}

export default NavComponent;