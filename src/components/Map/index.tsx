import React, { PureComponent } from 'react';
import GoogleMapReact from 'google-map-react';
import { PostModel } from '../../models/PostModel';
import MapMarker from '../MapMarker';
import { MapWrapper } from './styles';

type MapProps = {
    zoom: number;
    posts: PostModel[];
    hoveredLocationKey: null | number;
}

class Map extends PureComponent <MapProps> {
    
    static defaultProps = {
        zoom: 11
    };

    getMapBounds = (map:google.maps.Map, maps:any, posts:PostModel[]) => {
        const bounds = new maps.LatLngBounds();
      
        posts.filter(post => !post.location.hideFromBounding).forEach((post:PostModel) => {
            bounds.extend(new maps.LatLng(
                post.location.lat,
                post.location.lng,
            ));
        });
        return bounds;
    };

    bindResizeListener = (map:google.maps.Map, maps:any, bounds:google.maps.LatLngBounds) => {
        maps.event.addDomListenerOnce(map, 'idle', () => {
            maps.event.addDomListener(window, 'resize', () => {
                map.fitBounds(bounds);
            });
        });
    };

    travelPath = (map:google.maps.Map, maps:any, posts:PostModel[]) => {

        const path = posts.map((post:PostModel) => ({
            lat: post.location.lat,
            lng: post.location.lng,
        }));

        const lineSymbol = {
            path: 'M 0,-1 0,1',
            strokeOpacity: 1,
            scale: 4
        };

        const flightPath = new maps.Polyline({
            path: path,
            geodesic: true,
            icons: [{
                icon: lineSymbol,
                offset: '0',
                repeat: '20px'
              }],
            strokeColor: '#FF0000',
            strokeOpacity: 0,
            strokeWeight: 2
        });

        flightPath.setMap(map);  
    }

    apiIsLoaded = (map:google.maps.Map, maps:any, posts:PostModel[]) => {
        this.travelPath(map, maps, posts);
        const bounds = this.getMapBounds(map, maps, posts);
        map.fitBounds(bounds);
        this.bindResizeListener(map, maps, bounds);
    };

    render() {
        const { posts, hoveredLocationKey } = this.props;

        const [firstPost] = posts;
        const center = {
            lat: firstPost.location.lat,
            lng: firstPost.location.lng
        };
        const key = process.env.REACT_APP_GOOGLE_MAPS_API_KEY || '';

        return (
            <MapWrapper>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: key }}
                    defaultCenter={center}
                    defaultZoom={this.props.zoom}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) => this.apiIsLoaded(map, maps, posts)}
                >
                    {posts.map((post, i) => (
                        <MapMarker
                            key={i}
                            lat={post.location.lat}
                            lng={post.location.lng}
                            hovered={i === hoveredLocationKey}
                            post={post}
                        />
                    ))}
                    
                </GoogleMapReact>
            </MapWrapper>
        );
    }
}

export default Map;