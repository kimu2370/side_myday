import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Main from 'pages/main';

export default function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path="/" children={<Main />} />
            </Switch>
        </Router>
    );
}
