import React, { useEffect, useState } from "react"
import $ from "jquery"
import Districts from "../Distircts"
import {
    Button,
    FormControl,
    InputLabel,
    MenuItem,
    Select,
} from "@material-ui/core"
import MandalSelector from "../Mandals/MandalSelector"
import MyLocationOutlinedIcon from "@material-ui/icons/MyLocationOutlined"

function SelectAreaMobile(props) {
    const {
        mandal,
        setMandal,
        district,
        setDistrict,
        filter,
        setFilter,
        getNearerHospitalsDriver,
    } = props
    const [dispWidth, setDispWidth] = useState(0)
    useEffect(() => {
        setDispWidth($(window).width())
    }, [])
    return (
        <div style={{ width: dispWidth * 0.7, padding: "10px" }}>
            <Button
                variant="contained"
                onClick={() => getNearerHospitalsDriver()}
                style={{
                    backgroundColor: "#4285F4",
                    marginBottom: "1rem",
                    color: "white",
                    width: "100%",
                }}
            >
                <MyLocationOutlinedIcon style={{ marginRight: "0.4rem" }} />
                <span>Hospitals under 10km</span>
            </Button>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "1rem",
                }}
            >
                <div
                    style={{
                        height: "0.1px",
                        border: "0.5px solid gray",
                        width: "43%",
                        backgroundColor: "#898989",
                    }}
                />
                <span style={{ margin: "0 0.2rem", color: "#898989" }}>OR</span>
                <div
                    style={{
                        height: "0.1px",
                        border: "0.5px solid #898989",
                        width: "43%",
                        backgroundColor: "gray",
                    }}
                />
            </div>
            <center style={{ marginBottom: "1rem" }}>Apply Filter</center>
            <Districts
                district={district}
                setDistrict={setDistrict}
                setMandal={setMandal}
            />
            <MandalSelector
                district={district}
                mandal={mandal}
                setMandal={setMandal}
            />
            <div></div>
            <FormControl
                variant="outlined"
                // className={classes.formControl}
                style={{ width: "100%" }}
            >
                <InputLabel id="demo-simple-select-outlined-label">
                    Apply A Filter
                </InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    style={{
                        marginBottom: "15px",
                    }}
                    label="Apply a Filter"
                >
                    <MenuItem value="">All</MenuItem>
                    <MenuItem value="beds">Beds</MenuItem>
                    <MenuItem value="oxygen">Oxygen</MenuItem>
                    <MenuItem value="ventilators">ventilators</MenuItem>
                    <MenuItem value="vaccinations">Vaccination Center</MenuItem>
                    <MenuItem value="private">Private Hospitals</MenuItem>
                    <MenuItem value="govt">Government Hospitals</MenuItem>
                    <MenuItem value="covaxin">Covaxin</MenuItem>
                    <MenuItem value="covishield">Covishield</MenuItem>
                    <MenuItem value="remedesivir">Remedesivir</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default SelectAreaMobile
