import React, { PureComponent, SFC } from 'react';
import NetworkService from '../../service';
import Map from '../../components/Map';
import LocationList from '../../components/LocationList';
import MapViewModel from '../../models/MapViewModel';
import { PostModel } from '../../models/PostModel';
import { MapViewWrapper, MapWrapper, ListWrapper } from './styles';

export class MapView extends PureComponent <MapViewModel> {

    state = {
        hoveredLocationKey: null,
        posts: null,
    }

    async componentDidMount() {
        const posts = await NetworkService.getPosts();
        if(!posts) return null;
        this.setState({ posts });
    }

    listItemHovered = (hoveredLocationKey: number) => this.setState({hoveredLocationKey})

    render() {
        const { hoveredLocationKey, posts } = this.state;
        if (!posts) return null;

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