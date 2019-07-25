import React, { Component, Fragment } from 'react';
import TopPlayerComponent from './top-player/top-player-component';
import RecentResultComponent from './recent-result/recent-result-component';
import ClubRankingComponent from './club-ranking/club-ranking-component';

class StatisticComponent extends Component {
    render() {
        return(
            <Fragment>
                <div className="tab-pane active" id="statistics">
                    <div className="row">

                        <ClubRankingComponent />
                        <RecentResultComponent />
                        <TopPlayerComponent />

                    </div>
                </div>
            </Fragment>
        );
    }
}

export default StatisticComponent;