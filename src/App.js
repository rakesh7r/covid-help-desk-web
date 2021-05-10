import { makeStyles } from "@material-ui/core"
import { useEffect, useState } from "react"
import "./App.css"
import fire from "./Config/fire"
import Hospital from "./Hospital"
import AppDashboard from "./AppDashboard"
import SelectArea from "./SelectArea"

const useStyles = makeStyles((theme) => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    root: {
        width: 500,
        "& > *": {
            margin: theme.spacing(1),
        },
        "& > * + *": {
            marginTop: theme.spacing(2),
        },
    },
    input: {
        color: "white",
        border: "0.5px solid #4498ed",
        "&::placeholder": {
            color: "white",
        },
        "&::focus": {
            outline: "none",
        },
    },
}))

function App() {
    const classes = useStyles()
    const [district, setDistrict] = useState("GHMC")
    const [mandal, setMandal] = useState("")
    const [hospitals, setHospitals] = useState([])
    const [search, setSearch] = useState("")
    const [searchVaccinationCentre, setSearchVaccinationCentre] = useState(
        false
    )
    const [searchPHC, setSearchPHC] = useState(false)
    const [searchCovaxin, setSearchCovaxin] = useState(false)
    const [searchCovishield, setSearchCovishield] = useState(false)
    const [searchRemedesivir, setsearchRemedesivir] = useState(false)

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
            fire.firestore()
                .collection("hospitals")
                .where("district", "==", district)
                .onSnapshot((docs) => {
                    setHospitals([])
                    docs.forEach((doc) => {
                        setHospitals((oldArr) => [...oldArr, doc.data()])
                    })
                })
        } else if (mandal !== "") {
            fire.firestore()
                .collection("hospitals")
                .where("mandal", "==", mandal)
                .onSnapshot((docs) => {
                    setHospitals([])
                    docs.forEach((doc) => {
                        setHospitals((oldArr) => [...oldArr, doc.data()])
                    })
                })
        }
    }, [
        district,
        mandal,
        searchPHC,
        searchRemedesivir,
        searchCovaxin,
        searchCovishield,
        searchVaccinationCentre,
    ])
    const handleSearch = (e) => {
        console.log(e.target.value)
    }
    return (
        <div className="App">
            <div className="app-header">
                <h1>Covid-19 Help Desk</h1>
                <input
                    type="text"
                    placeholder="Enter Hospital Name"
                    value={search}
                    className="app-header-search"
                    autoFocus
                    onChange={(e) => {
                        setSearch(e.target.value)
                        handleSearch(e)
                    }}
                />
            </div>

            <div className="app-main">
                <div className="app-intermediate">
                    {hospitals.map((hospital) => (
                        <Hospital key={hospital.id} hospital={hospital} />
                    ))}
                </div>
                <div className="app-dashboard">
                    <AppDashboard />
                    <SelectArea
                        mandal={mandal}
                        setMandal={setMandal}
                        district={district}
                        setDistrict={setDistrict}
                        searchPHC={searchPHC}
                        searchCovaxin={searchCovaxin}
                        searchCovishield={searchCovishield}
                        searchRemedesivir={searchRemedesivir}
                        setSearchPHC={setSearchPHC}
                        setSearchCovaxin={setSearchCovaxin}
                        setSearchCovishield={setSearchCovishield}
                        setsearchRemedesivir={setsearchRemedesivir}
                        searchVaccinationCentre={searchVaccinationCentre}
                        setSearchVaccinationCentre={setSearchVaccinationCentre}
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
