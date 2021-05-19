import { Button } from "@material-ui/core"
import React, { useEffect, useState } from "react"
import firebase from "firebase"
import { Link } from "react-router-dom"
import fire from "../Config/fire"
import "./AdminPanel.css"
import ErrorPage from "../error/ErrorPage"
import Loading from "../Loading"
import SelectArea from "../SelectArea"
import SelectAreaForAdmin from "./SelectAreaForAdmin"

function AdminPanel() {
    const [beds, setBeds] = useState(0)
    const [totalBeds, setTotalBeds] = useState(0)
    const [oxygen, setOxygen] = useState(0)
    const [ventilators, setVentilators] = useState(0)
    const [remedesivir, setRemedesivir] = useState(0)
    const [covaxin, setCovaxin] = useState(0)
    const [covishield, setCovishield] = useState(0)
    const [positive, setPositive] = useState(0)
    const [recovered, setRecovered] = useState(0)
    const [discharged, setDischarged] = useState(0)
    const [deaths, setDeaths] = useState(0)
    const [totalpositive, setTotalPositive] = useState(0)
    const [totalrecovered, setTotalRecovered] = useState(0)
    const [totaldischarged, setTotalDischarged] = useState(0)
    const [totaldeaths, setTotalDeaths] = useState(0)
    const [errorPage, setErrorPage] = useState(false)
    const [loading, setLoading] = useState(true)
    const [mandal, setMandal] = useState("")
    const [district, setDistrict] = useState("")
    const [filter, setFilter] = useState("")
    useEffect(() => {
        document.title = "Admin Panel"
        if (district.length > 0 && mandal.length === 0) {
            fire.firestore()
                .collection("adminData")
                .doc(firebase.auth().currentUser.email)
                .get()
                .then((u) => {
                    setLoading(false)
                    if (u.exists) {
                        fire.firestore()
                            .collection("hospitals")
                            .where("district", "==", district)
                            .onSnapshot((snapshot) => {
                                setBeds(0)
                                setTotalBeds(0)
                                setOxygen(0)
                                setVentilators(0)
                                setRemedesivir(0)
                                setCovaxin(0)
                                setCovishield(0)
                                setPositive(0)
                                setRecovered(0)
                                setDischarged(0)
                                setDeaths(0)
                                setTotalPositive(0)
                                setTotalRecovered(0)
                                setTotalDischarged(0)
                                setTotalDeaths(0)
                                setTotalDeaths(0)
                                setTotalPositive(0)
                                setTotalDischarged(0)
                                setRecovered(0)
                                snapshot.forEach((doc) => {
                                    const data = doc.data()
                                    setBeds(
                                        (prevState) =>
                                            prevState + data.beds.available
                                    )
                                    setTotalBeds(
                                        (prevState) =>
                                            prevState + data.beds.total
                                    )
                                    setOxygen(
                                        (prevState) =>
                                            prevState + data.oxygen.Available
                                    )
                                    if (!isNaN(data.ventilators))
                                        setVentilators(
                                            (prevState) =>
                                                prevState + data.ventilators
                                        )
                                    setRemedesivir(
                                        (prevState) =>
                                            prevState + data.remedesivir
                                    )
                                    setCovaxin(
                                        (prevState) => prevState + data.covaxin
                                    )
                                    setCovishield(
                                        (prevState) =>
                                            prevState + data.covishield
                                    )
                                    if (
                                        data.date ===
                                        new Date().toJSON().slice(0, 10)
                                    ) {
                                        setPositive(
                                            (prevState) =>
                                                prevState +
                                                data.patients.positive
                                        )
                                        setRecovered(
                                            (prevState) =>
                                                prevState +
                                                data.patients.recovered
                                        )
                                        setDischarged(
                                            (prevState) =>
                                                prevState +
                                                data.patients.discharged
                                        )
                                        setDeaths(
                                            (prevState) =>
                                                prevState + data.patients.deaths
                                        )
                                    }
                                    var arr = data.daytoday
                                    arr.forEach((item) => {
                                        fire.firestore()
                                            .collection("dayToDayInfo")
                                            .doc(item)
                                            .get()
                                            .then((document) => {
                                                setTotalDeaths(
                                                    (prevState) =>
                                                        prevState +
                                                        parseInt(
                                                            document.data()
                                                                .deaths
                                                        )
                                                )
                                                setTotalPositive(
                                                    (prevState) =>
                                                        prevState +
                                                        parseInt(
                                                            document.data()
                                                                .positive
                                                        )
                                                )
                                                setTotalDischarged(
                                                    (prevState) =>
                                                        prevState +
                                                        parseInt(
                                                            document.data()
                                                                .discharged
                                                        )
                                                )
                                                setTotalRecovered(
                                                    (prevState) =>
                                                        prevState +
                                                        parseInt(
                                                            document.data()
                                                                .recovered
                                                        )
                                                )
                                            })
                                    })
                                })
                            })
                    } else {
                        setErrorPage(true)
                    }
                })
        } else if (district.length > 0 && mandal.length > 0) {
            fire.firestore()
                .collection("adminData")
                .doc(firebase.auth().currentUser.email)
                .get()
                .then((u) => {
                    setLoading(false)
                    if (u.exists) {
                        fire.firestore()
                            .collection("hospitals")
                            .where("mandal", "==", mandal)
                            .onSnapshot((snapshot) => {
                                setBeds(0)
                                setTotalBeds(0)
                                setOxygen(0)
                                setVentilators(0)
                                setRemedesivir(0)
                                setCovaxin(0)
                                setCovishield(0)
                                setPositive(0)
                                setRecovered(0)
                                setDischarged(0)
                                setDeaths(0)
                                setTotalPositive(0)
                                setTotalRecovered(0)
                                setTotalDischarged(0)
                                setTotalDeaths(0)
                                setTotalDeaths(0)
                                setTotalPositive(0)
                                setTotalDischarged(0)
                                setRecovered(0)
                                snapshot.forEach((doc) => {
                                    const data = doc.data()
                                    setBeds(
                                        (prevState) =>
                                            prevState + data.beds.available
                                    )
                                    setTotalBeds(
                                        (prevState) =>
                                            prevState + data.beds.total
                                    )
                                    setOxygen(
                                        (prevState) =>
                                            prevState + data.oxygen.Available
                                    )
                                    if (!isNaN(data.ventilators))
                                        setVentilators(
                                            (prevState) =>
                                                prevState + data.ventilators
                                        )
                                    setRemedesivir(
                                        (prevState) =>
                                            prevState + data.remedesivir
                                    )
                                    setCovaxin(
                                        (prevState) => prevState + data.covaxin
                                    )
                                    setCovishield(
                                        (prevState) =>
                                            prevState + data.covishield
                                    )
                                    if (
                                        data.date ===
                                        new Date().toJSON().slice(0, 10)
                                        // true
                                    ) {
                                        setPositive(
                                            (prevState) =>
                                                prevState +
                                                data.patients.positive
                                        )
                                        setRecovered(
                                            (prevState) =>
                                                prevState +
                                                data.patients.recovered
                                        )
                                        setDischarged(
                                            (prevState) =>
                                                prevState +
                                                data.patients.discharged
                                        )
                                        setDeaths(
                                            (prevState) =>
                                                prevState + data.patients.deaths
                                        )
                                    }
                                    var arr = data.daytoday
                                    arr.forEach((item) => {
                                        fire.firestore()
                                            .collection("dayToDayInfo")
                                            .doc(item)
                                            .get()
                                            .then((document) => {
                                                setTotalDeaths(
                                                    (prevState) =>
                                                        prevState +
                                                        parseInt(
                                                            document.data()
                                                                .deaths
                                                        )
                                                )
                                                setTotalPositive(
                                                    (prevState) =>
                                                        prevState +
                                                        parseInt(
                                                            document.data()
                                                                .positive
                                                        )
                                                )
                                                setTotalDischarged(
                                                    (prevState) =>
                                                        prevState +
                                                        parseInt(
                                                            document.data()
                                                                .discharged
                                                        )
                                                )
                                                setTotalRecovered(
                                                    (prevState) =>
                                                        prevState +
                                                        parseInt(
                                                            document.data()
                                                                .recovered
                                                        )
                                                )
                                            })
                                    })
                                })
                            })
                    } else {
                        setErrorPage(true)
                    }
                })
        } else if (district === "" && mandal === "") {
            fire.firestore()
                .collection("adminData")
                .doc(firebase.auth().currentUser.email)
                .get()
                .then((u) => {
                    setLoading(false)
                    if (u.exists) {
                        fire.firestore()
                            .collection("hospitals")
                            .onSnapshot((snapshot) => {
                                setBeds(0)
                                setTotalBeds(0)
                                setOxygen(0)
                                setVentilators(0)
                                setRemedesivir(0)
                                setCovaxin(0)
                                setCovishield(0)
                                setPositive(0)
                                setRecovered(0)
                                setDischarged(0)
                                setDeaths(0)
                                setTotalPositive(0)
                                setTotalRecovered(0)
                                setTotalDischarged(0)
                                setTotalDeaths(0)
                                setTotalDeaths(0)
                                setTotalPositive(0)
                                setTotalDischarged(0)
                                setRecovered(0)
                                snapshot.forEach((doc) => {
                                    const data = doc.data()
                                    setBeds(
                                        (prevState) =>
                                            prevState + data.beds.available
                                    )
                                    setTotalBeds(
                                        (prevState) =>
                                            prevState + data.beds.total
                                    )
                                    setOxygen(
                                        (prevState) =>
                                            prevState + data.oxygen.Available
                                    )
                                    if (!isNaN(data.ventilators))
                                        setVentilators(
                                            (prevState) =>
                                                prevState + data.ventilators
                                        )
                                    setRemedesivir(
                                        (prevState) =>
                                            prevState + data.remedesivir
                                    )
                                    setCovaxin(
                                        (prevState) => prevState + data.covaxin
                                    )
                                    setCovishield(
                                        (prevState) =>
                                            prevState + data.covishield
                                    )
                                    setPositive(
                                        (prevState) =>
                                            prevState + data.patients.positive
                                    )
                                    setRecovered(
                                        (prevState) =>
                                            prevState + data.patients.recovered
                                    )
                                    setDischarged(
                                        (prevState) =>
                                            prevState + data.patients.discharged
                                    )
                                    setDeaths(
                                        (prevState) =>
                                            prevState + data.patients.deaths
                                    )
                                    var arr = data.daytoday
                                    arr.forEach((item) => {
                                        fire.firestore()
                                            .collection("dayToDayInfo")
                                            .get()
                                            .then((snap) => {
                                                snap.forEach((document) => {
                                                    setTotalDeaths(
                                                        (prevState) =>
                                                            prevState +
                                                            parseInt(
                                                                document.data()
                                                                    .deaths
                                                            )
                                                    )
                                                    setTotalPositive(
                                                        (prevState) =>
                                                            prevState +
                                                            parseInt(
                                                                document.data()
                                                                    .positive
                                                            )
                                                    )
                                                    setTotalDischarged(
                                                        (prevState) =>
                                                            prevState +
                                                            parseInt(
                                                                document.data()
                                                                    .discharged
                                                            )
                                                    )
                                                    setTotalRecovered(
                                                        (prevState) =>
                                                            prevState +
                                                            parseInt(
                                                                document.data()
                                                                    .recovered
                                                            )
                                                    )
                                                })
                                            })
                                    })
                                })
                            })
                    } else {
                        setErrorPage(true)
                    }
                })
        }
    }, [mandal, district])
    return (
        <div className="admin-outer-cont">
            {loading ? (
                <Loading />
            ) : errorPage ? (
                <ErrorPage />
            ) : (
                <div>
                    <div className="hospital-header">
                        <p className="hospital-header-title">Admin Panel</p>
                        <Link
                            to="/"
                            style={{
                                textDecoration: "none",
                                color: "white",
                                width: "fitContent",
                            }}
                        >
                            <p className="hospital-header-link-to-home">
                                Go To Help Desk
                            </p>
                        </Link>
                    </div>
                    <div className="admin-main-outer">
                        <div className="admin-main">
                            <div className="admin-mini-cont">
                                <h2 className="heading-underline">
                                    Beds information
                                </h2>
                                <p className="heading-small">
                                    Available : {beds}
                                </p>
                                <p className="heading-small">
                                    Total : {totalBeds}
                                </p>
                            </div>
                            <div className="admin-mini-cont">
                                <h2 className="heading-underline">
                                    Oxygen Information
                                </h2>
                                <p className="heading-small">
                                    Available oxygen(Cylinders) : {oxygen}
                                </p>
                            </div>

                            <div className="admin-mini-cont">
                                <h2 className="heading-underline">
                                    Ventilators
                                </h2>
                                <p className="heading-small">
                                    Available : {ventilators}
                                </p>
                            </div>
                            <div className="admin-mini-cont">
                                <h2 className="heading-underline">
                                    Vaccine Information
                                </h2>
                                <p className="heading-small">
                                    Remedesivir : {remedesivir}
                                </p>
                                <p className="heading-small">
                                    Covaxin : {covaxin}
                                </p>
                                <p className="heading-small">
                                    Covishield : {covishield}
                                </p>
                            </div>
                            <h2 style={{ marginTop: "5px" }}>
                                Covid-19 Cases information
                            </h2>
                            <div className="admin-mini-cont">
                                <p
                                    className="heading-small"
                                    style={{ marginBottom: "5px" }}
                                >
                                    Today :
                                    <b> {new Date().toJSON().slice(0, 10)}</b>
                                </p>
                                <p className="heading-small">
                                    Positive : {positive}
                                </p>
                                <p className="heading-small">
                                    Recovered : {recovered}
                                </p>
                                <p className="heading-small">
                                    Discharged : {discharged}
                                </p>
                                <p className="heading-small">
                                    Deaths : {deaths}
                                </p>
                            </div>
                            <p className="heading-medium">
                                Covid-19 cases upto now
                            </p>
                            <div className="admin-mini-cont">
                                <p className="heading-small">
                                    Positive : {totalpositive}
                                </p>
                                <p className="heading-small">
                                    Recovered : {totalrecovered}
                                </p>
                                <p className="heading-small">
                                    Deaths : {totaldeaths}
                                </p>
                            </div>
                            <div className="admin-mini-cont"></div>
                        </div>
                        <div className="admin-sidebar">
                            <SelectAreaForAdmin
                                mandal={mandal}
                                setMandal={setMandal}
                                district={district}
                                setDistrict={setDistrict}
                                filter={filter}
                                setFilter={setFilter}
                            />
                            <Button
                                variant="contained"
                                type="button"
                                color="secondary"
                                style={{ width: "295px", marginTop: "15px" }}
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
            )}
        </div>
    )
}

export default AdminPanel
