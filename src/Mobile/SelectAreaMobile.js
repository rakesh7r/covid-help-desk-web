import React, { useEffect, useState } from "react"
import $ from "jquery"
import Districts from "../Distircts"
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core"
import MandalSelector from "../Mandals/MandalSelector"
function SelectAreaMobile(props) {
    const { mandal, setMandal, district, setDistrict, filter, setFilter } =
        props
    const [dispWidth, setDispWidth] = useState(0)
    useEffect(() => {
        setDispWidth($(window).width())
    }, [])
    return (
        <div style={{ width: dispWidth * 0.7, padding: "10px" }}>
            <center style={{ marginBottom: "1rem" }}>Apply Filter</center>
            <Districts district={district} setDistrict={setDistrict} />
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
