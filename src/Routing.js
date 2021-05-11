import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import App from "./App"
import CheckAuth from "./CheckAuth"
import ForgotPassword from "./ForgotPassword"

function Routing() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/hospitalPanel" exact component={CheckAuth} />
                    <Route
                        path="/forgotPassword"
                        exact
                        component={ForgotPassword}
                    />
                </Switch>
            </Router>
        </div>
    )
}

export default Routing
