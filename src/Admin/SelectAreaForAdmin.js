import React from "react"
import "../SelectArea.css"
import MandalSelector from "../Mandals/MandalSelector"
import DistrictsForAdmin from "./DistrictsForAdmin"
function SelectAreaForAdmin(props) {
    const { mandal, setMandal, district, setDistrict, filter, setFilter } =
        props
    return (
        <div className="selectarea-cont">
            <center className="select-area-h2">
                <h2>Select an area</h2>
            </center>
            <DistrictsForAdmin district={district} setDistrict={setDistrict} />
            <MandalSelector
                district={district}
                mandal={mandal}
                setMandal={setMandal}
            />
        </div>
    )
}

export default SelectAreaForAdmin
