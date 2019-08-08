import React, { Component, Fragment } from 'react';
import Logo from '../../../assets/img/logo/koni-jogja.png';

class PresentationComponent extends Component {
    render() {
        return(
            <Fragment>
                <div className="panel-box">
                    <div className="titles no-margin">
                        <h4>Presentasi</h4>
                    </div>

                    <div className="row">
                        <div className="margin-0-auto">
                            <img src={Logo} alt=""/>
                        </div>
                    
                        <div className="info-panel">
                            <h4>Yogyakarta</h4>
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