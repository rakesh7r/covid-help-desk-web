import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import App from "./App"
import CheckAuth from "./CheckAuth"

function Routing() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={App} />
                <Route path="/hospitalPanel" exact component={CheckAuth} />
            </Switch>
        </Router>
    )
}

export default Routing
