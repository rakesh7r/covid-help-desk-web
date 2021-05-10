import React from "react"
import "./SelectArea.css"
import Distircts from "./Distircts"
import MandalSelector from "./Mandals/MandalSelector"
import { Checkbox } from "@material-ui/core"
function SelectArea(props) {
    const {
        mandal,
        setMandal,
        district,
        setDistrict,
        searchPHC,
        searchCovaxin,
        searchCovishield,
        searchRemedesivir,
        setSearchPHC,
        setSearchCovaxin,
        setSearchCovishield,
        setsearchRemedesivir,
        searchVaccinationCentre,
        setSearchVaccinationCentre,
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
                <Checkbox
                    color="primary"
                    value={searchPHC}
                    onChange={() => setSearchPHC(!searchPHC)}
                    style={{ width: "10px" }}
                    inputProps={{ "aria-label": "secondary checkbox" }}
                />
                Primary Health Care Centre
            </div>
            <div className="card-checkbox-cont">
                <Checkbox
                    color="primary"
                    value={searchVaccinationCentre}
                    onChange={() =>
                        setSearchVaccinationCentre((prevState) => !prevState)
                    }
                    style={{ width: "10px" }}
                    inputProps={{ "aria-label": "secondary checkbox" }}
                />
                Vaccination Centre
            </div>

            <div className="card-checkbox-cont">
                <Checkbox
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
                Remedesivir
            </div>
        </div>
    )
}

export default SelectArea
