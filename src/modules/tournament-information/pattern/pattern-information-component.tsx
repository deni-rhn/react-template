import React, { Component,Fragment } from 'react';
import StatisticComponent from '../statistic/statistic-component';
import GroupsComponent from '../groups/groups-component';
import DescriptionComponent from '../description/description-component';
import UpcomingGameComponent from '../upcoming-game/upcoming-game-component';

class PatternInformationComponent extends Component {
    render() {
        return(
            <Fragment>
                <div className="dark-home">
                    <div className="container">
                        <div className="row">

                            <div className="col-xl-9 col-md-12">

                                <ul className="nav nav-tabs" id="myTab">
                                    <li className="nav-item"><a href="#statistics" data-toggle="tab">STATISTICS</a></li>
                                    <li className="nav-item"><a href="#groups" data-toggle="tab">GROUPS</a></li>
                                    <li className="nav-item"><a href="#description" data-toggle="tab">DESCRIPTION</a></li>
                                </ul>

                                <div className="tab-content">

                                    <StatisticComponent />
                                    <GroupsComponent />
                                    <DescriptionComponent />
                                
                                </div>
                            </div>

                            <UpcomingGameComponent />

                        </div>
                    </div>
                </div>    
            </Fragment>
        );
    }
}

export default PatternInformationComponent;