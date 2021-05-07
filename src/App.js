import {
    FormControl,
    InputLabel,
    makeStyles,
    MenuItem,
    Select,
} from "@material-ui/core"
import { useEffect, useState } from "react"
import "./App.css"
import fire from "./Config/fire"
import Hospital from "./Hospital"
import AppDashboard from "./AppDashboard"

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
        width: 500,
        "& > *": {
            margin: theme.spacing(1),
        },
        "& > * + *": {
            marginTop: theme.spacing(2),
        },
    },
}))

function App() {
    const classes = useStyles()
    const [district, setDistrict] = useState("GHMC")
    const [hospitals, setHospitals] = useState([])

    useEffect(() => {
        setHospitals([])
        fire.firestore()
            .collection("hospitals")
            .where("district", "==", district)
            .onSnapshot((docs) => {
                setHospitals([])
                docs.forEach((doc) => {
                    setHospitals((oldArr) => [...oldArr, doc.data()])
                })
            })
    }, [])

    return (
        <div className="App">
            <div className="app-header">
                <h1>Covid-19 Help Desk</h1>
                <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    style={{ width: "150px", color: "white" }}
                >
                    <InputLabel
                        id="demo-simple-select-outlined-label"
                        style={{ color: "white" }}
                    >
                        Select District
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={district}
                        onChange={(e) => {
                            setDistrict(e.target.value)
                        }}
                        style={{
                            marginBottom: "15px",
                            color: "white",
                        }}
                        label="Select District"
                    >
                        <MenuItem value="GHMC">GHMC</MenuItem>
                        <MenuItem value="Adilabad">Adilabad</MenuItem>
                        <MenuItem value="Komaram Bheem Asifabad">
                            Komaram Bheem Asifabad
                        </MenuItem>
                        <MenuItem value="Bhadradri Kothagudem">
                            Bhadradri Kothagudem
                        </MenuItem>
                        <MenuItem value="Jayashankar Bhupalapally">
                            Jayashankar Bhupalapally
                        </MenuItem>
                        <MenuItem value="Jogulamba Gadwal">
                            Jogulamba Gadwal
                        </MenuItem>
                        <MenuItem value="Jagital">Jagital</MenuItem>
                        <MenuItem value="Jangaon">Jangaon</MenuItem>
                        <MenuItem value="Kamareddy">Kamareddy</MenuItem>
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
                        <MenuItem value="Warangal Rural">
                            Warangal Rural
                        </MenuItem>
                        <MenuItem value="Yadadri Bhuvanagiri">
                            Yadadri Bhuvanagiri
                        </MenuItem>
                        <MenuItem value="Warangal Urban">
                            Warangal Urban
                        </MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className="app-main">
                <div className="app-intermediate">
                    {hospitals.map((hospital) => (
                        <Hospital key={hospital.id} hospital={hospital} />
                    ))}
                </div>
                <div className="app-dashboard">
                    <AppDashboard />
                </div>
            </div>
            <div className="app-footer"></div>
        </div>
    )
}

export default App
