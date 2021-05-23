import React, { useEffect, useState } from "react"
import fire from "./Config/fire"
import "./HospitalPanel.css"
import firebase from "firebase"
import EditData from "./Hospital Panel Containers/EditData"
import HospitalPanelShowData from "./HospitalPanelShowData"
import HospitalSideBar from "./HospitalSideBar"
import EditAccountSettings from "./EditAccountSettings"
import { Link } from "react-router-dom"
import Loading from "./Loading"
import ErrorPage from "./error/ErrorPage"

function HospitalPanel(props) {
    const { user } = props
    const [hospital, setHospital] = useState("")
    const [edit, setEdit] = useState(false)
    const [editSettings, setEditSettings] = useState(false)
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
    const [covaxin, setCovaxin] = useState(0)
    const [covishield, setCovishield] = useState(0)
    const [remedesivir, setRemedesivir] = useState(0)
    const [isVaccinationCenter, setIsVaccinationCenter] = useState(false)
    const [isPHC, setIsPHC] = useState(false)
    const [isPrivate, setIsPrivate] = useState(false)
    const [errorPage, setErrorPage] = useState(false)

    useEffect(() => {
        document.title = "Hospital Panel"
        fire.firestore()
            .collection("hospitals")
            .doc(user.email)
            .get()
            .then((u) => {
                if (u.exists) {
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
                                setIsVaccinationCenter(
                                    doc.data().isVaccinationCenter
                                )
                                setCovaxin(doc.data().covaxin)
                                setCovishield(doc.data().covishield)
                                setRemedesivir(doc.data().remedesivir)
                                setIsPHC(doc.data().isPHC)
                            }
                        })
                } else {
                    setErrorPage(true)
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
                        isPrivate: isPrivate,
                        covaxin: parseInt(covaxin),
                        covishield: parseInt(covishield),
                        remedesivir: parseInt(remedesivir),
                        timestamp:
                            firebase.firestore.FieldValue.serverTimestamp(),
                    })
                    .then(() => {
                        setEdit(!edit)
                    })
                    .catch((err) => console.log(err.message))
            })
    }

    return (
        <div className="hospital-outer-cont">
            {errorPage ? (
                <ErrorPage />
            ) : (
                <div>
                    <div className="hospital-header">
                        <p className="hospital-header-title">Hospital Panel</p>
                        <Link
                            to="/"
                            style={{
                                textDecoration: "none",
                                color: "white",
                                width: "fitContent",
                            }}
                        >
                            {" "}
                            <p className="hospital-header-link-to-home">
                                Go To Help Desk
                            </p>
                        </Link>
                    </div>
                    <div className="hospital-main">
                        <div className="hospital-intermediate">
                            {edit || editSettings ? (
                                edit ? (
                                    <EditData
                                        hospitalName={hospitalName}
                                        mandal={mandal}
                                        district={district}
                                        availableOxygen={availableOxygen}
                                        oxygenLastsfor={oxygenLastsfor}
                                        availbleBeds={availbleBeds}
                                        totalBeds={totalBeds}
                                        ventilators={ventilators}
                                        totalPatients={totalPatients}
                                        deathsToday={deathsToday}
                                        discharged={discharged}
                                        recovered={recovered}
                                        positive={positive}
                                        covaxin={covaxin}
                                        covishield={covishield}
                                        remedesivir={remedesivir}
                                        isVaccinationCenter={
                                            isVaccinationCenter
                                        }
                                        isPHC={isPHC}
                                        isPrivate={isPrivate}
                                        setHospitalName={setHospitalName}
                                        setMandal={setMandal}
                                        setDistrict={setDistrict}
                                        setAvailableOxygen={setAvailableOxygen}
                                        setOxygenLastsfor={setOxygenLastsfor}
                                        setAvailbleBeds={setAvailbleBeds}
                                        setTotalBeds={setTotalBeds}
                                        setVentilators={setVentilators}
                                        setTotalPatients={setTotalPatients}
                                        setDeathsToday={setDeathsToday}
                                        setDischarged={setDischarged}
                                        setRecovered={setRecovered}
                                        setPositive={setPositive}
                                        setCovaxin={setCovaxin}
                                        setCovishield={setCovishield}
                                        setRemedesivir={setRemedesivir}
                                        setIsVaccinationCenter={
                                            setIsVaccinationCenter
                                        }
                                        setIsPHC={setIsPHC}
                                        setIsPrivate={setIsPrivate}
                                        hospital={hospital}
                                        handleSave={handleSave}
                                    />
                                ) : editSettings ? (
                                    <div className="hospital-panel-account-settings">
                                        <EditAccountSettings user={user} />
                                    </div>
                                ) : null
                            ) : hospital ? (
                                <HospitalPanelShowData hospital={hospital} />
                            ) : (
                                <Loading />
                            )}
                        </div>
                        <HospitalSideBar
                            edit={edit}
                            setEdit={setEdit}
                            editSettings={editSettings}
                            setEditSettings={setEditSettings}
                            hospital={hospital}
                        />
                    </div>
                </div>
            )}
        </div>
    )
}

export default HospitalPanel
