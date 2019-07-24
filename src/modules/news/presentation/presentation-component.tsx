import React, { Component, Fragment } from 'react';

const Vid: string = 'https://www.youtube.com/embed/AfOlAUd7u4o';

class PresentationComponent extends Component {
    render() {
        return(
            <Fragment>
                <div className="panel-box">
                    <div className="titles no-margin">
                        <h4>Presentation</h4>
                    </div>

                    <div className="row">
                        <iframe src={Vid} className="video"></iframe>
                        <div className="info-panel">
                            <h4>Rio de Janeiro</h4>
                            <p>Lorem ipsum dolor sit amet, sit amet, consectetur adipisicing elit, elit,
                                incididunt ut labore et dolore magna aliqua sit amet, consectetur adipisicing
                                elit,</p>
                        </div>
                    </div>

                </div>
            </Fragment>
        );
    }
}

export default PresentationComponent;