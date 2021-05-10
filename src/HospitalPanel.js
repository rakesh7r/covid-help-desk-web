import {
    Button,
    Checkbox,
    FormControlLabel,
    TextField,
} from "@material-ui/core"
import React, { useEffect, useState } from "react"
import fire from "./Config/fire"
import "./HospitalPanel.css"
import firebase from "firebase"
import HospitalDashBoard from "./HospitalDashBoard"
import HotelIcon from "@material-ui/icons/Hotel"
import OxygenLogo from "./OxygenLogo"
import Districts from "./Distircts"
import MandalSelector from "./Mandals/MandalSelector"

function HospitalPanel(props) {
    // const classes = useStyles()
    const { user } = props
    const [hospital, setHospital] = useState("")
    const [edit, setEdit] = useState(false)
    const [hospitalName, setHospitalName] = useState("")
    const [mandal, setMandal] = useState("")
    const [district, setDistrict] = useState("")
    const [availableOxygen, setAvailableOxygen] = useState(0)
    const [oxygenLastsfor, setOxygenLastsfor] = useState(0)
    const [availbleBeds, setAvailbleBeds] = useState(0)
    const [totalBeds, setTotalBeds] = useState(0)
    const [ventilators, setVentilators] = useState(0)
    const [totalPatients, setTotalPatients] = useState(0)
    const [deathsToday, setDeathsToday] = useState(0)
    const [discharged, setDischarged] = useState(0)
    const [recovered, setRecovered] = useState(0)
    const [positive, setPositive] = useState(0)
    const [isVaccinationCenter, setIsVaccinationCenter] = useState(false)
    const [covaxin, setCovaxin] = useState(0)
    const [covishield, setCovishield] = useState(0)
    const [remedesivir, setRemedesivir] = useState(0)
    const [isPHC, setIsPHC] = useState(false)

    useEffect(() => {
        fire.firestore()
            .collection("hospitals")
            .doc(user.email)
            .onSnapshot((doc) => {
                if (doc.data()) {
                    setHospital(doc.data())
                    console.log(doc.data())
                    setHospitalName(doc.data().name)
                    setMandal(doc.data().area || doc.data().mandal)
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
                    setIsVaccinationCenter(doc.data().isVaccinationCenter)
                    setCovaxin(doc.data().covaxin)
                    setCovishield(doc.data().covishield)
                    setRemedesivir(doc.data().remedesivir)
                    setIsPHC(doc.data().isPHC)
                }
            })
    }, [])
    const handleSave = () => {
        //validation
        if (
            isNaN(availableOxygen) ||
            isNaN(oxygenLastsfor) ||
            isNaN(availbleBeds) ||
            isNaN(totalBeds) ||
            isNaN(ventilators) ||
            isNaN(totalPatients) ||
            isNaN(deathsToday) ||
            isNaN(discharged) ||
            isNaN(recovered) ||
            isNaN(positive)
        ) {
            return alert("Trying to Add Invalid Data")
        }
        const date = new Date().toJSON().slice(0, 10).replaceAll("-", "")
        const dt = new Date().toJSON().slice(0, 10)
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
                hospitalid: user.email,
            })
            .then((docRef) => {
                fire.firestore()
                    .collection("hospitals")
                    .doc(user.email)
                    .update({
                        name: hospitalName,
                        mandal: mandal,
                        district: district,
                        beds: {
                            available: parseInt(availbleBeds),
                            total: parseInt(totalBeds),
                        },
                        oxygen: {
                            Available: parseInt(availableOxygen),
                            lastsFor: parseInt(oxygenLastsfor),
                        },
                        ventilators: parseInt(ventilators),
                        totalPatients: parseInt(totalPatients),
                        date: dt,
                        patients: {
                            deaths: parseInt(deathsToday),
                            discharged: parseInt(discharged),
                            positive: parseInt(positive),
                            recovered: parseInt(recovered),
                        },
                        daytoday: firebase.firestore.FieldValue.arrayUnion(
                            user.email + date
                        ),
                        isVaccinationCenter: isVaccinationCenter,
                        isPHC: isPHC,
                        covaxin: parseInt(covaxin),
                        covishield: parseInt(covishield),
                        remedesivir: parseInt(remedesivir),
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
                        {/* districts drop down */}
                        <div style={{ width: "100%" }}>
                            <Districts
                                district={district}
                                setDistrict={setDistrict}
                            />
                            {district ? (
                                <MandalSelector
                                    district={district}
                                    mandal={mandal}
                                    setMandal={setMandal}
                                />
                            ) : null}
                        </div>

                        <TextField
                            style={{ marginBottom: "15px" }}
                            value={availableOxygen}
                            onChange={(e) => setAvailableOxygen(e.target.value)}
                            className="hospital-edit-text"
                            id="outlined-basic"
                            label="Available Oxygen(in ltrs)"
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
                            On : {hospital.date}
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
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={isVaccinationCenter}
                                    onChange={() => {
                                        setIsVaccinationCenter(
                                            (prevState) => !prevState
                                        )
                                    }}
                                />
                            }
                            label="Is This a Vaccination Centre?"
                        />
                        <FormControlLabel
                            control={
                                <Checkbox
                                    checked={isPHC}
                                    onChange={() => {
                                        setIsPHC((prevState) => !prevState)
                                    }}
                                />
                            }
                            label="Is This a Primary Health Care Centre?"
                        />
                        {isPHC || isVaccinationCenter ? (
                            <div
                                className="hospital-vaccination-details-cont"
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                }}
                            >
                                <TextField
                                    style={{ marginBottom: "15px" }}
                                    value={covaxin}
                                    onChange={(e) => setCovaxin(e.target.value)}
                                    className="hospital-edit-text"
                                    id="outlined-basic"
                                    label="Available Covaxin doses(Qty)"
                                    variant="outlined"
                                />
                                <TextField
                                    style={{ marginBottom: "15px" }}
                                    value={covishield}
                                    onChange={(e) =>
                                        setCovishield(e.target.value)
                                    }
                                    className="hospital-edit-text"
                                    id="outlined-basic"
                                    label="Available Covishield doses(Qty)"
                                    variant="outlined"
                                />
                                <TextField
                                    style={{ marginBottom: "15px" }}
                                    value={remedesivir}
                                    onChange={(e) =>
                                        setRemedesivir(e.target.value)
                                    }
                                    className="hospital-edit-text"
                                    id="outlined-basic"
                                    label="Available Remdesivir Doses(Qty)"
                                    variant="outlined"
                                />
                            </div>
                        ) : null}

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
                        <div className="hospital-details">
                            <div
                                // className="hospital-panel-cont"
                                style={{ marginLeft: "20px" }}
                            >
                                <h1 className="hospital-title">
                                    {hospital.name}
                                </h1>
                                <p className="hospital-area">
                                    Area : {hospital.mandal || hospital.area}
                                </p>
                                <p className="hospital-district">
                                    District : {hospital.district}
                                </p>
                            </div>
                        </div>
                        <br />
                        <div className="hospital-panel-cont">
                            <h2>
                                <OxygenLogo /> Oxygen
                            </h2>
                            <p>
                                Available(in ltrs) : {hospital.oxygen.Available}
                            </p>
                            <p>
                                might last for {hospital.oxygen.lastsFor} days
                            </p>
                        </div>
                        <br />
                        <div className="hospital-panel-cont">
                            <h2>
                                <HotelIcon /> Covid-19 Beds
                            </h2>
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
                            <strong>On : {hospital.date}</strong>
                            <br />
                            <h3>
                                Total Patients in Hospital :{" "}
                                {hospital.totalPatients}
                            </h3>
                            <h3> Deaths : {hospital.patients.deaths}</h3>
                            <h3>discharged : {hospital.patients.discharged}</h3>
                            <h3>Recovered : {hospital.patients.recovered}</h3>
                            <h3>
                                Positive Cases Today :
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
