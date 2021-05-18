import React, { useEffect, useState } from "react"
import fire from "./Config/fire"
import "./AppDashboard.css"
import { Button, TextField } from "@material-ui/core"

function AppDashboard() {
    const [date, setDate] = useState(new Date().toJSON().slice(0, 10))
    const [deaths, setDeaths] = useState(0)
    const [recovered, setRecovered] = useState(0)
    const [positives, setPositives] = useState(0)
    const [discharged, setDischarged] = useState(0)
    useEffect(() => {
        fire.firestore()
            .collection("dayToDayInfo")
            .onSnapshot((snapshot) => {
                setDeaths(0)
                setPositives(0)
                setDischarged(0)
                setRecovered(0)
                snapshot.forEach((doc) => {
                    if (
                        doc.id.slice(-8) ===
                        new Date().toJSON().slice(0, 10).replaceAll("-", "")
                    ) {
                        setDeaths(
                            (prevState) =>
                                prevState + parseInt(doc.data().deaths)
                        )
                        setPositives(
                            (prevState) =>
                                prevState + parseInt(doc.data().positive)
                        )
                        setDischarged(
                            (prevState) =>
                                prevState + parseInt(doc.data().discharged)
                        )
                        setRecovered(
                            (prevState) =>
                                prevState + parseInt(doc.data().recovered)
                        )
                    }
                })
            })
    }, [])
    const handleFetch = () => {
        setDeaths(0)
        setRecovered(0)
        setPositives(0)
        setDischarged(0)
        console.clear()
        fire.firestore()
            .collection("dayToDayInfo")
            .get()
            .then((snapshot) => {
                snapshot.forEach((doc) => {
                    if (
                        doc.id.slice(-8) ===
                        date.replaceAll("-", "").replaceAll("/", "")
                    ) {
                        setDeaths(
                            (prevState) =>
                                prevState + parseInt(doc.data().deaths)
                        )
                        setPositives(
                            (prevState) =>
                                prevState + parseInt(doc.data().positive)
                        )
                        setDischarged(
                            (prevState) =>
                                prevState + parseInt(doc.data().discharged)
                        )
                        setRecovered(
                            (prevState) =>
                                prevState + parseInt(doc.data().recovered)
                        )
                    }
                })
            })
    }
    return (
        <div className="dash-cont">
            <center>
                <h2>DashBoard</h2>
            </center>
            <div className="app-dash-search">
                <TextField
                    value={date}
                    placeholder="YYYY-MM-DD"
                    onChange={(e) => setDate(e.target.value)}
                />
                <Button onClick={() => handleFetch()}>GO</Button>
            </div>
            <div>
                <p>Positive cases : {positives}</p>
                <p>Deaths : {deaths}</p>
                <p>Discharged : {discharged}</p>
                <p>Recovered : {recovered}</p>
            </div>
        </div>
    )
}

export default AppDashboard
