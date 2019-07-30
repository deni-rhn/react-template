import React, { Component, Fragment } from 'react';
import SliderComponent from '../slider/slider-component';
import PatternInformationComponent from '../tournament-information/pattern/pattern-information-component';
import PatternNewsComponent from '../news/pattern/pattern-news-component';
import NewsletterComponent from '../newsletter/newsletter-component';

class HomeComponent extends Component<any, any> {
    render() {
        return(
            <Fragment>
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
            </Fragment>

        );
    }
}

export default HomeComponent;