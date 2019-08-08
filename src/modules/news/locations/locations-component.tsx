import React, { Component, Fragment } from 'react';
import L1 from '../../../assets/img/locations/1.jpg';

class LocationsComponent extends Component {
    render() {
        return(
            <Fragment>
                <div className="panel-box">
                    <div className="titles no-margin">
                        <h4>Venue Pertandingan</h4>
                    </div>

                    {/* <ul className="single-carousel">
                        <li>
                            <img src={L1} alt="" className="img-responsive" />
                            <div className="info-single-carousel">
                                <h4>Saint Petersburg</h4>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, incididunt ut
                                    labore et dolore magna aliqua. Ut enim ad minim veniam,quis nostrud
                                    exercitation ullamco laboris nisi ut aliquip ex ea commodo cillum dolore eu
                                    fugiat nulla sit amet, consectetur adipisicing elit, pariatur.</p>
                            </div>
                        </li>
                    </ul> */}
                    <div id="sliderPorda2" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#sliderPorda2" data-slide-to="0" className="active"></li>
                            <li data-target="#sliderPorda2" data-slide-to="1"></li>
                            <li data-target="#sliderPorda2" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={L1} alt="slide-1" />
                                <div className="carousel-caption d-none d-md-block">
                                    <p className="title-slider">Std. Mandala Krida</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={L1} alt="slide-2" />
                                <div className="carousel-caption d-none d-md-block">
                                    <p className="title-slider">GOR UNY</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={L1} alt="slide-3" />
                                <div className="carousel-caption d-none d-md-block">
                                    <p className="title-slider">PORDA DIY 2019</p>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#sliderPorda2" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#sliderPorda2" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
                    <div className="mt-10 p-8">
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and scrambled it to make a type 
                            specimen book. It has survived not only five centuries, but also the leap into 
                            electronic typesetting, remaining essentially unchanged. </p>
                    </div>

                </div>
            </Fragment>
        );
    }
}

export default LocationsComponent;