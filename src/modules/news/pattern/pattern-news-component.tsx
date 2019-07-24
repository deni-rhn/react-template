import React, { Component, Fragment } from 'react';
import DiaryComponent from '../diary/diary-component';
import LocationsComponent from '../locations/locations-component';
import PlayerInfoComponent from '../player-info/player-info-component';
import RecentNewsComponent from '../recent-news/recent-news-component';
import PresentationComponent from '../presentation/presentation-component';

class PatternNewsComponent extends Component {
    render() {
        return(
            <Fragment>
                <div className="col-lg-6 col-xl-7">

                    <RecentNewsComponent />
                    <PlayerInfoComponent />

                </div>
                <aside className="col-sm-6 col-lg-3 col-xl-3">

                    <LocationsComponent />
                    <PresentationComponent />

                </aside>
                <aside className="col-sm-6 col-lg-3 col-xl-2">

                    <DiaryComponent />

                </aside>
            </Fragment>
        );
    }
}

export default PatternNewsComponent;