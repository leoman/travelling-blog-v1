import React, { Component } from 'react';
import Map from './views/Map';
import { AppWrapper } from './styles';
import { routeData } from './data/routeData';

const App = () => (
    <AppWrapper>
        <Map locations={routeData} />
    </AppWrapper>
);

export default App;
