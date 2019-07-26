import React, { Component, Fragment } from 'react';
import '../../../assets/css/_polda_diy.css';
import Blog1 from '../../../assets/img/blog/1.jpg';
import Blog2 from '../../../assets/img/blog/2.jpg';
import Blog3 from '../../../assets/img/blog/3.jpg';

class NavComponent extends Component<any, any> {

    render(){
        return(
            <Fragment>
                <nav className="mainmenu nav-sticky">
                    <div className="container">

                        <ul className="sf-menu" id="menu">
                            <li className="current">
                                <a href="#">Home</a>
                                <ul className="sub-current">
                                    <li>
                                        <a href="#">Home 1</a>
                                    </li>
                                </ul>
                            </li>

                            <li>
                                <a href="#">World Cup</a>
                                <div className="sf-mega">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <h5><i className="fa fa-trophy" aria-hidden="true"></i>World Cup</h5>
                                            <ul>
                                                <li><a href="#">Point Table</a></li>
                                                <li><a href="#">Fixtures</a></li>
                                                <li><a href="#">Groups</a></li>
                                                <li><a href="#">News</a></li>
                                                <li><a href="#">Contact Us</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-md-3">
                                            <h5><i className="fa fa-users" aria-hidden="true"></i> Teams List</h5>
                                            <div className="img-hover">
                                                <img src={Blog1} alt="" className="img-responsive" />
                                                <div className="overlay"><a href="teams.html">+</a></div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <h5><i className="fa fa-futbol-o" aria-hidden="true"></i> Players List</h5>
                                            <div className="img-hover">
                                                <img src={Blog2} alt="" className="img-responsive" />
                                                <div className="overlay"><a href="players.html">+</a></div>
                                            </div>
                                        </div>
                                        <div className="col-md-3">
                                            <h5><i className="fa fa-gamepad" aria-hidden="true"></i> Results Info</h5>
                                            <div className="img-hover">
                                                <img src={Blog3} alt="" className="img-responsive" />
                                                <div className="overlay"><a href="results.html">+</a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </li>

                            <li>
                                <a href="#">Features</a>
                                <div className="sf-mega">
                                    <div className="row">
                                        <div className="col-md-3">
                                            <h5>Features</h5>
                                            <ul>
                                                <li><a href="#">Full Width</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-md-3">
                                            <h5>Headers & Footers</h5>
                                            <ul>
                                                <li><a href="#">Header Version 1</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-md-3">
                                            <h5>Pages</h5>
                                            <ul>
                                                <li><a href="#">About Us</a></li>
                                            </ul>
                                        </div>
                                        <div className="col-md-3">
                                            <h5>News</h5>
                                            <ul>
                                                <li>
                                                    <a href="#">News Lef Sidebar</a>
                                                </li>
                                            </ul>
                                        </div>
                                        <i className="fa fa-trophy big-icon" aria-hidden="true"></i>
                                    </div>
                                </div>
                            </li>
                        </ul>

                    </div>
                </nav>

                <div id="mobile-nav">

                <div className="pos-f-t">
                    <div className="collapse" id="navbarToggleExternalContent">
                        <div className="bg-white p-4">
                            <h5 className="text-white h4">Collapsed content</h5>
                            <span className="text-muted">Toggleable via the navbar brand.</span>
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