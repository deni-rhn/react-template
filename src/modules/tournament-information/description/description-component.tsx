import React, { Component, Fragment } from 'react';
import Loc1 from '../../../assets/img/locations/1.jpg';

class DescriptionComponent extends Component {
    render() {
        return(
            <Fragment>
                <div className="tab-pane" id="description">
                    <div className="info-general">
                        <div className="row">
                            <div className="col-md-4">
                                <img src={Loc1} alt="" />
                            </div>
                            <div className="col-md-8">
                                <h3>PORDA XV 2019 Kota Yogyakarta</h3>
                                <p className="lead">Lorem Ipsum is simply dummy text of the printing and typesetting 
                                industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                                when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                            <div className="col-md-12">
                                <p>It has survived not only five centuries, but also the leap into electronic typesetting, 
                                    remaining essentially unchanged. It was popularised in the 1960s with the release of 
                                    Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing 
                                    software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                                <h4>Nama Pejabat/Lain - Kota Yogyakarta</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default DescriptionComponent;