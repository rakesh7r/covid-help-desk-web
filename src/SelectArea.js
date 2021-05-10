import React from "react"
import "./SelectArea.css"
import Distircts from "./Distircts"
import MandalSelector from "./Mandals/MandalSelector"
import {
    Button,
    Checkbox,
    FormControl,
    FormControlLabel,
    FormLabel,
    Radio,
    RadioGroup,
} from "@material-ui/core"
function SelectArea(props) {
    const {
        mandal,
        setMandal,
        district,
        setDistrict,
        filter,
        setFilter,
    } = props
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
            <div className="card-checkbox-cont">
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
                <FormControl component="fieldset" style={{ width: "100%" }}>
                    <FormLabel component="legend">Apply a Filter</FormLabel>
                    <RadioGroup
                        aria-label="gender"
                        name="gender1"
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
                </FormControl>
            </div>
        </div>
    )
}

export default SelectArea
