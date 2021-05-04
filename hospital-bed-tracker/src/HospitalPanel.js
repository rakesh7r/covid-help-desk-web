import { Button } from "@material-ui/core"
import React, { useEffect, useState } from "react"
import fire from "./Config/fire"
import "./HospitalPanel.css"

function HospitalPanel(props) {
    const { user } = props
    const [hospital, setHospital] = useState("")
    const [edit, setEdit] = useState(false)
    useEffect(() => {
        fire.firestore()
            .collection("hospitals")
            .doc(user.email)
            .get()
            .then((doc) => {
                if (doc.exists) {
                    setHospital(doc.data())
                    console.log(doc.data())
                } else {
                    alert("hospital Data not found")
                }
            })
            .catch((err) => console.log(err))
    }, [])
    return (
        <div className="hospital-outer-cont">
            <div className="hospital-header">
                <h1>Hospital Panel</h1>
                <Button
                    variant="contained"
                    type="button"
                    onClick={props.handleLogout}
                    className="hospital-signout-btn"
                    style={{
                        backgroundColor: "transparent",
                        color: "white",
                    }}
                >
                    sign out
                </Button>
            </div>
            <div className="hospital-main">
                <h1>dsfajkh</h1>
            </div>
        </div>
    )
}

export default HospitalPanel
