import React, { PureComponent, SFC } from 'react'
import GoogleMapReact from 'google-map-react';
import { RouteModel } from '../../models/route';
import { MapWrapper, MapMarker } from './styles';

type SFCProps = {
    text: String;
    lat: number;
    lng: number;
}

const AnyReactComponent: SFC<SFCProps> = ({ text }) => <MapMarker>{text}</MapMarker>;

type Props = {
    center: {
        lat: number;
        lng: number;
    },
    zoom: number;
    locations: RouteModel[];
}

class Map extends PureComponent <Props> {

    static defaultProps = {
        center: {
            lat: 59.95,
            lng: 30.33
        },
        zoom: 11
    };

    getMapBounds = (map:any, maps:any, places:any) => {
        const bounds = new maps.LatLngBounds();
      
        places.forEach((place:any) => {
            bounds.extend(new maps.LatLng(
                place.lat,
                place.lng,
            ));
        });
        return bounds;
    };

    bindResizeListener = (map:any, maps:any, bounds:any) => {
        maps.event.addDomListenerOnce(map, 'idle', () => {
            maps.event.addDomListener(window, 'resize', () => {
                map.fitBounds(bounds);
            });
        });
    };

    travelPath = (map:any, maps: any, places:any) => {

        const path = places.map((place:any) => ({
            lat: place.lat,
            lng: place.lng,
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

    apiIsLoaded = (map:any, maps:any, places:any) => {
        // Get bounds by our places
        const bounds = this.getMapBounds(map, maps, places);
        console.log(bounds);
        // Fit map to bounds
        map.fitBounds(bounds);
        // Bind the resize listener
        this.bindResizeListener(map, maps, bounds);
        // Set PolyLine between points
        this.travelPath(map, maps, places);
    };

    render() {

        console.log(this.props);

        const { locations } = this.props;

        const [firstLocation] = locations;
        const center = {
            lat: firstLocation.lat,
            lng: firstLocation.lng
        };

        return (
            <MapWrapper>
                <div style={{ height: '100%', width: '100%' }}>
                    <GoogleMapReact
                        bootstrapURLKeys={{ client: 'gme-jll', v: 'dvs' }}
                        defaultCenter={center}
                        defaultZoom={this.props.zoom}
                        yesIWantToUseGoogleMapApiInternals
                        onGoogleApiLoaded={({ map, maps }) => this.apiIsLoaded(map, maps, locations)}
                    >
                        {locations.map((location, i) => (
                            <AnyReactComponent
                                key={i}
                                lat={location.lat}
                                lng={location.lng}
                                text="My Marker"
                            />
                        ))}
                        
                    </GoogleMapReact>
                </div>
            </MapWrapper>
        );
    }
}

export default Map;