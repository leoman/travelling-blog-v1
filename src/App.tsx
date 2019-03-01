import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { AppWrapper } from './styles';
import { routeData } from './data/routeData';
import MapView from './views/Map';
import PostView from './views/Post';

const App = () => (
    <AppWrapper>
        <Router>
            <Switch>
                <Route path="/" exact>
                    <MapView locations={routeData.reverse()} />
                </Route>
                <Route path="/posts/:slug" exact component={PostView} />
                <Route>
                    <Redirect to="/"/>
                </Route>
            </Switch>
        </Router>
    </AppWrapper>
);

export default App;
