import React, { useEffect, useState } from "react"
import fire from "../Config/fire"
function GeoTest() {
    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)
    // const [hospitals, setHospitals] = useState([])
    // const google = window.google
    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords
                setLatitude(latitude)
                setLongitude(longitude)
                // const lat = latitude * (22 / 7 / 180)
                // const lng = longitude * (22 / 7 / 180)
                fire.firestore()
                    .collection("hospitals")
                    .onSnapshot((snapshot) => {
                        snapshot.forEach((doc) => {
                            // console.log(doc.data().location)
                        })
                    })
            },
            (err) => {
                alert(err.message)
            },
            {
                maximumAge: 1000,
                timeout: 500,
                enableHighAccuracy: true,
                altitudeAccuracy: true,
            }
        )
    }, [])

    return (
        <div>
            <h1>Hell</h1>
            <a
                href={`https://www.google.com/maps/place/${latitude}+${longitude}`}
            >
                Go
            </a>
            {navigator.userAgentData.mobile ? <p>Mobile</p> : <p>desktop</p>}
        </div>
    )
}

export default GeoTest
