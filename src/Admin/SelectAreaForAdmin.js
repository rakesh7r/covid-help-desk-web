import React from "react"
import "../SelectArea.css"
import Distircts from "../Distircts"
import MandalSelector from "../Mandals/MandalSelector"
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core"
function SelectAreaForAdmin(props) {
    const { mandal, setMandal, district, setDistrict, filter, setFilter } =
        props
    return (
        <div className="selectarea-cont">
            <center className="select-area-h2">
                <h2>Select an area</h2>
            </center>
            <Distircts district={district} setDistrict={setDistrict} />
            <MandalSelector
                district={district}
                mandal={mandal}
                setMandal={setMandal}
            />
            {/* <FormControl variant="outlined" style={{ width: "100%" }}>
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
                    <MenuItem value="beds">Search for Beds</MenuItem>
                    <MenuItem value="ventilators">ventilators</MenuItem>
                    <MenuItem value="vaccinations">Vaccination Center</MenuItem>
                    <MenuItem value="private">Private Hospitals</MenuItem>
                    <MenuItem value="govt">Government Hospitals</MenuItem>
                    <MenuItem value="covaxin">Covaxin</MenuItem>
                    <MenuItem value="covishield">Covishield</MenuItem>
                    <MenuItem value="remedesivir">Remedesivir</MenuItem>
                </Select>
            </FormControl> */}
        </div>
    )
}

export default SelectAreaForAdmin
