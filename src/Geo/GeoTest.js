import { Button, TextField, Typography } from "@material-ui/core"
import React, { useEffect, useState } from "react"
import fire from "../Config/fire"
function GeoTest() {
    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)
    const [admin, setAdmin] = useState("")
    const [beds, setBeds] = useState(0)
    const [updateStatus, setUpdateStatus] = useState("")
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

    const getAdmin = () => {
        fire.firestore()
            .collection("adminData")
            .doc("admin@gmail.com")
            .get()
            .then((doc) => {
                if (doc.exists) {
                    setAdmin(doc.data().email)
                } else {
                    alert("doc not found")
                }
            })
            .catch((err) => setAdmin(err.message))
    }
    const updateBeds = () => {
        fire.firestore()
            .collection("hospitals")
            .doc("bajaj@gmail.com")
            .update({ "beds.available": beds })
            .then(() => {
                setUpdateStatus("Doc updated successfully")
            })
            .catch((err) => setUpdateStatus(err.message))
    }

    return (
        <div>
            <h1>Hell</h1>
            <a
                href={`https://www.google.com/maps/place/${latitude}+${longitude}`}
            >
                Go
            </a>
            {navigator.userAgentData.mobile ? <p>Mobile</p> : <p>desktop</p>}
            <br />
            <p>{admin}</p>
            <Button onClick={() => getAdmin()}>get Admin Data</Button>
            <br />
            <Typography paragraph> {updateStatus}</Typography>
            <TextField
                style={{ width: "40vw", padding: "20px" }}
                type="number"
                InputProps={{ inputProps: { min: 0, max: 1000 } }}
                value={beds}
                placeholder="Enter Beds"
                onChange={(e) => setBeds(e.target.value)}
            />
            <Button onClick={updateBeds}>Update Beds</Button>
        </div>
    )
}

export default GeoTest
