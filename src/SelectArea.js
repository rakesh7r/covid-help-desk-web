import React from "react"
import "./SelectArea.css"
import Distircts from "./Distircts"
import MandalSelector from "./Mandals/MandalSelector"
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core"
function SelectArea(props) {
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
            {/* <div className="card-checkbox-cont"> */}
            <div>
                {" "}
                {/* <Checkbox
                    color="primary"
                    value={searchCovaxin}
                    onChange={() => setSearchCovaxin((prevState) => !prevState)}
                    style={{ width: "10px" }}
                    inputProps={{ "aria-label": "secondary checkbox" }}
                />
                Covaxin
            </div>
            <div className="card-checkbox-cont">
                <Checkbox
                    color="primary"
                    value={searchCovishield}
                    onChange={() =>
                        setSearchCovishield((prevState) => !prevState)
                    }
                    style={{ width: "10px" }}
                    inputProps={{ "aria-label": "secondary checkbox" }}
                />
                Covishield
            </div>
            <div className="card-checkbox-cont">
                <Checkbox
                    color="primary"
                    value={searchRemedesivir}
                    onChange={() =>
                        setsearchRemedesivir((prevState) => !prevState)
                    }
                    style={{ width: "10px" }}
                    inputProps={{ "aria-label": "secondary checkbox" }}
                />
                Remedesivir */}
            </div>
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
                    <MenuItem value="beds">Search for Beds</MenuItem>
                    <MenuItem value="ventilators">ventilators</MenuItem>
                    <MenuItem value="vaccinations">Vaccination Center</MenuItem>
                    <MenuItem value="private">Private Hospitals</MenuItem>
                    <MenuItem value="govt">Government Hospitals</MenuItem>
                    <MenuItem value="covaxin">Covaxin</MenuItem>
                    <MenuItem value="covishield">Covishield</MenuItem>
                    <MenuItem value="remedesivir">Remedesivir</MenuItem>
                </Select>
            </FormControl>
            {/* 
                <FormControl component="fieldset" style={{ width: "100%" }}>
                    <FormLabel component="legend">Apply a Filter</FormLabel>
                    <RadioGroup
                        aria-label="Filter"
                        name="Filter"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        <FormControlLabel
                            value="covaxin"
                            control={<Radio />}
                            label="Covaxin"
                        />
                        <FormControlLabel
                            value="covishield"
                            control={<Radio />}
                            label="Covishield"
                        />
                        <FormControlLabel
                            value="remedesivir"
                            control={<Radio />}
                            label="Remedesivir"
                        />
                    </RadioGroup>
                    <div className="card-clear-filter">
                        <Button
                            onClick={() => {
                                setFilter("")
                            }}
                            width={{ width: "100%" }}
                        >
                            Clear Filter
                        </Button>
                    </div>
                </FormControl> */}
            {/* </div> */}
        </div>
    )
}

export default SelectArea
