import { Button } from "@material-ui/core"
import React, { useState } from "react"
import fire from "./Config/fire"
import HospitalDashBoard from "./HospitalDashBoard"
import CheckCircleOutlinedIcon from "@material-ui/icons/CheckCircleOutlined"
import SaveIcon from "@material-ui/icons/Save"

function HospitalSideBar(props) {
    const { edit, setEdit, editSettings, setEditSettings, hospital } = props
    const btnStyle = {
        marginTop: "10px",
        marginBottom: "10px",
        padding: "8px",
        backgroundColor: "#2685d3",
        color: "white",
    }
    const [updated, setUpdated] = useState(false)
    return (
        <div>
            {hospital ? (
                <div style={{ marginTop: "20px" }}>
                    <HospitalDashBoard hospital={hospital} />
                </div>
            ) : null}
            <div
                className="hospital-panel-sidebar"
                style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-start",
                    padding: "15px",
                }}
            >
                <Button
                    variant="contained"
                    color="secondary"
                    className="hospital-editdata"
                    style={{
                        marginTop: "7px",
                        marginBottom: "20px",
                        width: "100%",
                    }}
                    onClick={() => {
                        setEdit(!edit)
                        setEditSettings(false)
                    }}
                >
                    {edit ? <span>Cancel</span> : <span>Edit Data</span>}
                </Button>
                <Button
                    variant="contained"
                    color="secondary"
                    style={{ marginBottom: "20px", width: "100%" }}
                    onClick={() => {
                        setEditSettings(!editSettings)
                        setEdit(false)
                    }}
                >
                    {editSettings ? (
                        <span>Back to home</span>
                    ) : (
                        <span>Account Settings</span>
                    )}
                </Button>
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
    )
}

export default HospitalSideBar
