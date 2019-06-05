import React, { PureComponent, SFC } from 'react';
import NetworkService from '../../service';
import Map from '../../components/Map';
import LocationList from '../../components/LocationList';
import MapViewModel from '../../models/MapViewModel';
import Loading from '../../components/Loading';
import { MapViewWrapper, MapWrapper, ListWrapper, NavigationToggle, TitleWrapper, Title } from './styles';

export class MapView extends PureComponent <MapViewModel> {

    state = {
        hoveredLocationKey: null,
        posts: null,
        loading: true,
        fade: false,
        navigationShown: true,
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

    toggleNavigation = (navigationShown: boolean) => this.setState({navigationShown: !navigationShown})

    render() {
        const { hoveredLocationKey, posts, loading, fade, navigationShown } = this.state;

        if (loading) return <Loading fade={fade} />;

        if (!posts) return null;

        return (
            <MapViewWrapper>
                <TitleWrapper>
                    <Title navigation={false}>
                        Kirsty and Petes Travel Adventure
                    </Title>
                </TitleWrapper>
                <MapWrapper navigationShown={navigationShown}>
                    <NavigationToggle onClick={() => this.toggleNavigation(navigationShown)} />
                    <Map posts={posts} hoveredLocationKey={hoveredLocationKey} />
                </MapWrapper>
                <ListWrapper navigationShown={navigationShown}>
                    <Title navigation>
                        Kirsty and Petes Travel Adventure
                    </Title>
                    <LocationList posts={posts} listItemHovered={this.listItemHovered} />
                </ListWrapper>
            </MapViewWrapper>
        );
    }
}

export default MapView;