import React, { useState } from "react"
import OxygenLogo from "./OxygenLogo"
import HotelIcon from "@material-ui/icons/Hotel"
import "./Hospital.css"
import { Button } from "@material-ui/core"
import DoneIcon from "@material-ui/icons/Done"
import ClearSharpIcon from "@material-ui/icons/ClearSharp"
import NavigationIcon from "@material-ui/icons/Navigation"
function Hospital(props) {
    const { hospital } = props
    const [show, setShow] = useState(false)
    return (
        <div key={hospital.id}>
            <div
                key={hospital.id}
                className="hospital-cont"
                onClick={() => setShow(!show)}
            >
                <div className="flex-row hospital-card-title-cont">
                    <h2>{hospital.name}</h2>
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
                </div>
                <p
                    style={
                        navigator.userAgentData.mobile
                            ? { fontSize: "0.7rem" }
                            : { fontSize: "1rem" }
                    }
                >
                    Area : {hospital.mandal || hospital.area} , Dist :{" "}
                    {hospital.district}
                </p>
                {show ? null : (
                    <div>
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                padding: "4px",
                                paddingTop: "10px",
                                alignItems: "center",
                                width: "80%",
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
                            <p
                                style={{
                                    fontSize: "0.9rem",
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                Ventilators :{" "}
                                {hospital.ventilators > 0 ? (
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
                        <h4>
                            <OxygenLogo /> Oxygen{" "}
                        </h4>
                        <p
                            style={
                                navigator.userAgentData.mobile
                                    ? { fontSize: "0.7rem" }
                                    : { fontSize: "1rem" }
                            }
                        >
                            Available(cylinders): {hospital.oxygen.Available}
                        </p>
                        <br />
                        <h4
                            style={{
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <HotelIcon /> Covid-19 Beds
                        </h4>
                        <p
                            style={
                                navigator.userAgentData.mobile
                                    ? { fontSize: "0.7rem" }
                                    : { fontSize: "1rem" }
                            }
                        >
                            Available Beds: {hospital.beds.available}
                        </p>
                        <p
                            style={
                                navigator.userAgentData.mobile
                                    ? { fontSize: "0.7rem" }
                                    : { fontSize: "1rem" }
                            }
                        >
                            Total Beds : {hospital.beds.total}
                        </p>
                        <br />
                        <p
                            style={
                                navigator.userAgentData.mobile
                                    ? { fontSize: "0.7rem" }
                                    : { fontSize: "1rem" }
                            }
                        >
                            Ventilators Available : {hospital.ventilators}
                        </p>
                        <br />
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <div
                                style={{
                                    width: "fit-content",
                                }}
                            >
                                <h4> As of : {hospital.date} </h4>
                                <p>Total Patients : {hospital.totalPatients}</p>
                                <p>Total Deaths : {hospital.patients.deaths}</p>
                                <p>
                                    discharged : {hospital.patients.discharged}
                                </p>
                                <p>Recovered : {hospital.patients.recovered}</p>
                                <p>
                                    Positive Cases Today :{" "}
                                    {hospital.patients.positive}
                                </p>
                            </div>
                            {!hospital.isVaccinationCenter &&
                            !hospital.isPHC &&
                            hospital.location ? (
                                <div
                                    style={{
                                        width: "fit-content",
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "flex-end",
                                    }}
                                    onClick={() => setShow(true)}
                                >
                                    <a
                                        href={`https://www.google.com/maps/place/${hospital.location.latitude}+${hospital.location.longitude}`}
                                        style={{
                                            textDecoration: "none",
                                        }}
                                    >
                                        {/* <IconButton>
                                            <DirectionsOutlinedIcon
                                                style={{ color: "blue" }}
                                            />
                                        </IconButton> */}
                                        <Button
                                            color="primary"
                                            variant="contained"
                                            style={{
                                                backgroundColor: "#4285F4",
                                                borderRadius: "4rem",
                                            }}
                                        >
                                            Navigate{" "}
                                            <NavigationIcon
                                                style={{ color: "white" }}
                                            />
                                        </Button>
                                    </a>
                                </div>
                            ) : null}
                        </div>
                        {hospital.isVaccinationCenter || hospital.isPHC ? (
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                }}
                            >
                                <div
                                    className="app-card-vaccine-info"
                                    style={{ width: "fit-content" }}
                                >
                                    <div className="flex-row">
                                        {/* <Avatar
                                            src="injection.png"
                                            variant="square"
                                            style={{
                                                width: "1.5rem",
                                                height: "1.5rem",
                                                marginRight: "0.5rem",
                                            }}
                                        /> */}
                                        <h3>Vaccine Information : </h3>
                                    </div>
                                    <p>
                                        Covishield : {hospital.covishield} Doses
                                    </p>
                                    <p>Covaxin : {hospital.covaxin} Doses</p>
                                    <p>
                                        Remedesivir : {hospital.remedesivir}{" "}
                                        Doses
                                    </p>
                                </div>
                                {hospital.location ? (
                                    <div
                                        style={{
                                            width: "fit-content",
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "flex-end",
                                        }}
                                        onClick={() => setShow(true)}
                                    >
                                        <a
                                            style={{
                                                textDecoration: "none",
                                                color: "white",
                                            }}
                                            href={`https://www.google.com/maps/place/${hospital.location.latitude}+${hospital.location.longitude}`}
                                        >
                                            <Button
                                                color="primary"
                                                variant="contained"
                                                style={{
                                                    backgroundColor: "#4285F4",
                                                    borderRadius: "4rem",
                                                }}
                                            >
                                                Navigate
                                                <NavigationIcon
                                                    style={{ color: "white" }}
                                                />
                                            </Button>
                                        </a>
                                    </div>
                                ) : null}
                            </div>
                        ) : null}
                    </div>
                ) : null}
            </div>
        </div>
    )
}

export default Hospital
