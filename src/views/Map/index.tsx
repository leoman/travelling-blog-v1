import React, { PureComponent, SFC } from 'react';
import NetworkService from '../../service';
import Map from '../../components/Map';
import LocationList from '../../components/LocationList';
import MapViewModel from '../../models/MapViewModel';
import { PostModel } from '../../models/PostModel';
import Loading from '../../components/Loading';
import { MapViewWrapper, MapWrapper, ListWrapper } from './styles';

export class MapView extends PureComponent <MapViewModel> {

    state = {
        hoveredLocationKey: null,
        posts: null,
        loading: true,
        fade: false,
    }

    async componentDidMount() {
        const posts = await NetworkService.getLivePosts();
        if(!posts) return null;
        this.setState({ posts, fade: true }, () => {
            setTimeout(() => {
                this.setState({ fade: false, loading: false });
            }, 1000)
        });
    }

    listItemHovered = (hoveredLocationKey: number) => this.setState({hoveredLocationKey})

    render() {
        const { hoveredLocationKey, posts, loading, fade } = this.state;

        if (loading) return <Loading fade={fade} />;

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