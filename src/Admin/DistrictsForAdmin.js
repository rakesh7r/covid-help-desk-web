import {
    FormControl,
    InputLabel,
    makeStyles,
    MenuItem,
    Select,
} from "@material-ui/core"
import React from "react"

const useStyles = makeStyles((theme) => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
    root: {
        "& > *": {
            margin: theme.spacing(1),
        },
    },
}))

function Distircts(props) {
    const classes = useStyles()

    return (
        <div>
            <FormControl
                variant="outlined"
                className={classes.formControl}
                style={{ width: "100%" }}
            >
                <InputLabel id="demo-simple-select-outlined-label">
                    Select District
                </InputLabel>
                <Select
                    labelId="demo-simple-select-outlined-label"
                    id="demo-simple-select-outlined"
                    value={props.district}
                    onChange={(e) => props.setDistrict(e.target.value)}
                    style={{
                        marginBottom: "15px",
                    }}
                    label="Select District"
                >
                    <MenuItem value="" text="ALL">
                        All
                    </MenuItem>
                    <MenuItem value="GHMC">Hyderabad</MenuItem>
                    <MenuItem value="Adilabad">Adilabad</MenuItem>
                    <MenuItem value="Bhadradri Kothagudem">
                        Bhadradri Kothagudem
                    </MenuItem>
                    <MenuItem value="Jagital">Jagital</MenuItem>
                    <MenuItem value="Jangaon">Jangaon</MenuItem>
                    <MenuItem value="Jayashankar Bhupalapally">
                        Jayashankar Bhupalapally
                    </MenuItem>
                    <MenuItem value="Jogulamba Gadwal">
                        Jogulamba Gadwal
                    </MenuItem>
                    <MenuItem value="Kamareddy">Kamareddy</MenuItem>
                    <MenuItem value="Komaram Bheem Asifabad">
                        Komaram Bheem Asifabad
                    </MenuItem>
                    <MenuItem value="Karimnagar">Karimnagar</MenuItem>
                    <MenuItem value="Khammam">Khammam</MenuItem>
                    <MenuItem value="Mahbubabad">Mahbubabad</MenuItem>
                    <MenuItem value="Mancherial">Mancherial</MenuItem>
                    <MenuItem value="Mahbubnagar">Mahbubnagar</MenuItem>
                    <MenuItem value="Medak">Medak</MenuItem>
                    <MenuItem value="Medchal">Medchal</MenuItem>
                    <MenuItem value="Mulugu">Mulugu</MenuItem>
                    <MenuItem value="Nagarkurnool">Nagarkurnool</MenuItem>
                    <MenuItem value="Nalgonda">Nalgonda</MenuItem>
                    <MenuItem value="Narayanpet">Narayanpet</MenuItem>
                    <MenuItem value="Nirmal">Nirmal</MenuItem>
                    <MenuItem value="Nizamabad">Nizamabad</MenuItem>
                    <MenuItem value="Pedapally">Pedapally</MenuItem>
                    <MenuItem value="Rangareddy">Rangareddy</MenuItem>
                    <MenuItem value="Sangareddy">Sangareddy</MenuItem>
                    <MenuItem value="Siddipet">Siddipet</MenuItem>
                    <MenuItem value="Suryapet">Suryapet</MenuItem>
                    <MenuItem value="Rajanna Sircilla">
                        Rajanna Sircilla
                    </MenuItem>
                    <MenuItem value="Vikarabad">Vikarabad</MenuItem>
                    <MenuItem value="Wanaparthy">Wanaparthy</MenuItem>
                    <MenuItem value="Warangal Rural">Warangal Rural</MenuItem>
                    <MenuItem value="Yadadri Bhuvanagiri">
                        Yadadri Bhuvanagiri
                    </MenuItem>
                    <MenuItem value="Warangal Urban">Warangal Urban</MenuItem>
                </Select>
            </FormControl>
        </div>
    )
}

export default Distircts
