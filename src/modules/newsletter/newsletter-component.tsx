import React, { Component, Fragment } from 'react';

class NewsletterComponent extends Component {
    render() {
        return(
            <Fragment>
                <div className="row">
                    <div className="col-md-12">

                        <div className="text-center">
                            <h2>Kata kata <span className="text-resalt">simple</span> ditaruh disini
                            </h2>
                            <p className="fs-12">Duis non lorem porta, eros sit amet, tempor sem. Donec nunc arcu, semper a tempus et,
                                consequat.</p>
                        </div>
                        
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default NewsletterComponent;