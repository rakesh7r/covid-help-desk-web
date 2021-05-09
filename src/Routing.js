import { makeStyles } from "@material-ui/core"
import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import App from "./App"
import CheckAuth from "./CheckAuth"

const useStyles = makeStyles((theme) => ({
    root: {
        width: "100%",
        "& > * + *": {
            marginTop: theme.spacing(2),
        },
    },
}))

function Routing() {
    const classes = useStyles()

    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/" exact component={App} />
                    <Route path="/hospitalPanel" exact component={CheckAuth} />
                </Switch>
            </Router>
        </div>
    )
}

export default Routing
