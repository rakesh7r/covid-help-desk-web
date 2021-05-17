import { Button } from "@material-ui/core"
import React, { useEffect } from "react"
import fire from "../Config/fire"
import "./ErrorPage.css"
function ErrorPage() {
    useEffect(() => {
        document.title = "Access Denied"
    }, [])
    return (
        <div className="error-outer-main">
            <div className="error-outer">
                <div>
                    <img
                        src="errorimage.gif"
                        alt="error gif"
                        className="error-gif"
                    />
                </div>
                <div style={{ width: "40%" }} className="error-text">
                    <center>
                        <p>Access Denied:(</p>
                        <p> Sign out and try again...</p>
                    </center>
                    <Button
                        variant="contained"
                        type="button"
                        color="secondary"
                        style={{ marginBottom: "20px", width: "100%" }}
                        onClick={() => {
                            fire.auth().signOut()
                        }}
                        className="hospital-signout-btn"
                    >
                        sign out
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage
