import React, { useState } from "react"
import OxygenLogo from "./OxygenLogo"
import HotelIcon from "@material-ui/icons/Hotel"
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
                    Area : {hospital.area} , Dist : {hospital.district}
                </p>
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
