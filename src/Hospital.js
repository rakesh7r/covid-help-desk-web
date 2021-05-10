import React, { useState } from "react"
import OxygenLogo from "./OxygenLogo"
import HotelIcon from "@material-ui/icons/Hotel"
import "./Hospital.css"
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
                <h2>{hospital.name}</h2>
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
                        <div className="flex-row hospital-vac-phc">
                            {hospital.isPHC && hospital.isPHC === true ? (
                                <span>Primary Health Care Center</span>
                            ) : null}
                            {hospital.isVaccinationCenter &&
                            hospital.isVaccinationCenter === true ? (
                                <span>Vaccination Centre</span>
                            ) : null}
                        </div>
                        <div className="hospital-vaccine">
                            {hospital.vaccine &&
                            hospital.vaccine.covaxin > 0 ? (
                                <p>Covaxin : Available</p>
                            ) : (
                                <p>Covaxin : Unavailable</p>
                            )}
                            {hospital.vaccine &&
                            hospital.vaccine.covishield > 0 ? (
                                <p>Covishield : Available</p>
                            ) : (
                                <p>Covishield : Unavailable</p>
                            )}
                            {hospital.vaccine &&
                            hospital.vaccine.remedesivir > 0 ? (
                                <p>Remedesivir : Available</p>
                            ) : (
                                <p>Remedesivir : Unavailable</p>
                            )}
                        </div>
                    </div>
                )}
                {show ? (
                    <div>
                        <br />
                        <h2>
                            <OxygenLogo /> Oxygen{" "}
                        </h2>
                        <p>Available(in ltrs): {hospital.oxygen.Available}</p>
                        <p>might last for {hospital.oxygen.lastsFor} days</p>
                        <br />
                        <h2>
                            <HotelIcon /> Covid-19 Beds
                        </h2>
                        <p>Available Beds: {hospital.beds.available}</p>
                        <p>Total Beds : {hospital.beds.total}</p>
                        <br />
                        <h2>Ventilators Available : {hospital.ventilators}</h2>
                        <br />
                        <h3>Total Patients : {hospital.totalPatients}</h3>
                        <h3>Total Deaths : {hospital.patients.deaths}</h3>
                        <h3>discharged : {hospital.patients.discharged}</h3>
                        <h3>Recovered : {hospital.patients.recovered}</h3>
                        <h3>
                            Positive Cases Today : {hospital.patients.positive}
                        </h3>
                    </div>
                ) : null}
            </div>
        </div>
    )
}

export default Hospital
