import React, { Component, Fragment } from 'react';
import Blog1 from '../../../assets/img/blog/1.jpg';

class RecentNewsComponent extends Component {
    render() {
        return(
            <Fragment>
                <div className="panel-box">
                    <div className="titles">
                        <h4>Recent News</h4>
                    </div>

                    <div className="post-item">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="img-hover">
                                    <img src={Blog1} alt="" className="img-responsive" />
                                    <div className="overlay"><span>+</span></div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <h5><span>Group Stage Breakdown</span></h5>
                                <span className="data-info">January 3, 2014 / <i className="fa fa-comments"></i><span
                                        >0</span></span>
                                <p>While familiar with fellow European nation France, Hareide admits that South
                                    American side Peru.<span>Read More [+]</span></p>
                            </div>
                        </div>
                    </div>

                    <div className="post-item">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="img-hover">
                                    <img src={Blog1} alt="" className="img-responsive" />
                                    <div className="overlay"><span>+</span></div>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <h5><span>Group Stage Breakdown</span></h5>
                                <span className="data-info">January 3, 2014 / <i className="fa fa-comments"></i><span
                                        >0</span></span>
                                <p>While familiar with fellow European nation France, Hareide admits that South
                                    American side Peru.<span>Read More [+]</span></p>
                            </div>
                        </div>
                    </div>

                </div>
            </Fragment>
        );
    }
}

export default RecentNewsComponent;