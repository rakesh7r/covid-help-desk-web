import React, { useState } from "react"
import OxygenLogo from "./OxygenLogo"
import HotelIcon from "@material-ui/icons/Hotel"
import "./Hospital.css"
import { Avatar } from "@material-ui/core"
import DoneIcon from "@material-ui/icons/Done"
import Unavailable from "./Icons/Unavaliable"
import ClearSharpIcon from "@material-ui/icons/ClearSharp"
function Hospital(props) {
    const { hospital } = props
    const [show, setShow] = useState(false)
    const paraStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    }
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
                            ) : (
                                <strong className="govt-hospital-text">
                                    Government Hospital
                                </strong>
                            )}
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
                            <span
                                style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                {<OxygenLogo />}Oxygen :
                                {hospital.oxygen.Available > 0 ? (
                                    <DoneIcon style={{ color: "green" }} />
                                ) : (
                                    <ClearSharpIcon style={{ color: "red" }} />
                                )}
                            </span>
                            <p
                                style={{
                                    marginLeft: "5vw",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                <HotelIcon /> Covid-19 Beds :
                                {hospital.beds.available > 0 ? (
                                    <DoneIcon style={{ color: "green" }} />
                                ) : (
                                    <ClearSharpIcon style={{ color: "red" }} />
                                )}
                            </p>
                        </div>
                        {hospital.isPHC || hospital.isVaccinationCenter ? (
                            <div className="hospital-vaccine">
                                {hospital && hospital.covaxin > 0 ? (
                                    <p
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "Center",
                                        }}
                                    >
                                        Covaxin :
                                        <DoneIcon
                                            style={{
                                                color: "green",
                                            }}
                                        />
                                    </p>
                                ) : (
                                    <p
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "Center",
                                        }}
                                    >
                                        Covaxin :{" "}
                                        <ClearSharpIcon
                                            style={{ color: "Red" }}
                                        />
                                    </p>
                                )}
                                {hospital && hospital.covishield > 0 ? (
                                    <p
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "Center",
                                        }}
                                    >
                                        Covishield :
                                        <DoneIcon
                                            style={{
                                                color: "green",
                                            }}
                                        />
                                    </p>
                                ) : (
                                    <p
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                        }}
                                    >
                                        Covishield :{" "}
                                        <ClearSharpIcon
                                            style={{ color: "Red" }}
                                        />
                                    </p>
                                )}
                                {hospital && hospital.remedesivir > 0 ? (
                                    <p
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "Center",
                                        }}
                                    >
                                        Remedesivir :
                                        <DoneIcon
                                            style={{
                                                color: "green",
                                                fontWeight: 1100,
                                            }}
                                        />
                                    </p>
                                ) : (
                                    <p
                                        style={{
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "Center",
                                        }}
                                    >
                                        Remedesivir :{" "}
                                        <ClearSharpIcon
                                            style={{ color: "Red" }}
                                        />
                                    </p>
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
