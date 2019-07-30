import React, { Component, Fragment } from 'react';

class BgCustomComponent extends Component {
    render() {
        return(
            <Fragment>
                <div className="section-title bg-custom">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <h1>Points Table</h1>
                            </div>
                            <div className="col-md-4">
                                <div className="breadcrumbs">
                                    <ul>
                                        <li><a href="index.html">Home</a></li>
                                        <li>Inner Page</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default BgCustomComponent;