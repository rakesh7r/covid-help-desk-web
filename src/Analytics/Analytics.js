import React from "react"
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos"
import "./Analytics.css"
import { Link } from "react-router-dom"

function Analytics() {
    return (
        <div>
            <header className="analytics-header">
                <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                    <p>
                        <ArrowBackIosIcon /> Back To Home
                    </p>
                </Link>
            </header>
        </div>
    )
}

export default Analytics
