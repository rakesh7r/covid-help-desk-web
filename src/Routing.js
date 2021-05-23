import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import CheckAuthForAdmin from "./Admin/CheckAuthForAdmin"
import Analytics from "./Analytics/Analytics"
import App from "./App"
import CheckAuth from "./CheckAuth"
import ForgotPassword from "./ForgotPassword"
import GeoTest from "./Geo/GeoTest"

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
                    <Route
                        path="/AdminPanel"
                        exact
                        component={CheckAuthForAdmin}
                    />
                    <Route path="/analytics" exact component={Analytics} />
                    <Route path="/test" exact component={GeoTest} />
                    <Route path="/" default component={App} />
                </Switch>
            </Router>
        </div>
    )
}

export default Routing
