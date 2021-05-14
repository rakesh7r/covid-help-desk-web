import React from "react"
import OxygenLogo from "./OxygenLogo"
import HotelIcon from "@material-ui/icons/Hotel"

function HospitalPanelShowData(props) {
    const { hospital } = props
    return (
        <div>
            <div className="hospital-show-cont">
                <div className="hospital-panel-cont">
                    <h2 className="hospital-title">{hospital.name}</h2>
                    <p className="hospital-area">
                        Area : {hospital.mandal || hospital.area}
                    </p>
                    <p className="hospital-district">
                        District : {hospital.district}
                    </p>
                </div>
                <br />
                <div className="hospital-panel-cont">
                    <h2>
                        <OxygenLogo /> Oxygen
                    </h2>
                    <p>Available(in cylinders) : {hospital.oxygen.Available}</p>
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
                    <p>Ventilators Available : {hospital.ventilators}</p>
                </div>
                <br />
                <div className="hospital-panel-cont">
                    <strong>On : {hospital.date}</strong>
                    <br />
                    <p>Total Patients in Hospital : {hospital.totalPatients}</p>
                    <p> Deaths : {hospital.patients.deaths}</p>
                    <p>discharged : {hospital.patients.discharged}</p>
                    <p>Recovered : {hospital.patients.recovered}</p>
                    <p>Positive Cases Today :{hospital.patients.positive}</p>
                </div>
                {hospital.isVaccinationCenter || hospital.isPHC ? (
                    <div
                        className="hospital-panel-cont"
                        style={{ marginTop: "20px" }}
                    >
                        <h2>Vaccination Information : </h2>
                        <p>Covishield : {hospital.covishield}</p>
                        <p>Covaxin : {hospital.covaxin}</p>
                        <p>Remedesivir : {hospital.remedesivir}</p>
                    </div>
                ) : null}
                <div
                    className="hospital-panel-cont"
                    style={{ marginTop: "20px" }}
                >
                    <h2>Hospital Information : </h2>
                    {hospital.isPrivate ? (
                        <p>This is a Private hospital</p>
                    ) : (
                        <p>This is a Government hospital</p>
                    )}
                    {hospital.isVaccinationCenter ? (
                        <p>This is a Vaccination Centre</p>
                    ) : null}
                    {hospital.isPHC ? (
                        <p>This is a Primary Health Care Centre</p>
                    ) : null}
                </div>
            </div>
        </div>
    )
}

export default HospitalPanelShowData
