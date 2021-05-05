import {
    Button,
    FormControl,
    InputLabel,
    makeStyles,
    MenuItem,
    Select,
    TextField,
} from "@material-ui/core"
import React, { useEffect, useState } from "react"
import fire from "./Config/fire"
import "./HospitalPanel.css"
import firebase from "firebase"
import HospitalDashBoard from "./HospitalDashBoard"

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
        "& > *": {
            margin: theme.spacing(1),
        },
    },
}))

function HospitalPanel(props) {
    const classes = useStyles()
    const { user } = props
    const [hospital, setHospital] = useState("")
    const [edit, setEdit] = useState(false)
    const [hospitalName, setHospitalName] = useState("")
    const [area, setArea] = useState("")
    const [district, setDistrict] = useState("")
    const [availableOxygen, setAvailableOxygen] = useState("")
    const [oxygenLastsfor, setOxygenLastsfor] = useState("")
    const [availbleBeds, setAvailbleBeds] = useState("")
    const [totalBeds, setTotalBeds] = useState("")
    const [ventilators, setVentilators] = useState("")
    const [totalPatients, setTotalPatients] = useState("")
    const [deathsToday, setDeathsToday] = useState("")
    const [discharged, setDischarged] = useState("")
    const [recovered, setRecovered] = useState("")
    const [positive, setPositive] = useState("")

    useEffect(() => {
        fire.firestore()
            .collection("hospitals")
            .doc(user.email)
            .onSnapshot((doc) => {
                setHospital(doc.data())
                console.log(doc.data())
                setHospitalName(doc.data().name)
                setArea(doc.data().area)
                setDistrict(doc.data().district)
                setAvailableOxygen(doc.data().oxygen.Available)
                setOxygenLastsfor(doc.data().oxygen.lastsFor)
                setAvailbleBeds(doc.data().beds.available)
                setTotalBeds(doc.data().beds.total)
                setVentilators(doc.data().ventilators)
                setTotalPatients(doc.data().totalPatients)
                setDeathsToday(doc.data().patients.deaths)
                setDischarged(doc.data().patients.discharged)
                setRecovered(doc.data().patients.recovered)
                setPositive(doc.data().patients.positive)
            })
    }, [])
    const handleSave = () => {
        const date = new Date().toJSON().slice(0, 10).replaceAll("-", "")
        fire.firestore()
            .collection("dayToDayInfo")
            .doc(`${user.email}${date}`)
            .set({
                timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                date: new Date().toJSON().slice(0, 10),
                deaths: deathsToday,
                discharged: discharged,
                positive: positive,
                recovered: recovered,
            })
            .then((docRef) => {
                fire.firestore()
                    .collection("hospitals")
                    .doc(user.email)
                    .update({
                        name: hospitalName,
                        area: area,
                        district: district,
                        beds: {
                            available: availbleBeds,
                            total: totalBeds,
                        },
                        oxygen: {
                            Available: availableOxygen,
                            lastsFor: oxygenLastsfor,
                        },
                        ventilators: ventilators,
                        totalPatients: totalPatients,
                        patients: {
                            deaths: deathsToday,
                            discharged: discharged,
                            positive: positive,
                            recovered: recovered,
                        },
                        daytoday: firebase.firestore.FieldValue.arrayUnion(
                            user.email + date
                        ),
                    })
                    .then(() => {
                        setEdit(!edit)
                    })
                    .catch((err) => console.log(err.message))
            })
    }
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
                {edit ? (
                    <div className="hospital-edit-cont">
                        <center style={{ marginBottom: "15px" }}>
                            <h1>Edit data</h1>
                        </center>
                        <TextField
                            style={{ marginBottom: "15px" }}
                            value={hospitalName}
                            onChange={(e) => setHospitalName(e.target.value)}
                            className="hospital-edit-text"
                            id="outlined-basic"
                            label="Hospital Name"
                            variant="outlined"
                        />
                        <TextField
                            style={{ marginBottom: "15px" }}
                            value={area}
                            onChange={(e) => setArea(e.target.value)}
                            className="hospital-edit-text"
                            id="outlined-basic"
                            label="Hospital Area"
                            variant="outlined"
                        />
                        {/* districts drop down */}
                        <FormControl
                            variant="outlined"
                            className={classes.formControl}
                        >
                            <InputLabel id="demo-simple-select-outlined-label">
                                Select District
                            </InputLabel>
                            <Select
                                labelId="demo-simple-select-outlined-label"
                                id="demo-simple-select-outlined"
                                value={district}
                                onChange={(e) => setDistrict(e.target.value)}
                                style={{
                                    marginBottom: "15px",
                                }}
                                label="Select District"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value="Adilabad">Adilabad</MenuItem>
                                <MenuItem value="Komaram Bheem Asifabad">
                                    Komaram Bheem Asifabad
                                </MenuItem>
                                <MenuItem value="Bhadradri Kothagudem">
                                    Bhadradri Kothagudem
                                </MenuItem>
                                <MenuItem value="Jayashankar Bhupalapally">
                                    Jayashankar Bhupalapally
                                </MenuItem>
                                <MenuItem value="Jogulamba Gadwal">
                                    Jogulamba Gadwal
                                </MenuItem>
                                <MenuItem value="Jagital">Jagital</MenuItem>
                                <MenuItem value="Jangaon">Jangaon</MenuItem>
                                <MenuItem value="Kamareddy">Kamareddy</MenuItem>
                                <MenuItem value="Karimnagar">
                                    Karimnagar
                                </MenuItem>
                                <MenuItem value="Khammam">Khammam</MenuItem>
                                <MenuItem value="Mahbubabad">
                                    Mahbubabad
                                </MenuItem>
                                <MenuItem value="Mancherial">
                                    Mancherial
                                </MenuItem>
                                <MenuItem value="Mahbubnagar">
                                    Mahbubnagar
                                </MenuItem>
                                <MenuItem value="Medak">Medak</MenuItem>
                                <MenuItem value="Medchal">Medchal</MenuItem>
                                <MenuItem value="Mulugu">Mulugu</MenuItem>
                                <MenuItem value="Nagarkurnool">
                                    Nagarkurnool
                                </MenuItem>
                                <MenuItem value="Nalgonda">Nalgonda</MenuItem>
                                <MenuItem value="Narayanpet">
                                    Narayanpet
                                </MenuItem>
                                <MenuItem value="Nirmal">Nirmal</MenuItem>
                                <MenuItem value="Nizamabad">Nizamabad</MenuItem>
                                <MenuItem value="Pedapally">Pedapally</MenuItem>
                                <MenuItem value="Rangareddy">
                                    Rangareddy
                                </MenuItem>
                                <MenuItem value="Sangareddy">
                                    Sangareddy
                                </MenuItem>
                                <MenuItem value="Siddipet">Siddipet</MenuItem>
                                <MenuItem value="Suryapet">Suryapet</MenuItem>
                                <MenuItem value="Rajanna Sircilla">
                                    Rajanna Sircilla
                                </MenuItem>
                                <MenuItem value="Vikarabad">Vikarabad</MenuItem>
                                <MenuItem value="Wanaparthy">
                                    Wanaparthy
                                </MenuItem>
                                <MenuItem value="Warangal Rural">
                                    Warangal Rural
                                </MenuItem>
                                <MenuItem value="Yadadri Bhuvanagiri">
                                    Yadadri Bhuvanagiri
                                </MenuItem>
                                <MenuItem value="Warangal Urban">
                                    Warangal Urban
                                </MenuItem>
                                <MenuItem value="GHMC">GHMC</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            style={{ marginBottom: "15px" }}
                            value={availableOxygen}
                            onChange={(e) => setAvailableOxygen(e.target.value)}
                            className="hospital-edit-text"
                            id="outlined-basic"
                            label="Available Oxygen(no of Cylinders)"
                            variant="outlined"
                        />
                        <TextField
                            style={{ marginBottom: "15px" }}
                            value={oxygenLastsfor}
                            onChange={(e) => setOxygenLastsfor(e.target.value)}
                            className="hospital-edit-text"
                            id="outlined-basic"
                            label="Oxygen might last for(days)"
                            variant="outlined"
                        />
                        <TextField
                            style={{ marginBottom: "15px" }}
                            value={availbleBeds}
                            onChange={(e) => setAvailbleBeds(e.target.value)}
                            className="hospital-edit-text"
                            id="outlined-basic"
                            label="Available Beds"
                            variant="outlined"
                        />
                        <TextField
                            style={{ marginBottom: "15px" }}
                            value={totalBeds}
                            onChange={(e) => setTotalBeds(e.target.value)}
                            className="hospital-edit-text"
                            id="outlined-basic"
                            label="Total Beds"
                            variant="outlined"
                        />
                        <TextField
                            style={{ marginBottom: "15px" }}
                            value={ventilators}
                            onChange={(e) => setVentilators(e.target.value)}
                            className="hospital-edit-text"
                            id="outlined-basic"
                            label="Available Ventilators"
                            variant="outlined"
                        />
                        <TextField
                            style={{ marginBottom: "15px" }}
                            value={totalPatients}
                            onChange={(e) => setTotalPatients(e.target.value)}
                            className="hospital-edit-text"
                            id="outlined-basic"
                            label="Total Patients in hospital"
                            variant="outlined"
                        />
                        <span style={{ marginBottom: "15px" }}>
                            Today : {new Date().toJSON().slice(0, 10)}
                        </span>
                        <TextField
                            style={{ marginBottom: "15px" }}
                            value={deathsToday}
                            onChange={(e) => setDeathsToday(e.target.value)}
                            className="hospital-edit-text"
                            id="outlined-basic"
                            label="Deaths Today"
                            variant="outlined"
                        />
                        <TextField
                            style={{ marginBottom: "15px" }}
                            value={discharged}
                            onChange={(e) => setDischarged(e.target.value)}
                            className="hospital-edit-text"
                            id="outlined-basic"
                            label="Patients Discharged Today"
                            variant="outlined"
                        />
                        <TextField
                            style={{ marginBottom: "15px" }}
                            value={recovered}
                            onChange={(e) => setRecovered(e.target.value)}
                            className="hospital-edit-text"
                            id="outlined-basic"
                            label="Patients Recovered today"
                            variant="outlined"
                        />
                        <TextField
                            style={{ marginBottom: "15px" }}
                            value={positive}
                            onChange={(e) => setPositive(e.target.value)}
                            className="hospital-edit-text"
                            id="outlined-basic"
                            label="Covid-19 Patients admitted today"
                            variant="outlined"
                        />

                        <Button
                            variant="contained"
                            style={{
                                backgroundColor: "#8E44AD",
                                color: " white",
                                marginBottom: "30px",
                            }}
                            onClick={() => {
                                handleSave()
                            }}
                        >
                            Save
                        </Button>
                    </div>
                ) : hospital ? (
                    <div className="hospital-show-cont">
                        <div className="hospital-panel-cont">
                            <h1 className="hospital-title">{hospital.name}</h1>
                            <p className="hospital-area">
                                Area : {hospital.area}
                            </p>
                            <p className="hospital-district">
                                District : {hospital.district}
                            </p>
                        </div>
                        <br />
                        <div className="hospital-panel-cont">
                            <h2>Oxygen Supplies</h2>
                            <p>
                                Available(no. of Cylinders) :{" "}
                                {hospital.oxygen.Available}
                            </p>
                            <p>
                                might last for {hospital.oxygen.lastsFor} days
                            </p>
                        </div>
                        <br />
                        <div className="hospital-panel-cont">
                            <h2>Covid-19 Beds Information</h2>
                            <p>Available Beds: {hospital.beds.available}</p>
                            <p>Total Beds : {hospital.beds.total}</p>
                        </div>
                        <br />
                        <div className="hospital-panel-cont">
                            <h2>
                                Ventilators Available : {hospital.ventilators}
                            </h2>
                        </div>
                        <br />
                        <div className="hospital-panel-cont">
                            <h3>Total Patients : {hospital.totalPatients}</h3>
                            <h3>Total Deaths : {hospital.patients.deaths}</h3>
                            <h3>discharged : {hospital.patients.discharged}</h3>
                            <h3>Recovered : {hospital.patients.recovered}</h3>
                            <h3>
                                Positive Cases Today :{" "}
                                {hospital.patients.positive}
                            </h3>
                        </div>
                    </div>
                ) : null}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                    }}
                >
                    <Button
                        variant="contained"
                        color="secondary"
                        className="hospital-editdata"
                        style={{
                            marginTop: "7px",
                            marginLeft: "70px",
                            marginBottom: "50px",
                        }}
                        onClick={() => {
                            setEdit(!edit)
                        }}
                    >
                        {edit ? <span>Cancel</span> : <span>Edit Data</span>}
                    </Button>
                    {hospital ? (
                        <HospitalDashBoard hospital={hospital} />
                    ) : null}
                </div>
            </div>
        </div>
    )
}

export default HospitalPanel
