import React, { useState } from "react"
import OxygenLogo from "../OxygenLogo"
import HotelIcon from "@material-ui/icons/Hotel"
import DoneIcon from "@material-ui/icons/Done"
import ClearSharpIcon from "@material-ui/icons/ClearSharp"
import { Avatar, Button, IconButton } from "@material-ui/core"
import DirectionsOutlinedIcon from "@material-ui/icons/DirectionsOutlined"
function MobileCard(props) {
    const { hospital } = props
    const [open, setOpen] = useState(false)
    const headingColor = "black"
    const textColor = "#4f4f4f"
    return (
        <div
            key={hospital.id}
            onClick={() => {
                setOpen(!open)
            }}
            style={{
                marginBottom: "0.7rem",
                border: "0.5px solid #ccc",
                padding: "0.7rem",
                borderRadius: "3px",
                color: textColor,
                fontSize: "0.9rem",
            }}
        >
            <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p style={{ fontSize: "1.1rem", color: headingColor }}>
                    {hospital.name}
                </p>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "center",
                        fontSize: "0.8rem",
                        fontWeight: "600",
                    }}
                >
                    {hospital.isVaccinationCenter || hospital.isPHC ? (
                        <p
                            style={{
                                color: "#20aaea",
                            }}
                        >
                            Vaccination Center
                        </p>
                    ) : null}
                    {hospital.isPrivate ? (
                        <p
                            style={{
                                color: "red",
                            }}
                        >
                            Private Hospital
                        </p>
                    ) : (
                        <p
                            style={{
                                color: "green",
                                fontSize: "0.8rem",
                                fontWeight: "600",
                            }}
                        >
                            Government Hospital
                        </p>
                    )}
                </div>
            </div>
            <div style={{ display: "flex" }}>
                <p style={{ marginRight: "1.2rem" }}>
                    Mandal : {hospital.mandal}
                </p>
                <p>District : {hospital.district}</p>
            </div>
            {open ? (
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                    }}
                >
                    <div style={{ marginTop: "0.7rem" }}>
                        <p>Beds : {hospital.beds.available}</p>
                        <p>Oxygen : {hospital.oxygen.Available}</p>
                        <p>Ventilators : {hospital.ventilators}</p>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            marginTop: "0.8rem",
                            justifyContent: "space-between",
                        }}
                    >
                        <div
                            style={{
                                width: "fit-content",
                            }}
                        >
                            <h4>On {hospital.date}</h4>
                            <p>Total Patients : {hospital.totalPatients}</p>
                            <p>Total Deaths : {hospital.patients.deaths}</p>
                            <p>discharged : {hospital.patients.discharged}</p>
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
                            >
                                <a
                                    href={`https://www.google.com/maps/place/${hospital.location.latitude}+${hospital.location.longitude}`}
                                >
                                    <IconButton
                                        style={{
                                            backgroundColor: "#4285F4",
                                        }}
                                    >
                                        <DirectionsOutlinedIcon
                                            style={{ color: "white" }}
                                        />
                                    </IconButton>
                                </a>
                            </div>
                        ) : null}
                    </div>
                    {hospital.isVaccinationCenter || hospital.isPHC ? (
                        <div
                            style={{
                                marginTop: "0.7rem",
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                        >
                            <div
                                style={{
                                    width: "fit-content",
                                }}
                            >
                                <div className="flex-row">
                                    <Avatar
                                        src="injection.png"
                                        variant="square"
                                        style={{
                                            width: "25px",
                                            height: "25px",
                                        }}
                                    />
                                    <h3>Vaccine Information : </h3>
                                </div>
                                <p>Covishield : {hospital.covishield} Doses</p>
                                <p>Covaxin : {hospital.covaxin} Doses</p>
                                <p>
                                    Remedesivir : {hospital.remedesivir} Doses
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
                                >
                                    <a
                                        href={`https://www.google.com/maps/place/${hospital.location.latitude}+${hospital.location.longitude}`}
                                    >
                                        <IconButton
                                            style={{
                                                backgroundColor: "#4285F4",
                                            }}
                                        >
                                            <DirectionsOutlinedIcon
                                                style={{ color: "white" }}
                                            />
                                        </IconButton>
                                    </a>
                                </div>
                            ) : null}
                        </div>
                    ) : null}
                </div>
            ) : (
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        paddingTop: "4px",
                    }}
                >
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            flexDirection: "column",
                        }}
                    >
                        <p
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                marginBottom: "3px",
                            }}
                        >
                            <HotelIcon />
                            <span style={{ marginLeft: "0.4rem" }}>Beds :</span>
                            {hospital.beds.available > 0 ? (
                                <DoneIcon
                                    style={{ fontSize: "19px", color: "green" }}
                                />
                            ) : (
                                <ClearSharpIcon
                                    style={{ fontSize: "19px", color: "red" }}
                                />
                            )}
                        </p>
                        <span
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                marginBottom: "7px",
                            }}
                        >
                            {<OxygenLogo />}Oxygen :
                            {hospital.oxygen.Available > 0 ? (
                                <DoneIcon
                                    style={{ fontSize: "19px", color: "green" }}
                                />
                            ) : (
                                <ClearSharpIcon
                                    style={{ fontSize: "19px", color: "red" }}
                                />
                            )}
                        </span>
                        <p
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                marginBottom: "3px",
                            }}
                        >
                            Ventilators :
                            {hospital.ventilators > 0 ? (
                                <DoneIcon
                                    style={{ fontSize: "19px", color: "green" }}
                                />
                            ) : (
                                <ClearSharpIcon
                                    style={{ fontSize: "19px", color: "red" }}
                                />
                            )}
                        </p>
                    </div>
                    {hospital.isVaccinationCenter || hospital.isPHC ? (
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                flexDirection: "column",
                            }}
                        >
                            <p
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                Covaxin :{" "}
                                {hospital.covaxin > 0 ? (
                                    <DoneIcon
                                        style={{
                                            fontSize: "19px",
                                            color: "green",
                                        }}
                                    />
                                ) : (
                                    <ClearSharpIcon
                                        style={{
                                            fontSize: "19px",
                                            color: "red",
                                        }}
                                    />
                                )}
                            </p>
                            <p
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                Covishield :{" "}
                                {hospital.covishield > 0 ? (
                                    <DoneIcon
                                        style={{
                                            fontSize: "19px",
                                            color: "green",
                                        }}
                                    />
                                ) : (
                                    <ClearSharpIcon
                                        style={{
                                            fontSize: "19px",
                                            color: "red",
                                        }}
                                    />
                                )}
                            </p>
                            <p
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                }}
                            >
                                Remedesivir :{" "}
                                {hospital.remedesivir > 0 ? (
                                    <DoneIcon
                                        style={{
                                            fontSize: "19px",
                                            color: "green",
                                        }}
                                    />
                                ) : (
                                    <ClearSharpIcon
                                        style={{
                                            fontSize: "19px",
                                            color: "red",
                                        }}
                                    />
                                )}
                            </p>
                        </div>
                    ) : null}
                </div>
            )}
        </div>
    )
}

export default MobileCard
