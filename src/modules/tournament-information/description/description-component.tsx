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
                                <h3>2018 FIFA World Cup</h3>
                                <p className="lead">The 2018 FIFA World Cup will be the 21st FIFA World Cup,
                                    a quadrennial international football tournament contested by the
                                    men's national teams. West of the Ural Mountains to keep travel time
                                    manageable.</p>
                            </div>
                            <div className="col-md-12">
                                <p>It is scheduled to take place in Russia from 14 June to 15 July
                                    2018,[2] after the country was awarded the hosting rights on 2
                                    December 2010. This will be the first World Cup held in Europe since
                                    2006; all but one of the stadium venues are in European Russia, west
                                    of the Ural Mountains to keep travel time manageable.</p>
                                <h4>Gianni Infantino - Fifa President</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default DescriptionComponent;