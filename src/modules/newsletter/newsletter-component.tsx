import React, { Component, Fragment } from 'react';

class NewsletterComponent extends Component {
    render() {
        return(
            <Fragment>
                <div className="row">
                    <div className="col-md-12">
                        <div className="text-center">
                            <h2>Enter your e-mail and <span className="text-resalt">subscribe</span> to our newsletter.
                            </h2>
                            <p>Duis non lorem porta, eros sit amet, tempor sem. Donec nunc arcu, semper a tempus et,
                                consequat.</p>
                        </div>
                        <form id="newsletterForm" action="">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="input-group">
                                        <span className="input-group-addon">
                                            <i className="fa fa-envelope"></i>
                                        </span>
                                        <input className="form-control" placeholder="Your Name" name="name" type="text"
                                            required />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="input-group">
                                        <span className="input-group-addon">
                                            <i className="fa fa-envelope"></i>
                                        </span>
                                        <input className="form-control" placeholder="Your  Email" name="email" type="email"
                                            required />
                                        <span className="input-group-btn">
                                            <button className="btn btn-primary" type="submit" name="subscribe">SIGN
                                                UP</button>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </form>
                        <div id="result-newsletter"></div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default NewsletterComponent;