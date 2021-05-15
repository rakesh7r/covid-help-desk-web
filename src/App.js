import { useEffect, useState } from "react"
import "./App.css"
import fire from "./Config/fire"
import Hospital from "./Hospital"
import AppDashboard from "./AppDashboard"
import SelectArea from "./SelectArea"
import { Link } from "react-router-dom"
import Loading from "./Loading"

function App() {
    const [district, setDistrict] = useState("GHMC")
    const [mandal, setMandal] = useState("")
    const [hospitals, setHospitals] = useState([])
    const [searchCovaxin, setSearchCovaxin] = useState(false)
    const [searchCovishield, setSearchCovishield] = useState(false)
    const [searchRemedesivir, setsearchRemedesivir] = useState(false)
    const [filter, setFilter] = useState("")
    const [found, setFound] = useState(false)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setHospitals([])
        fire.firestore()
            .collection("hospitals")
            .where("district", "==", district)
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
                    .where("district", "==", district)
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
                    .where("mandal", "==", mandal)
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

    return (
        <div className="App">
            <div className="app-header">
                <Link
                    to="/"
                    style={{
                        textDecoration: "none",
                        color: "white",
                        width: "fitContent",
                    }}
                >
                    <p>Covid-19 Help Desk</p>
                </Link>
                {/* <input
                    type="text"
                    placeholder="Enter Hospital Name"
                    value={search}
                    className="app-header-search"
                    autoFocus
                    onChange={(e) => {
                        setSearch(e.target.value)
                        handleSearch(e)
                    }}
                /> */}
                {/* <Link
                    to="/analytics"
                    style={{ textDecoration: "none", color: "white" }}
                >
                    <h2>
                        Analytics <ShowChartIcon />
                    </h2>
                </Link> */}
            </div>

            <div className="app-main">
                <div className="app-intermediate">
                    {hospitals.length > 0 ? (
                        hospitals.map((hospital) => (
                            <Hospital key={hospital.id} hospital={hospital} />
                        ))
                    ) : loading ? (
                        <center>
                            {/* <h2 className="app-notfound">Loading...</h2> */}
                            <Loading />
                        </center>
                    ) : found ? null : (
                        <center>
                            <h2 className="app-notfound">No Hospitals Found</h2>
                        </center>
                    )}
                </div>
                <div className="app-dashboard">
                    <AppDashboard />
                    <SelectArea
                        mandal={mandal}
                        setMandal={setMandal}
                        district={district}
                        setDistrict={setDistrict}
                        searchCovaxin={searchCovaxin}
                        searchCovishield={searchCovishield}
                        searchRemedesivir={searchRemedesivir}
                        setSearchCovaxin={setSearchCovaxin}
                        setSearchCovishield={setSearchCovishield}
                        setsearchRemedesivir={setsearchRemedesivir}
                        filter={filter}
                        setFilter={setFilter}
                    />
                </div>
            </div>
            <div className="app-footer flex-row">
                <p>Telangana Covid-19 Help line Number : 104</p>
                <a
                    className="app-reachus"
                    href="mailto:rakeshgandla201@gmail.com"
                >
                    <p>Reach us</p>
                </a>
            </div>
        </div>
    )
}

export default App
