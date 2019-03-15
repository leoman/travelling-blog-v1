import React, { PureComponent, SFC } from 'react';
import Map from '../../components/Map';
import LocationList from '../../components/LocationList';
import MapViewModel from '../../models/MapViewModel';
import { MapViewWrapper, MapWrapper, ListWrapper } from './styles';

export class MapView extends PureComponent <MapViewModel> {

    state = {
        hoveredLocationKey: null,
    }

    listItemHovered = (hoveredLocationKey: number) => this.setState({hoveredLocationKey})

    render() {
        const { posts } = this.props;
        const { hoveredLocationKey } = this.state;

        return (
            <MapViewWrapper>
                <MapWrapper>
                    <Map posts={posts} hoveredLocationKey={hoveredLocationKey} />
                </MapWrapper>
                <ListWrapper>
                    <LocationList posts={posts} listItemHovered={this.listItemHovered} />
                </ListWrapper>
            </MapViewWrapper>
        );
    }
}

export default MapView;