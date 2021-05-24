import React, { useEffect, useState } from "react"
import fire from "./Config/fire"
import "./HospitalDashBoard.css"
function HospitalDashBoard(props) {
    const { hospital } = props
    const [recovered, setRecovered] = useState(0)
    const [discharged, setDischarged] = useState(0)
    const [deaths, setDeaths] = useState(0)

    useEffect(() => {
        hospital.daytoday.forEach((id) => {
            setRecovered(0)
            setDischarged(0)
            setDeaths(0)
            fire.firestore()
                .collection("dayToDayInfo")
                .doc(id)
                .get()
                .then((doc) => {
                    setRecovered(0)
                    setDischarged(0)
                    setDeaths(0)
                    if (doc.exists) {
                        setRecovered(
                            (prevState) =>
                                prevState + parseInt(doc.data().recovered)
                        )
                        setDischarged(
                            (prevState) =>
                                prevState + parseInt(doc.data().discharged)
                        )
                        setDeaths(
                            (prevState) =>
                                prevState + parseInt(doc.data().deaths)
                        )
                    }
                })
        })
    }, [hospital])
    return (
        <div className="h-dashboard">
            <center className="h-dashboard-title">
                <h2>DashBoard</h2>
            </center>
            <p>Recovered : {recovered} </p>
            <p>Discharged : {discharged} </p>
            <p>Deaths : {deaths}</p>
        </div>
    )
}

export default HospitalDashBoard
