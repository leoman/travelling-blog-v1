import React, { Component } from 'react';
import Map from './components/Map';
import { AppWrapper } from './styles';
import { routeData } from './data/routeData';
import MapView from './views/Map';

const App = () => (
    <AppWrapper>
        <MapView locations={routeData.reverse()} />
    </AppWrapper>
);

export default App;
