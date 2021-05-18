import React, { useEffect, useState } from "react"
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps"

function GeoTest() {
    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)
    useEffect(() => {
        let latitude = 0,
            longitude = 0
        navigator.geolocation.getCurrentPosition((position) => {
            setLatitude(position.coords.latitude)
            setLongitude(position.coords.longitude)
            latitude = position.coords.latitude
            longitude = position.coords.longitude
        })
    }, [])
    return (
        <div>
            <h1>Hell</h1>
        </div>
    )
}

export default GeoTest
