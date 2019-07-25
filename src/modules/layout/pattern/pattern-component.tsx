import * as $ from 'jquery';
import Helmet from 'react-helmet';
import NavComponent from '../nav/nav-component';
import React, { Component, Fragment } from 'react';
import FooterComponent from '../footer/footer-component';
import HeaderComponent from '../header/header-component';
import SliderComponent from '../../slider/slider-component';
import NewsletterComponent from '../../newsletter/newsletter-component';
import PatternNewsComponent from '../../news/pattern/pattern-news-component';
import PatternInformationComponent from '../../tournament-information/pattern/pattern-information-component';

class PatternComponent extends Component {

    render() {
        return(
            <Fragment>
                <Helmet>
                    <meta charSet="utf-8" />
                    <title>Porda DIY 2019</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                </Helmet>
                <div id="layout">

                    <HeaderComponent />
                    <NavComponent />
                    <SliderComponent />

                    <section className="content-info">

                        <PatternInformationComponent />

                        <div className="container padding-top">
                            <div className="row">
                                <PatternNewsComponent />
                            </div>
                        </div>

                        <div className="section-newsletter">
                            <div className="container">

                                <NewsletterComponent />

                            </div>
                        </div>
                    </section>
                    <div className="instagram-btn">
                        <div className="btn-instagram">
                            <i className="fa fa-instagram"></i>
                            FOLLOW
                            <a href="https://www.instagram.com/fifaworldcup/" target="_blank">&#64;fifaworldcup</a>
                        </div>
                    </div>
                </div>

                <FooterComponent />
                
            </Fragment>
        );
    }
}

export default PatternComponent;