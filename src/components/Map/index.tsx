import React, { PureComponent } from 'react';
import GoogleMapReact from 'google-map-react';
import { RouteModel } from '../../models/RouteModel';
import MapMarker from '../MapMarker';
import { MapWrapper } from './styles';

type MapProps = {
    zoom: number;
    locations: RouteModel[];
    hoveredLocationKey: null | number;
}

class Map extends PureComponent <MapProps> {
    
    static defaultProps = {
        zoom: 11
    };

    getMapBounds = (map:google.maps.Map, maps:any, locations:RouteModel[]) => {
        const bounds = new maps.LatLngBounds();
      
        locations.filter(location => !location.hideFromBounding).forEach((location:RouteModel) => {
            bounds.extend(new maps.LatLng(
                location.lat,
                location.lng,
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

    travelPath = (map:google.maps.Map, maps:any, locations:RouteModel[]) => {

        const path = locations.map((location:RouteModel) => ({
            lat: location.lat,
            lng: location.lng,
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

    apiIsLoaded = (map:google.maps.Map, maps:any, locations:RouteModel[]) => {
        this.travelPath(map, maps, locations);
        const bounds = this.getMapBounds(map, maps, locations);
        map.fitBounds(bounds);
        this.bindResizeListener(map, maps, bounds);
    };

    render() {
        const { locations, hoveredLocationKey } = this.props;

        const [firstLocation] = locations;
        const center = {
            lat: firstLocation.lat,
            lng: firstLocation.lng
        };
        const key = process.env.REACT_APP_GOOGLE_MAPS_API_KEY || '';

        return (
            <MapWrapper>
                <GoogleMapReact
                    bootstrapURLKeys={{ key: key }}
                    defaultCenter={center}
                    defaultZoom={this.props.zoom}
                    yesIWantToUseGoogleMapApiInternals
                    onGoogleApiLoaded={({ map, maps }) => this.apiIsLoaded(map, maps, locations)}
                >
                    {locations.map((location, i) => (
                        <MapMarker
                            key={i}
                            lat={location.lat}
                            lng={location.lng}
                            hovered={i === hoveredLocationKey}
                            location={location}
                        />
                    ))}
                    
                </GoogleMapReact>
            </MapWrapper>
        );
    }
}

export default Map;