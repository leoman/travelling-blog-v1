import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import { AppWrapper } from './styles';
import { postData } from './data/postData';
import MapView from './views/Map';
import PostView from './views/Post';
import PostListView from './views/Admin/Post/ListPosts';
import AddPost from './views/Admin/Post/AddPost';
import EditPost from './views/Admin/Post/EditPost';

const App = () => (
    <AppWrapper>
        <Router>
            <Switch>
                <Route path="/" exact>
                    <MapView posts={postData.reverse()} />
                </Route>
                <Route path="/posts/:slug" exact component={PostView} />
                <Route path="/admin/posts" exact component={PostListView} />
                <Route path="/admin/posts/add" exact component={AddPost} />
                <Route path="/admin/posts/edit/:id" exact component={EditPost} />
                <Route>
                    <Redirect to="/"/>
                </Route>
            </Switch>
        </Router>
    </AppWrapper>
);

export default App;
