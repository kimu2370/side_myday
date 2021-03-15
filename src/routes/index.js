import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Main from 'pages/main';
import Register from 'pages/register';

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" children={<Main />} />
                <Route path="/register" children={<Register />} />
            </Switch>
        </Router>
    );
}
