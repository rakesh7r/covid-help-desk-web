import {
    Button,
    Checkbox,
    FormControlLabel,
    TextField,
} from "@material-ui/core"
import React, { useState } from "react"
import MandalSelector from "../Mandals/MandalSelector"
import Districts from "../Distircts"
import SaveIcon from "@material-ui/icons/Save"
import CheckCircleOutlinedIcon from "@material-ui/icons/CheckCircleOutlined"
import firebase from "firebase"
import fire from "../Config/fire"

function EditData(props) {
    const btnStyle = {
        marginTop: "10px",
        marginBottom: "10px",
        padding: "8px",
        backgroundColor: "#2685d3",
        color: "white",
    }
    const {
        hospitalName,
        mandal,
        district,
        availableOxygen,
        availbleBeds,
        totalBeds,
        ventilators,
        totalPatients,
        deathsToday,
        discharged,
        recovered,
        positive,
        covaxin,
        covishield,
        remedesivir,
        isVaccinationCenter,
        isPHC,
        isPrivate,
        setHospitalName,
        setMandal,
        setDistrict,
        setAvailableOxygen,
        setAvailbleBeds,
        setTotalBeds,
        setVentilators,
        setTotalPatients,
        setDeathsToday,
        setDischarged,
        setRecovered,
        setPositive,
        setCovaxin,
        setCovishield,
        setRemedesivir,
        setIsVaccinationCenter,
        setIsPHC,
        setIsPrivate,
        hospital,
        handleSave,
    } = props
    const [updated, setUpdated] = useState(false)
    const updateHospitalLocation = () => {
        navigator.geolocation.getCurrentPosition((position) => {
            fire.firestore()
                .collection("hospitals")
                .doc(fire.auth().currentUser.email)
                .update({
                    location: new firebase.firestore.GeoPoint(
                        position.coords.latitude,
                        position.coords.longitude
                    ),
                    timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                })
                .then(() => {
                    setUpdated(true)
                    setInterval(() => {
                        setUpdated(false)
                    }, 2000)
                })
        })
    }
    return (
        <div>
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
                    <Districts district={district} setDistrict={setDistrict} />
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
                    label="Available Oxygen(in cylinders)"
                    variant="outlined"
                    type="number"
                />
                <TextField
                    style={{ marginBottom: "15px" }}
                    value={availbleBeds}
                    onChange={(e) => setAvailbleBeds(e.target.value)}
                    className="hospital-edit-text"
                    id="outlined-basic"
                    label="Available Beds"
                    variant="outlined"
                    type="number"
                />
                <TextField
                    style={{ marginBottom: "15px" }}
                    value={totalBeds}
                    onChange={(e) => setTotalBeds(e.target.value)}
                    className="hospital-edit-text"
                    id="outlined-basic"
                    label="Total Beds"
                    variant="outlined"
                    type="number"
                />
                <TextField
                    style={{ marginBottom: "15px" }}
                    value={ventilators}
                    onChange={(e) => setVentilators(e.target.value)}
                    className="hospital-edit-text"
                    id="outlined-basic"
                    label="Available Ventilators"
                    variant="outlined"
                    type="number"
                />
                <TextField
                    style={{ marginBottom: "15px" }}
                    value={totalPatients}
                    onChange={(e) => setTotalPatients(e.target.value)}
                    className="hospital-edit-text"
                    id="outlined-basic"
                    label="Total Patients in hospital"
                    variant="outlined"
                    type="number"
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
                    type="number"
                />
                <TextField
                    style={{ marginBottom: "15px" }}
                    value={discharged}
                    onChange={(e) => setDischarged(e.target.value)}
                    className="hospital-edit-text"
                    id="outlined-basic"
                    label="Patients Discharged Today"
                    variant="outlined"
                    type="number"
                />
                <TextField
                    style={{ marginBottom: "15px" }}
                    value={recovered}
                    onChange={(e) => setRecovered(e.target.value)}
                    className="hospital-edit-text"
                    id="outlined-basic"
                    label="Patients Recovered today"
                    variant="outlined"
                    type="number"
                />
                <TextField
                    style={{ marginBottom: "15px" }}
                    value={positive}
                    onChange={(e) => setPositive(e.target.value)}
                    className="hospital-edit-text"
                    id="outlined-basic"
                    label="Covid-19 Patients admitted today"
                    variant="outlined"
                    type="number"
                />
                <div>
                    <p className="heading-small">
                        Update Hospital Location to this current location
                    </p>

                    <Button
                        onClick={() => {
                            updateHospitalLocation()
                        }}
                        style={btnStyle}
                    >
                        Update
                        {updated ? <CheckCircleOutlinedIcon /> : <SaveIcon />}
                    </Button>
                </div>
                <FormControlLabel
                    control={
                        <Checkbox
                            checked={isPrivate}
                            onChange={() => {
                                setIsPrivate((prevState) => !prevState)
                            }}
                        />
                    }
                    label="Is This a Private hospital?"
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
                            type="number"
                        />
                        <TextField
                            style={{ marginBottom: "15px" }}
                            value={covishield}
                            onChange={(e) => setCovishield(e.target.value)}
                            className="hospital-edit-text"
                            id="outlined-basic"
                            label="Available Covishield doses(Qty)"
                            variant="outlined"
                            type="number"
                        />
                        <TextField
                            style={{ marginBottom: "15px" }}
                            value={remedesivir}
                            onChange={(e) => setRemedesivir(e.target.value)}
                            className="hospital-edit-text"
                            id="outlined-basic"
                            label="Available Remdesivir Doses(Qty)"
                            variant="outlined"
                            type="number"
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
        </div>
    )
}

export default EditData
