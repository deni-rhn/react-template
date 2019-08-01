import React, { Component, Fragment } from 'react';
import L1 from '../../../assets/img/locations/1.jpg';

class LocationsComponent extends Component {
    render() {
        return(
            <Fragment>
                <div className="panel-box">
                    <div className="titles no-margin">
                        <h4>Locations</h4>
                    </div>

                    <ul className="single-carousel">
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
                    </ul>

                </div>
            </Fragment>
        );
    }
}

export default LocationsComponent;