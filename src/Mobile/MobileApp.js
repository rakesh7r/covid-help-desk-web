import Menu from "@material-ui/core/Menu"
import React, { useEffect, useState } from "react"
import Button from "@material-ui/core/Button"
import "./MobileApp.css"
import SelectAreaMobile from "./SelectAreaMobile"
import MobileCard from "./MobileCard"
import fire from "../Config/fire"
import Loading from "../Loading"
function MobileApp() {
    const [anchorEl, setAnchorEl] = useState(null)
    const [mandal, setMandal] = useState("")
    const [district, setDistrict] = useState("GHMC")
    const [filter, setFilter] = useState("")
    const [loading, setLoading] = useState(true)
    const [hospitals, setHospitals] = useState([])
    const [found, setFound] = useState(false)

    useEffect(() => {
        setHospitals([])
        fire.firestore()
            .collection("hospitals")
            .where("district", "==", district)
            .orderBy("timestamp")
            .onSnapshot((docs) => {
                setHospitals([])
                docs.forEach((doc) => {
                    setHospitals((oldArr) => [...oldArr, doc.data()])
                })
            })
    }, [])
    useEffect(() => {
        setHospitals([])
        if (mandal === "" && district !== "") {
            if (filter.length === 0) {
                fire.firestore()
                    .collection("hospitals")
                    .where("district", "==", district)
                    // .orderBy("timestamp")
                    // .orderBy("timestamp", "desc")
                    .onSnapshot((docs) => {
                        setHospitals([])
                        setLoading(false)

                        docs.forEach((doc) => {
                            setHospitals((oldArr) => [...oldArr, doc.data()])
                        })
                    })
            } else if (filter === "covaxin") {
                fire.firestore()
                    .collection("hospitals")
                    .where("district", "==", district)
                    // .orderBy("timestamp")
                    .where("covaxin", ">", 0)
                    .onSnapshot((docs) => {
                        setHospitals([])
                        setLoading(false)

                        docs.forEach((doc) => {
                            setHospitals((oldArr) => [...oldArr, doc.data()])
                        })
                    })
            } else if (filter === "covishield") {
                fire.firestore()
                    .collection("hospitals")
                    .where("district", "==", district)
                    // .orderBy("timestamp")
                    .where("covishield", ">", 0)
                    .onSnapshot((docs) => {
                        setHospitals([])
                        setLoading(false)

                        docs.forEach((doc) => {
                            setHospitals((oldArr) => [...oldArr, doc.data()])
                        })
                    })
            } else if (filter === "remedesivir") {
                fire.firestore()
                    .collection("hospitals")
                    .where("district", "==", district)
                    // .orderBy("timestamp")
                    .where("remedesivir", ">", 0)
                    .onSnapshot((docs) => {
                        setHospitals([])
                        setLoading(false)

                        docs.forEach((doc) => {
                            setHospitals((oldArr) => [...oldArr, doc.data()])
                        })
                    })
            } else if (filter === "beds") {
                fire.firestore()
                    .collection("hospitals")
                    .where("district", "==", district)
                    // .orderBy("timestamp")
                    .where("beds.available", ">", 0)
                    .onSnapshot((docs) => {
                        setHospitals([])
                        setLoading(false)

                        docs.forEach((doc) => {
                            setHospitals((oldArr) => [...oldArr, doc.data()])
                        })
                    })
            } else if (filter === "ventilators") {
                fire.firestore()
                    .collection("hospitals")
                    .where("district", "==", district)
                    // .orderBy("timestamp")
                    .where("ventilators", ">", 0)
                    .onSnapshot((docs) => {
                        setHospitals([])
                        setLoading(false)

                        docs.forEach((doc) => {
                            setHospitals((oldArr) => [...oldArr, doc.data()])
                        })
                    })
            } else if (filter === "oxygen") {
                fire.firestore()
                    .collection("hospitals")
                    .where("district", "==", district)
                    // .orderBy("timestamp")
                    .where("oxygen.Available", ">", 0)
                    .onSnapshot((docs) => {
                        setHospitals([])
                        setLoading(false)

                        docs.forEach((doc) => {
                            setHospitals((oldArr) => [...oldArr, doc.data()])
                        })
                    })
            } else if (filter === "vaccinations") {
                fire.firestore()
                    .collection("hospitals")
                    .where("district", "==", district)
                    // .orderBy("timestamp")
                    .where("isVaccinationCenter", "==", true)
                    .onSnapshot((docs) => {
                        setHospitals([])
                        setLoading(false)

                        docs.forEach((doc) => {
                            setHospitals((oldArr) => [...oldArr, doc.data()])
                        })
                    })
            } else if (filter === "private") {
                fire.firestore()
                    .collection("hospitals")
                    .where("district", "==", district)
                    // .orderBy("timestamp")
                    .where("isPrivate", "==", true)
                    .onSnapshot((docs) => {
                        setHospitals([])
                        setLoading(false)

                        docs.forEach((doc) => {
                            setHospitals((oldArr) => [...oldArr, doc.data()])
                        })
                    })
            } else if (filter === "govt") {
                fire.firestore()
                    .collection("hospitals")
                    .where("district", "==", district)
                    // .orderBy("timestamp")
                    .where("isPrivate", "==", false)
                    .onSnapshot((docs) => {
                        setHospitals([])
                        setLoading(false)

                        docs.forEach((doc) => {
                            setHospitals((oldArr) => [...oldArr, doc.data()])
                        })
                    })
            }
        } else if (mandal !== "") {
            if (filter.length === 0) {
                fire.firestore()
                    .collection("hospitals")
                    .where("mandal", "==", mandal)
                    // .orderBy("timestamp")
                    .onSnapshot((docs) => {
                        setHospitals([])
                        setLoading(false)

                        docs.forEach((doc) => {
                            setHospitals((oldArr) => [...oldArr, doc.data()])
                        })
                    })
            } else if (filter === "covaxin") {
                fire.firestore()
                    .collection("hospitals")
                    .where("mandal", "==", mandal)
                    // .orderBy("timestamp")
                    .where("covaxin", ">", 0)
                    .onSnapshot((docs) => {
                        setHospitals([])
                        setLoading(false)

                        docs.forEach((doc) => {
                            setHospitals((oldArr) => [...oldArr, doc.data()])
                        })
                    })
            }
            if (filter === "covishield") {
                fire.firestore()
                    .collection("hospitals")
                    .where("mandal", "==", mandal)
                    // .orderBy("timestamp")
                    .where("covishield", ">", 0)
                    .onSnapshot((docs) => {
                        setHospitals([])
                        setLoading(false)

                        docs.forEach((doc) => {
                            setHospitals((oldArr) => [...oldArr, doc.data()])
                        })
                    })
            } else if (filter === "remedesivir") {
                fire.firestore()
                    .collection("hospitals")
                    .where("mandal", "==", mandal)
                    // .orderBy("timestamp")
                    .where("remedesivir", ">", 0)
                    .onSnapshot((docs) => {
                        setHospitals([])
                        setLoading(false)

                        docs.forEach((doc) => {
                            setHospitals((oldArr) => [...oldArr, doc.data()])
                        })
                    })
            } else if (filter === "beds") {
                fire.firestore()
                    .collection("hospitals")
                    .where("mandal", "==", mandal)
                    // .orderBy("timestamp")
                    .where("beds.available", ">", 0)
                    .onSnapshot((docs) => {
                        setHospitals([])
                        setLoading(false)

                        docs.forEach((doc) => {
                            setHospitals((oldArr) => [...oldArr, doc.data()])
                        })
                    })
            } else if (filter === "ventilators") {
                fire.firestore()
                    .collection("hospitals")
                    .where("mandal", "==", mandal)
                    // .orderBy("timestamp")
                    .where("ventilators", ">", 0)
                    .onSnapshot((docs) => {
                        setHospitals([])
                        setLoading(false)

                        docs.forEach((doc) => {
                            setHospitals((oldArr) => [...oldArr, doc.data()])
                        })
                    })
            } else if (filter === "vaccinations") {
                fire.firestore()
                    .collection("hospitals")
                    .where("mandal", "==", mandal)
                    // .orderBy("timestamp")
                    .where("isVaccinationCenter", "==", true)
                    .onSnapshot((docs) => {
                        setHospitals([])
                        setLoading(false)

                        docs.forEach((doc) => {
                            setHospitals((oldArr) => [...oldArr, doc.data()])
                        })
                    })
            } else if (filter === "oxygen") {
                fire.firestore()
                    .collection("hospitals")
                    .where("mandal", "==", mandal)
                    // .orderBy("timestamp")
                    .where("oxygen.Available", ">", 0)
                    .onSnapshot((docs) => {
                        setHospitals([])
                        setLoading(false)

                        docs.forEach((doc) => {
                            setHospitals((oldArr) => [...oldArr, doc.data()])
                        })
                    })
            } else if (filter === "private") {
                fire.firestore()
                    .collection("hospitals")
                    .where("mandal", "==", mandal)
                    // .orderBy("timestamp")
                    .where("isPrivate", "==", true)
                    .onSnapshot((docs) => {
                        setHospitals([])
                        setLoading(false)

                        docs.forEach((doc) => {
                            setHospitals((oldArr) => [...oldArr, doc.data()])
                        })
                    })
            } else if (filter === "govt") {
                fire.firestore()
                    .collection("hospitals")
                    .where("mandal", "==", mandal)
                    // .orderBy("timestamp")
                    .where("isPrivate", "==", false)
                    .onSnapshot((docs) => {
                        setHospitals([])
                        setLoading(false)

                        docs.forEach((doc) => {
                            setHospitals((oldArr) => [...oldArr, doc.data()])
                        })
                    })
            }
        }
    }, [district, mandal, filter])

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }
    const getRadians = (degree) => {
        const oneDeg = Math.PI / 180
        return oneDeg * degree
    }
    const getNearerHospitals = (
        latitude1,
        longitude1,
        latitude2,
        longitude2
    ) => {
        const lat1 = getRadians(latitude1)
        const lat2 = getRadians(latitude2)
        const long1 = getRadians(longitude1)
        const long2 = getRadians(longitude2)

        let dlat = lat2 - lat1
        let dlong = long2 - long1

        let ans =
            Math.pow(Math.sin(dlat / 2), 2) +
            Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlong / 2), 2)
        let res = 2 * Math.asin(Math.sqrt(ans))
        const Radius = 6371
        return res * Radius
    }
    const getNearerHospitalsDriver = () => {
        setDistrict("")
        setMandal("")
        navigator.geolocation.getCurrentPosition((position) => {
            const { latitude, longitude } = position.coords
            let latitude2 = 18.112667
            let longitude2 = 79.018831

            fire.firestore()
                .collection("hospitals")
                .orderBy("timestamp", "desc")
                .onSnapshot((snapshot) => {
                    setHospitals([])
                    snapshot.forEach((doc) => {
                        if (doc.data().location) {
                            latitude2 = doc.data().location.latitude
                            longitude2 = doc.data().location.longitude
                            let dist = getNearerHospitals(
                                latitude,
                                longitude,
                                latitude2,
                                longitude2
                            )

                            if (dist <= 10) {
                                setHospitals((oldArr) => [
                                    ...oldArr,
                                    doc.data(),
                                ])
                            }
                        }
                    })
                })
        })
    }
    return (
        <div className="mobile-app">
            <div className="header">
                <strong>Covid help desk</strong>
                <div>
                    <Button
                        aria-controls="simple-menu"
                        aria-haspopup="true"
                        onClick={handleClick}
                        style={{ color: "white" }}
                    >
                        Apply Filter
                    </Button>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                        style={{ width: "100vw" }}
                    >
                        <SelectAreaMobile
                            mandal={mandal}
                            setMandal={setMandal}
                            district={district}
                            filter={filter}
                            setDistrict={setDistrict}
                            setFilter={setFilter}
                            getNearerHospitalsDriver={getNearerHospitalsDriver}
                        />
                    </Menu>
                </div>
            </div>
            <div className="mobile-app-main">
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        padding: "0.5rem",
                    }}
                >
                    {district ? (
                        <p>District : {district} </p>
                    ) : (
                        <p>Fetching nearest Hospitals</p>
                    )}
                    {mandal ? <p>Mandal : {mandal} </p> : null}
                    {filter ? <p>filter : {filter} </p> : null}
                </div>
                {hospitals.length > 0 ? (
                    hospitals.map((hospital) => (
                        <MobileCard hospital={hospital} />
                    ))
                ) : loading ? (
                    <center>
                        <Loading />
                    </center>
                ) : found ? null : (
                    <center>
                        <h2 className="app-notfound">No Hospitals Found</h2>
                    </center>
                )}{" "}
            </div>
        </div>
    )
}

export default MobileApp
