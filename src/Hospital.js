import React, { useState } from "react"
import OxygenLogo from "./OxygenLogo"
import HotelIcon from "@material-ui/icons/Hotel"
import "./Hospital.css"
import { Avatar } from "@material-ui/core"
function Hospital(props) {
    const { hospital } = props
    const [show, setShow] = useState(false)
    return (
        <div>
            <div
                key={hospital.id}
                className="hospital-cont"
                onClick={() => setShow(!show)}
            >
                <div className="flex-row hospital-card-title-cont">
                    <h2>{hospital.name}</h2>
                    {hospital.isVaccinationCenter ||
                    hospital.isPHC ||
                    hospital.isPrivate ? (
                        <div
                            className="flex-column"
                            style={{ alignItems: "center" }}
                        >
                            {hospital.isVaccinationCenter || hospital.isPHC ? (
                                <strong className="vaccination-center-text">
                                    Vaccination Center
                                </strong>
                            ) : null}
                            {hospital.isPrivate ? (
                                <strong className="error-text">
                                    Private hospital
                                </strong>
                            ) : null}
                        </div>
                    ) : null}
                </div>
                <p>
                    Area : {hospital.mandal || hospital.area} , Dist :{" "}
                    {hospital.district}
                </p>
                {show ? null : (
                    <div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "flex-start",
                                padding: "4px",
                                paddingTop: "10px",
                                alignItems: "center",
                            }}
                        >
                            <span>
                                {<OxygenLogo />}Oxygen :
                                {hospital.oxygen.Available > 0 ? (
                                    <span>Available</span>
                                ) : (
                                    <span>Unavailable</span>
                                )}
                            </span>
                            <p style={{ marginLeft: "5vw" }}>
                                <HotelIcon /> Covid-19 Beds :
                                {hospital.beds.available > 0 ? (
                                    <span>Available</span>
                                ) : (
                                    <span>Unavailable</span>
                                )}
                            </p>
                        </div>
                        {hospital.isPHC || hospital.isVaccinationCenter ? (
                            <div className="hospital-vaccine">
                                {hospital && hospital.covaxin > 0 ? (
                                    <p>Covaxin : Available</p>
                                ) : (
                                    <p>Covaxin : Unavailable</p>
                                )}
                                {hospital && hospital.covishield > 0 ? (
                                    <p>Covishield : Available</p>
                                ) : (
                                    <p>Covishield : Unavailable</p>
                                )}
                                {hospital && hospital.remedesivir > 0 ? (
                                    <p>Remedesivir : Available</p>
                                ) : (
                                    <p>Remedesivir : Unavailable</p>
                                )}
                            </div>
                        ) : null}
                    </div>
                )}
                {show ? (
                    <div>
                        <br />
                        <h2>
                            <OxygenLogo /> Oxygen{" "}
                        </h2>
                        <p>Available(cylinders): {hospital.oxygen.Available}</p>
                        <br />
                        <h2>
                            <HotelIcon /> Covid-19 Beds
                        </h2>
                        <p>Available Beds: {hospital.beds.available}</p>
                        <p>Total Beds : {hospital.beds.total}</p>
                        <br />
                        <p>Ventilators Available : {hospital.ventilators}</p>
                        <br />
                        <h3> As of : {hospital.date} </h3>
                        <p>Total Patients : {hospital.totalPatients}</p>
                        <p>Total Deaths : {hospital.patients.deaths}</p>
                        <p>discharged : {hospital.patients.discharged}</p>
                        <p>Recovered : {hospital.patients.recovered}</p>
                        <p>
                            Positive Cases Today : {hospital.patients.positive}
                        </p>
                        {hospital.isVaccinationCenter || hospital.isPHC ? (
                            <div className="app-card-vaccine-info">
                                <div className="flex-row">
                                    <Avatar
                                        src="injection.png"
                                        variant="square"
                                        style={{
                                            width: "30px",
                                            height: "30px",
                                        }}
                                    />
                                    <h2>Vaccine Information : </h2>
                                </div>
                                <p>Covishield : {hospital.covishield} Doses</p>
                                <p>Covaxin : {hospital.covaxin} Doses</p>
                                <p>
                                    Remedesivir : {hospital.remedesivir} Doses
                                </p>
                            </div>
                        ) : null}
                    </div>
                ) : null}
            </div>
        </div>
    )
}

export default Hospital
