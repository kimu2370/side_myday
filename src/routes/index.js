import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {TransitionGroup, CSSTransition} from "react-transition-group";

import Main from "pages/main";
import Register from "pages/register";

export default function Routes() {
    return (
        <Router>
            <Route
                render={({location}) => {
                    console.log(location);
                    return (
                        <TransitionGroup>
                            <CSSTransition key={location.pathname} classNames="page" timeout={400}>
                                <Switch location={location}>
                                    <Route exact path="/" children={<Main />} />
                                    <Route path="/register" children={<Register />} />
                                </Switch>
                            </CSSTransition>
                        </TransitionGroup>
                    );
                }}
            />
        </Router>
    );
}
