import React, { Component, Fragment } from 'react';
import slide1 from '../../assets/img/slider/slide-1.jpg';
import slide2 from '../../assets/img/slider/slide-2.jpg';
import slide3 from '../../assets/img/slider/slide-3.png';

class SliderComponent extends Component {
    render() {
        return(
            <Fragment>
                <div className="hero-header">

                    <div id="sliderPorda" className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#sliderPorda" data-slide-to="0" className="active"></li>
                            <li data-target="#sliderPorda" data-slide-to="1"></li>
                            <li data-target="#sliderPorda" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={slide1} alt="slide-1" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h1 className="title-slider">PORDA DIY 2019</h1>
                                    <h2 className="title-slider">Sub Title</h2>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={slide2} alt="slide-2" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h1 className="title-slider">PORDA DIY 2019</h1>
                                    <h2 className="title-slider">Sub Title</h2>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={slide3} alt="slide-3" />
                                <div className="carousel-caption d-none d-md-block">
                                    <h1 className="title-slider">PORDA DIY 2019</h1>
                                    <h2 className="title-slider">Sub Title</h2>
                                </div>
                            </div>
                        </div>
                        <a className="carousel-control-prev" href="#sliderPorda" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#sliderPorda" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>

                </div>

            </Fragment>
        );
    }
}

export default SliderComponent;