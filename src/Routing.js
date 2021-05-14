import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Analytics from "./Analytics/Analytics"
import App from "./App"
import CheckAuth from "./CheckAuth"
import ForgotPassword from "./ForgotPassword"

function Routing() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/hospitalPanel" exact component={CheckAuth} />
                    <Route
                        path="/forgotPassword"
                        exact
                        component={ForgotPassword}
                    />
                    <Route path="/analytics" exact component={Analytics} />
                    <Route path="/" default component={App} />
                </Switch>
            </Router>
        </div>
    )
}

export default Routing
