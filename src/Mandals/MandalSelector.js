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
function MandalSelector(props) {
    const { district, mandal, setMandal } = props
    const classes = useStyles()
    return (
        <div>
            {district === "GHMC" ? (
                <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    style={{ width: "100%" }}
                >
                    <InputLabel id="demo-simple-select-outlined-label">
                        Select Mandal
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={mandal}
                        onChange={(e) => setMandal(e.target.value)}
                        style={{
                            marginBottom: "15px",
                        }}
                        label="Select Mandal"
                    >
                        <MenuItem value="">All </MenuItem>
                        <MenuItem value="Amberpet">Amberpet</MenuItem>
                        <MenuItem value="Asif Nagar">Asif Nagar</MenuItem>
                        <MenuItem value="Bahadurpura">Bahadurpura</MenuItem>
                        <MenuItem value="Bandlaguda">Bandlaguda</MenuItem>
                        <MenuItem value="Charminar">Charminar</MenuItem>
                        <MenuItem value="Golkonda">Golkonda</MenuItem>
                        <MenuItem value="Himayathnagar">Himayathnagar</MenuItem>
                        <MenuItem value="Nampally">Nampally</MenuItem>
                        <MenuItem value="Saidabad">Saidabad </MenuItem>
                        <MenuItem value="Ameerpet">Ameerpet</MenuItem>
                        <MenuItem value="Khairtabad">Khairtabad</MenuItem>
                        <MenuItem value="Marredpally">Marredpally</MenuItem>
                        <MenuItem value="Musheerabad">Musheerabad</MenuItem>
                        <MenuItem value="Secunderabad">Secunderabad</MenuItem>
                        <MenuItem value="Shaikpet">Shaikpet</MenuItem>
                        <MenuItem value="Trimulgherry">Trimulgherry</MenuItem>
                    </Select>
                </FormControl>
            ) : null}
            {district === "Adilabad" ? (
                <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    style={{ width: "100%" }}
                >
                    <InputLabel id="demo-simple-select-outlined-label">
                        Select Mandal
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={mandal}
                        onChange={(e) => setMandal(e.target.value)}
                        style={{
                            marginBottom: "15px",
                        }}
                        label="Select Mandal"
                    >
                        <MenuItem value="">All </MenuItem>
                        <MenuItem value="Adilabad urban">
                            Adilabad (urban)
                        </MenuItem>
                        <MenuItem value="Adilabad rural">
                            Adilabad (rural)
                        </MenuItem>
                        <MenuItem value="Mavala">Mavala</MenuItem>
                        <MenuItem value="Gudihatnoor">Gudihatnoor</MenuItem>
                        <MenuItem value="Bajahatnoor">Bajahatnoor</MenuItem>
                        <MenuItem value="Bela">Bela</MenuItem>
                        <MenuItem value="Boadh">Boadh</MenuItem>
                        <MenuItem value="Jainath">Jainath</MenuItem>
                        <MenuItem value="Indervelly">Indervelly</MenuItem>
                        <MenuItem value="Narnoor">Narnoor</MenuItem>
                        <MenuItem value="Gudiguda">Gudiguda</MenuItem>
                        <MenuItem value="Utnoor">Utnoor</MenuItem>
                    </Select>
                </FormControl>
            ) : null}
            {district === "Bhadradri Kothagudem" ? (
                <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    style={{ width: "100%" }}
                >
                    <InputLabel id="demo-simple-select-outlined-label">
                        Select Mandal
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={mandal}
                        onChange={(e) => setMandal(e.target.value)}
                        style={{
                            marginBottom: "15px",
                        }}
                        label="Select Mandal"
                    >
                        <MenuItem value="">All </MenuItem>
                        <MenuItem value="Kothagudem">Kothagudem</MenuItem>
                        <MenuItem value="Palwancha">Palwancha</MenuItem>
                        <MenuItem value="Tekulapalli">Tekulapalli</MenuItem>
                        <MenuItem value="Yellandu">Yellandu</MenuItem>
                        <MenuItem value="Chandrugonda">Chandrugonda</MenuItem>
                        <MenuItem value="Aswaraopeta">Aswaraopeta</MenuItem>
                        <MenuItem value="Mulakalapalli">Mulakalapalli</MenuItem>
                        <MenuItem value="Dammapeta">Dammapeta</MenuItem>
                        <MenuItem value="Gundala">Gundala</MenuItem>
                        <MenuItem value="Julurpadu">Julurpadu</MenuItem>
                        <MenuItem value="Sujathanagar">Sujathanagar</MenuItem>
                        <MenuItem value="Chunchupalle">Chunchupalle</MenuItem>
                        <MenuItem value="Laxmidevipalli">
                            Laxmidevipalli
                        </MenuItem>
                        <MenuItem value="Allapalli">Allapalli</MenuItem>
                        <MenuItem value="Annapureddypalli">
                            Annapureddypalli{" "}
                        </MenuItem>
                        <MenuItem value="Bhadrachalam">Bhadrachalam</MenuItem>
                        <MenuItem value="Dummugudem">Dummugudem</MenuItem>
                        <MenuItem value="Cherla">Cherla</MenuItem>
                        <MenuItem value="Burgampahad">Burgampahad</MenuItem>
                        <MenuItem value="Aswapuram">Aswapuram</MenuItem>
                        <MenuItem value="Manuguru">Manuguru</MenuItem>
                        <MenuItem value="Pinapaka">Pinapaka</MenuItem>
                        <MenuItem value="Karakagudem">Karakagudem</MenuItem>
                    </Select>
                </FormControl>
            ) : null}
            {district === "Jayashankar Bhupalapally" ? (
                <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    style={{ width: "100%" }}
                >
                    <InputLabel id="demo-simple-select-outlined-label">
                        Select Mandal
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={mandal}
                        onChange={(e) => setMandal(e.target.value)}
                        style={{
                            marginBottom: "15px",
                        }}
                        label="Select Mandal"
                    >
                        <MenuItem value="">All </MenuItem>
                        <MenuItem value="Bhupalpalle">Bhupalpalle</MenuItem>
                        <MenuItem value="Chityal">Chityal</MenuItem>
                        <MenuItem value="Ghanpur">Ghanpur</MenuItem>
                        <MenuItem value="Kataram">Kataram</MenuItem>
                        <MenuItem value="Mahadevpur">Mahadevpur</MenuItem>
                        <MenuItem value="Maha">Maha Mutharam</MenuItem>
                        <MenuItem value="Malharrao">Malharrao</MenuItem>
                        <MenuItem value="Mogullapalle">Mogullapalle</MenuItem>
                        <MenuItem value="Palimela">Palimela</MenuItem>
                        <MenuItem value="Regonda">Regonda</MenuItem>
                        <MenuItem value="Tekumatla">Tekumatla</MenuItem>
                        <MenuItem value="mulugu">
                            Mulugu revenue division{" "}
                        </MenuItem>
                        <MenuItem value="Eturunagaram">Eturunagaram</MenuItem>
                        <MenuItem value="Govindaraopet">Govindaraopet</MenuItem>
                        <MenuItem value="Mangapet">Mangapet</MenuItem>
                        <MenuItem value="Mulug">Mulug</MenuItem>
                        <MenuItem value="Tadvai">Tadvai</MenuItem>
                        <MenuItem value="Vajedu">Vajedu</MenuItem>
                        <MenuItem value="Venkatapur">Venkatapur</MenuItem>
                        <MenuItem value="Kannaigudem">Kannaigudem</MenuItem>
                    </Select>
                </FormControl>
            ) : null}
            {district === "Jogulamba Gadwal" ? (
                <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    style={{ width: "100%" }}
                >
                    <InputLabel id="demo-simple-select-outlined-label">
                        Select Mandal
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={mandal}
                        onChange={(e) => setMandal(e.target.value)}
                        style={{
                            marginBottom: "15px",
                        }}
                        label="Select Mandal"
                    >
                        <MenuItem value="">All </MenuItem>
                    </Select>
                </FormControl>
            ) : null}
            {district === "Jagital" ? (
                <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    style={{ width: "100%" }}
                >
                    <InputLabel id="demo-simple-select-outlined-label">
                        Select Mandal
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={mandal}
                        onChange={(e) => setMandal(e.target.value)}
                        style={{
                            marginBottom: "15px",
                        }}
                        label="Select Mandal"
                    >
                        <MenuItem value="">All </MenuItem>
                        <MenuItem value="Jagitial urban">
                            Jagitial(urban)
                        </MenuItem>
                        <MenuItem value="Jagitial rural">
                            Jagitial(rural)
                        </MenuItem>
                        <MenuItem value="Raikal">Raikal</MenuItem>
                        <MenuItem value="Sarangapur">Sarangapur</MenuItem>
                        <MenuItem value="Beerpur">Beerpur</MenuItem>
                        <MenuItem value="Dharmapuri">Dharmapuri</MenuItem>
                        <MenuItem value="Buggaram">Buggaram</MenuItem>
                        <MenuItem value="Pegadapalli">Pegadapalli</MenuItem>
                        <MenuItem value="Gollapalli">Gollapalli</MenuItem>
                        <MenuItem value="Mallial">Mallial</MenuItem>
                        <MenuItem value="Kodimial">Kodimial</MenuItem>
                        <MenuItem value="Velgatur">Velgatur </MenuItem>
                        <MenuItem value="Korutla">Korutla</MenuItem>
                        <MenuItem value="Metpalli">Metpalli</MenuItem>
                        <MenuItem value="Mallapur">Mallapur</MenuItem>
                        <MenuItem value="Ibrahimpatnam">Ibrahimpatnam</MenuItem>
                        <MenuItem value="Medipalli">Medipalli</MenuItem>
                        <MenuItem value="Kathlapur">Kathlapur</MenuItem>
                    </Select>
                </FormControl>
            ) : null}
            {district === "Jangaon" ? (
                <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    style={{ width: "100%" }}
                >
                    <InputLabel id="demo-simple-select-outlined-label">
                        Select Mandal
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={mandal}
                        onChange={(e) => setMandal(e.target.value)}
                        style={{
                            marginBottom: "15px",
                        }}
                        label="Select Mandal"
                    >
                        <MenuItem value="">All </MenuItem>
                        <MenuItem value="Bachannapeta">Bachannapeta</MenuItem>
                        <MenuItem value="Devaruppala">Devaruppala</MenuItem>
                        <MenuItem value="Gundala">Gundala</MenuItem>
                        <MenuItem value="Jangaon">Jangaon</MenuItem>
                        <MenuItem value="Lingalaghanpur">
                            Lingalaghanpur
                        </MenuItem>
                        <MenuItem value="Narmetta">Narmetta</MenuItem>
                        <MenuItem value="Raghunathapalle">
                            Raghunathapalle
                        </MenuItem>
                        <MenuItem value="Tarigoppula">Tarigoppula </MenuItem>
                        <MenuItem value="Chilpur">Chilpur</MenuItem>
                        <MenuItem value="Zaffergadh">Zaffergadh</MenuItem>
                        <MenuItem value="Kodakandla">Kodakandla</MenuItem>
                        <MenuItem value="Palakurthi">Palakurthi</MenuItem>
                        <MenuItem value="Station">Station Ghanpur</MenuItem>
                    </Select>
                </FormControl>
            ) : null}
            {district === "Kamareddy" ? (
                <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    style={{ width: "100%" }}
                >
                    <InputLabel id="demo-simple-select-outlined-label">
                        Select Mandal
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={mandal}
                        onChange={(e) => setMandal(e.target.value)}
                        style={{
                            marginBottom: "15px",
                        }}
                        label="Select Mandal"
                    >
                        <MenuItem value="">All </MenuItem>
                    </Select>
                </FormControl>
            ) : null}
            {district === "Karimnagar" ? (
                <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    style={{ width: "100%" }}
                >
                    <InputLabel id="demo-simple-select-outlined-label">
                        Select Mandal
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={mandal}
                        onChange={(e) => setMandal(e.target.value)}
                        style={{
                            marginBottom: "15px",
                        }}
                        label="Select Mandal"
                    >
                        <MenuItem value="">All </MenuItem>
                    </Select>
                </FormControl>
            ) : null}
            {district === "Khammam" ? (
                <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    style={{ width: "100%" }}
                >
                    <InputLabel id="demo-simple-select-outlined-label">
                        Select Mandal
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={mandal}
                        onChange={(e) => setMandal(e.target.value)}
                        style={{
                            marginBottom: "15px",
                        }}
                        label="Select Mandal"
                    >
                        <MenuItem value="">All </MenuItem>
                    </Select>
                </FormControl>
            ) : null}
            {district === "Komaram Bheem Asifabad" ? (
                <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    style={{ width: "100%" }}
                >
                    <InputLabel id="demo-simple-select-outlined-label">
                        Select Mandal
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={mandal}
                        onChange={(e) => setMandal(e.target.value)}
                        style={{
                            marginBottom: "15px",
                        }}
                        label="Select Mandal"
                    >
                        <MenuItem value="">All </MenuItem>
                    </Select>
                </FormControl>
            ) : null}
            {district === "Mahbubabad" ? (
                <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    style={{ width: "100%" }}
                >
                    <InputLabel id="demo-simple-select-outlined-label">
                        Select Mandal
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={mandal}
                        onChange={(e) => setMandal(e.target.value)}
                        style={{
                            marginBottom: "15px",
                        }}
                        label="Select Mandal"
                    >
                        <MenuItem value="">All </MenuItem>
                    </Select>
                </FormControl>
            ) : null}
            {district === "Mancherial" ? (
                <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    style={{ width: "100%" }}
                >
                    <InputLabel id="demo-simple-select-outlined-label">
                        Select Mandal
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={mandal}
                        onChange={(e) => setMandal(e.target.value)}
                        style={{
                            marginBottom: "15px",
                        }}
                        label="Select Mandal"
                    >
                        <MenuItem value="">All </MenuItem>
                        <MenuItem value="Chennur">Chennur</MenuItem>
                        <MenuItem value="Jaipur">Jaipur</MenuItem>
                        <MenuItem value="Bheemaram">Bheemaram</MenuItem>
                        <MenuItem value="Kotapally">Kotapally</MenuItem>
                        <MenuItem value="Luxettipet">Luxettipet</MenuItem>
                        <MenuItem value="Mancherial">Mancherial</MenuItem>
                        <MenuItem value="Naspur">Naspur</MenuItem>
                        <MenuItem value="Hajipur">Hajipur</MenuItem>
                        <MenuItem value="Mandamarri">Mandamarri</MenuItem>
                        <MenuItem value="Dandepally">Dandepally</MenuItem>
                        <MenuItem value="Jannaram">Jannaram </MenuItem>
                        <MenuItem value="Kasipet">Kasipet</MenuItem>
                        <MenuItem value="Bellampally">
                            Bellampally Mandal
                        </MenuItem>
                        <MenuItem value="Vempally">Vempally</MenuItem>
                        <MenuItem value="Nennel">Nennel</MenuItem>
                        <MenuItem value="Tandur">Tandur</MenuItem>
                        <MenuItem value="Bheemini">Bheemini</MenuItem>
                        <MenuItem value="Kannepally">Kannepally</MenuItem>
                    </Select>
                </FormControl>
            ) : null}
            {district === "Mahbubnagar" ? (
                <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    style={{ width: "100%" }}
                >
                    <InputLabel id="demo-simple-select-outlined-label">
                        Select Mandal
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={mandal}
                        onChange={(e) => setMandal(e.target.value)}
                        style={{
                            marginBottom: "15px",
                        }}
                        label="Select Mandal"
                    >
                        <MenuItem value="">All </MenuItem>
                    </Select>
                </FormControl>
            ) : null}
            {district === "Medak" ? (
                <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    style={{ width: "100%" }}
                >
                    <InputLabel id="demo-simple-select-outlined-label">
                        Select Mandal
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={mandal}
                        onChange={(e) => setMandal(e.target.value)}
                        style={{
                            marginBottom: "15px",
                        }}
                        label="Select Mandal"
                    >
                        <MenuItem value="">All </MenuItem>
                    </Select>
                </FormControl>
            ) : null}
            {district === "Medchal" ? (
                <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    style={{ width: "100%" }}
                >
                    <InputLabel id="demo-simple-select-outlined-label">
                        Select Mandal
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={mandal}
                        onChange={(e) => setMandal(e.target.value)}
                        style={{
                            marginBottom: "15px",
                        }}
                        label="Select Mandal"
                    >
                        <MenuItem value="">All </MenuItem>
                        <MenuItem value="Alwal">Alwal</MenuItem>
                        <MenuItem value="Bachupally">Bachupally</MenuItem>
                        <MenuItem value="Balanagar">Balanagar</MenuItem>
                        <MenuItem value="Dundigal">Dundigal</MenuItem>
                        <MenuItem value="Kukatpally">Kukatpally</MenuItem>
                        <MenuItem value="Malkajgiri">Malkajgiri</MenuItem>
                        <MenuItem value="Quthbullapur">Quthbullapur</MenuItem>
                        <MenuItem value="Ghatkesar">Ghatkesar</MenuItem>
                        <MenuItem value="Kapra">Kapra</MenuItem>
                        <MenuItem value="Keesara">Keesara</MenuItem>
                        <MenuItem value="Medchal">Medchal</MenuItem>
                        <MenuItem value="Medipally">Medipally</MenuItem>
                        <MenuItem value="Shamirpet">Shamirpet</MenuItem>
                        <MenuItem value="Uppal">Uppal</MenuItem>
                    </Select>
                </FormControl>
            ) : null}
            {district === "Mulugu" ? (
                <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    style={{ width: "100%" }}
                >
                    <InputLabel id="demo-simple-select-outlined-label">
                        Select Mandal
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={mandal}
                        onChange={(e) => setMandal(e.target.value)}
                        style={{
                            marginBottom: "15px",
                        }}
                        label="Select Mandal"
                    >
                        <MenuItem value="">All </MenuItem>
                    </Select>
                </FormControl>
            ) : null}
            {district === "Nagarkurnool" ? (
                <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    style={{ width: "100%" }}
                >
                    <InputLabel id="demo-simple-select-outlined-label">
                        Select Mandal
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={mandal}
                        onChange={(e) => setMandal(e.target.value)}
                        style={{
                            marginBottom: "15px",
                        }}
                        label="Select Mandal"
                    >
                        <MenuItem value="">All </MenuItem>
                    </Select>
                </FormControl>
            ) : null}
            {district === "Nalgonda" ? (
                <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    style={{ width: "100%" }}
                >
                    <InputLabel id="demo-simple-select-outlined-label">
                        Select Mandal
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={mandal}
                        onChange={(e) => setMandal(e.target.value)}
                        style={{
                            marginBottom: "15px",
                        }}
                        label="Select Mandal"
                    >
                        <MenuItem value="">All </MenuItem>
                    </Select>
                </FormControl>
            ) : null}
            {district === "Narayanpet" ? (
                <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    style={{ width: "100%" }}
                >
                    <InputLabel id="demo-simple-select-outlined-label">
                        Select Mandal
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={mandal}
                        onChange={(e) => setMandal(e.target.value)}
                        style={{
                            marginBottom: "15px",
                        }}
                        label="Select Mandal"
                    >
                        <MenuItem value="">All </MenuItem>
                    </Select>
                </FormControl>
            ) : null}
            {district === "Nirmal" ? (
                <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    style={{ width: "100%" }}
                >
                    <InputLabel id="demo-simple-select-outlined-label">
                        Select Mandal
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={mandal}
                        onChange={(e) => setMandal(e.target.value)}
                        style={{
                            marginBottom: "15px",
                        }}
                        label="Select Mandal"
                    >
                        <MenuItem value="">All </MenuItem>
                    </Select>
                </FormControl>
            ) : null}
            {district === "Nizamabad" ? (
                <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    style={{ width: "100%" }}
                >
                    <InputLabel id="demo-simple-select-outlined-label">
                        Select Mandal
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={mandal}
                        onChange={(e) => setMandal(e.target.value)}
                        style={{
                            marginBottom: "15px",
                        }}
                        label="Select Mandal"
                    >
                        <MenuItem value="">All </MenuItem>
                    </Select>
                </FormControl>
            ) : null}
            {district === "Pedapally" ? (
                <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    style={{ width: "100%" }}
                >
                    <InputLabel id="demo-simple-select-outlined-label">
                        Select Mandal
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={mandal}
                        onChange={(e) => setMandal(e.target.value)}
                        style={{
                            marginBottom: "15px",
                        }}
                        label="Select Mandal"
                    >
                        <MenuItem value="">All </MenuItem>
                    </Select>
                </FormControl>
            ) : null}
            {district === "Rangareddy" ? (
                <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    style={{ width: "100%" }}
                >
                    <InputLabel id="demo-simple-select-outlined-label">
                        Select Mandal
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={mandal}
                        onChange={(e) => setMandal(e.target.value)}
                        style={{
                            marginBottom: "15px",
                        }}
                        label="Select Mandal"
                    >
                        <MenuItem value="">All </MenuItem>
                    </Select>
                </FormControl>
            ) : null}
            {district === "Sangareddy" ? (
                <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    style={{ width: "100%" }}
                >
                    <InputLabel id="demo-simple-select-outlined-label">
                        Select Mandal
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={mandal}
                        onChange={(e) => setMandal(e.target.value)}
                        style={{
                            marginBottom: "15px",
                        }}
                        label="Select Mandal"
                    >
                        <MenuItem value="">All </MenuItem>
                        <MenuItem value="Kalher">Kalher</MenuItem>
                        <MenuItem value="Kangti">Kangti</MenuItem>
                        <MenuItem value="Manoor">Manoor</MenuItem>
                        <MenuItem value="Nagilgidda">Nagilgidda</MenuItem>
                        <MenuItem value="Narayankhed">Narayankhed</MenuItem>
                        <MenuItem value="Sirgapoor">Sirgapoor</MenuItem>
                        <MenuItem value="Ameenpur">Ameenpur</MenuItem>
                        <MenuItem value="Andole">Andole</MenuItem>
                        <MenuItem value="Gummadidala">Gummadidala</MenuItem>
                        <MenuItem value="Hathnoora">Hathnoora</MenuItem>
                        <MenuItem value="Jinnaram">Jinnaram</MenuItem>
                        <MenuItem value="Kandi">Kandi</MenuItem>
                        <MenuItem value="Kondapur">Kondapur</MenuItem>
                        <MenuItem value="Munipally">Munipally</MenuItem>
                        <MenuItem value="Patancheru">Patancheru</MenuItem>
                        <MenuItem value="Pulkal">Pulkal</MenuItem>
                        <MenuItem value="Ramchandrapuram">
                            Ramchandrapuram
                        </MenuItem>
                        <MenuItem value="Sadasivpet">Sadasivpet</MenuItem>
                        <MenuItem value="Sangareddy">Sangareddy</MenuItem>
                        <MenuItem value="Vatpally">Vatpally</MenuItem>
                        <MenuItem value="Jharasangam">Jharasangam</MenuItem>
                        <MenuItem value="Kohir">Kohir</MenuItem>
                        <MenuItem value="Mogudampally">Mogudampally</MenuItem>
                        <MenuItem value="Nyalkal">Nyalkal</MenuItem>
                        <MenuItem value="Raikode">Raikode</MenuItem>
                        <MenuItem value="Zaheerabad">Zaheerabad</MenuItem>
                    </Select>
                </FormControl>
            ) : null}
            {district === "Siddipet" ? (
                <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    style={{ width: "100%" }}
                >
                    <InputLabel id="demo-simple-select-outlined-label">
                        Select Mandal
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={mandal}
                        onChange={(e) => setMandal(e.target.value)}
                        style={{
                            marginBottom: "15px",
                        }}
                        label="Select Mandal"
                    >
                        <MenuItem value="">All </MenuItem>
                        <MenuItem value="Siddipet urban">
                            Siddipet(Urban)
                        </MenuItem>
                        <MenuItem value="Siddipet rural">
                            Siddipet (Rural)
                        </MenuItem>
                        <MenuItem value="Nangnoor">Nangnoor</MenuItem>
                        <MenuItem value="Chinnakodur">Chinnakodur</MenuItem>
                        <MenuItem value="Thoguta">Thoguta</MenuItem>
                        <MenuItem value="Doultabad">Doultabad</MenuItem>
                        <MenuItem value="Mirdoddi">Mirdoddi</MenuItem>
                        <MenuItem value="Dubbak">Dubbak</MenuItem>
                        <MenuItem value="Cherial">Cherial</MenuItem>
                        <MenuItem value="Komuravelli">Komuravelli </MenuItem>
                        <MenuItem value="Gajwel">Gajwel</MenuItem>
                        <MenuItem value="Jagdevpur">Jagdevpur</MenuItem>
                        <MenuItem value="Kondapak">Kondapak</MenuItem>
                        <MenuItem value="Mulug">Mulug</MenuItem>
                        <MenuItem value="Markook">Markook</MenuItem>
                        <MenuItem value="Wargal">Wargal</MenuItem>
                        <MenuItem value="Raipole">Raipole </MenuItem>
                        <MenuItem value="Husnabad">Husnabad</MenuItem>
                        <MenuItem value="Akkannapet">Akkannapet</MenuItem>
                        <MenuItem value="Koheda">Koheda</MenuItem>
                        <MenuItem value="Bejjanki">Bejjanki</MenuItem>
                        <MenuItem value="Maddur">Maddur</MenuItem>
                    </Select>
                </FormControl>
            ) : null}
            {district === "Suryapet" ? (
                <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    style={{ width: "100%" }}
                >
                    <InputLabel id="demo-simple-select-outlined-label">
                        Select Mandal
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={mandal}
                        onChange={(e) => setMandal(e.target.value)}
                        style={{
                            marginBottom: "15px",
                        }}
                        label="Select Mandal"
                    >
                        <MenuItem value="">All </MenuItem>
                        <MenuItem value="Atmakur(s)">Atmakur(s)</MenuItem>
                        <MenuItem value="Chivvemla">Chivvemla</MenuItem>
                        <MenuItem value="Jajireddygudem">
                            Jajireddygudem
                        </MenuItem>
                        <MenuItem value="Mothey">Mothey</MenuItem>
                        <MenuItem value="Nuthankal">Nuthankal</MenuItem>
                        <MenuItem value="Penpahad">Penpahad</MenuItem>
                        <MenuItem value="Suryapet">Suryapet</MenuItem>
                        <MenuItem value="Thirumalagiri">Thirumalagiri</MenuItem>
                        <MenuItem value="Thungathurthy">Thungathurthy</MenuItem>
                        <MenuItem value="Garidepally">Garidepally</MenuItem>
                        <MenuItem value="Neredcherla">Neredcherla</MenuItem>
                        <MenuItem value="Nagaram">Nagaram</MenuItem>
                        <MenuItem value="Maddirala">Maddirala</MenuItem>
                        <MenuItem value="Palakeedu">Palakeedu</MenuItem>
                        <MenuItem value="Chilkur">Chilkur</MenuItem>
                        <MenuItem value="Huzurnagar">Huzurnagar</MenuItem>
                        <MenuItem value="Kodad">Kodad</MenuItem>
                        <MenuItem value="Mattampally">Mattampally</MenuItem>
                        <MenuItem value="Mellachervu">Mellachervu</MenuItem>
                        <MenuItem value="Munagala">Munagala</MenuItem>
                        <MenuItem value="Nadigudem">Nadigudem</MenuItem>
                        <MenuItem value="Ananthagiri">Ananthagiri</MenuItem>
                        <MenuItem value="Mallareddygudem">
                            Mallareddygudem
                        </MenuItem>
                    </Select>
                </FormControl>
            ) : null}
            {district === "Rajanna Sircilla" ? (
                <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    style={{ width: "100%" }}
                >
                    <InputLabel id="demo-simple-select-outlined-label">
                        Select Mandal
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={mandal}
                        onChange={(e) => setMandal(e.target.value)}
                        style={{
                            marginBottom: "15px",
                        }}
                        label="Select Mandal"
                    >
                        <MenuItem value="">All </MenuItem>
                    </Select>
                </FormControl>
            ) : null}
            {district === "Vikarabad" ? (
                <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    style={{ width: "100%" }}
                >
                    <InputLabel id="demo-simple-select-outlined-label">
                        Select Mandal
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={mandal}
                        onChange={(e) => setMandal(e.target.value)}
                        style={{
                            marginBottom: "15px",
                        }}
                        label="Select Mandal"
                    >
                        <MenuItem value="">All </MenuItem>
                        <MenuItem value="Basheerabad">Basheerabad</MenuItem>
                        <MenuItem value="Bommaraspet">Bommaraspet</MenuItem>
                        <MenuItem value="Doulthabad">Doulthabad</MenuItem>
                        <MenuItem value="Kodangal">Kodangal</MenuItem>
                        <MenuItem value="Peddemul">Peddemul</MenuItem>
                        <MenuItem value="Tandur">Tandur</MenuItem>
                        <MenuItem value="Yelal">Yelal</MenuItem>
                        <MenuItem value="Doma">Doma</MenuItem>
                        <MenuItem value="Dharur">Dharur</MenuItem>
                        <MenuItem value="Bantwaram">Bantwaram</MenuItem>
                        <MenuItem value="Kulkacherla">Kulkacherla</MenuItem>
                        <MenuItem value="Kotepally">Kotepally</MenuItem>
                        <MenuItem value="Marpalle">Marpalle</MenuItem>
                        <MenuItem value="Mominpet">Mominpet</MenuItem>
                        <MenuItem value="Nawabpet">Nawabpet</MenuItem>
                        <MenuItem value="Pudur">Pudur</MenuItem>
                        <MenuItem value="Pargi">Pargi</MenuItem>
                        <MenuItem value="Vikarabad">Vikarabad</MenuItem>
                    </Select>
                </FormControl>
            ) : null}
            {district === "Wanaparthy" ? (
                <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    style={{ width: "100%" }}
                >
                    <InputLabel id="demo-simple-select-outlined-label">
                        Select Mandal
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={mandal}
                        onChange={(e) => setMandal(e.target.value)}
                        style={{
                            marginBottom: "15px",
                        }}
                        label="Select Mandal"
                    >
                        <MenuItem value="">All </MenuItem>
                    </Select>
                </FormControl>
            ) : null}
            {district === "Warangal Rural" ? (
                <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    style={{ width: "100%" }}
                >
                    <InputLabel id="demo-simple-select-outlined-label">
                        Select Mandal
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={mandal}
                        onChange={(e) => setMandal(e.target.value)}
                        style={{
                            marginBottom: "15px",
                        }}
                        label="Select Mandal"
                    >
                        <MenuItem value="">All </MenuItem>
                        <MenuItem value="Atmakur">Atmakur</MenuItem>
                        <MenuItem value="Damera">Damera</MenuItem>
                        <MenuItem value="Geesugonda">Geesugonda</MenuItem>
                        <MenuItem value="Parkal">Parkal</MenuItem>
                        <MenuItem value="Parvathagiri">Parvathagiri</MenuItem>
                        <MenuItem value="Rayaparthy">Rayaparthy</MenuItem>
                        <MenuItem value="Sangem">Sangem</MenuItem>
                        <MenuItem value="Shayampet">Shayampet</MenuItem>
                        <MenuItem value="Wardhannapet">Wardhannapet</MenuItem>
                        <MenuItem value="Chennaraopet">Chennaraopet</MenuItem>
                        <MenuItem value="Duggondi">Duggondi</MenuItem>
                        <MenuItem value="Khanapur">Khanapur</MenuItem>
                        <MenuItem value="Narsampet">Narsampet</MenuItem>
                        <MenuItem value="Nallabelly">Nallabelly</MenuItem>
                        <MenuItem value="Nekkonda">Nekkonda</MenuItem>
                    </Select>
                </FormControl>
            ) : null}

            {district === "Warangal Urban" ? (
                <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    style={{ width: "100%" }}
                >
                    <InputLabel id="demo-simple-select-outlined-label">
                        Select Mandal
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={mandal}
                        onChange={(e) => setMandal(e.target.value)}
                        style={{
                            marginBottom: "15px",
                        }}
                        label="Select Mandal"
                    >
                        <MenuItem value="">All </MenuItem>
                        <MenuItem value="Bheemadevarpalli">
                            Bheemadevarpalli
                        </MenuItem>
                        <MenuItem value="Dharmasagar">Dharmasagar</MenuItem>
                        <MenuItem value="Elkathurthy">Elkathurthy</MenuItem>
                        <MenuItem value="Inavole">Inavole</MenuItem>
                        <MenuItem value="Hanamkonda">Hanamkonda</MenuItem>
                        <MenuItem value="Hasanparthy">Hasanparthy</MenuItem>
                        <MenuItem value="Kamalapur">Kamalapur</MenuItem>
                        <MenuItem value="Kazipet">Kazipet</MenuItem>
                        <MenuItem value="Khila">Khila Warangal</MenuItem>
                        <MenuItem value="Velair">Velair</MenuItem>
                        <MenuItem value="Warangal">Warangal</MenuItem>
                    </Select>
                </FormControl>
            ) : null}
            {district === "Yadadri Bhuvanagiri" ? (
                <FormControl
                    variant="outlined"
                    className={classes.formControl}
                    style={{ width: "100%" }}
                >
                    <InputLabel id="demo-simple-select-outlined-label">
                        Select Mandal
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={mandal}
                        onChange={(e) => setMandal(e.target.value)}
                        style={{
                            marginBottom: "15px",
                        }}
                        label="Select Mandal"
                    >
                        <MenuItem value="">All </MenuItem>
                        <MenuItem value="Addaguduru">Addaguduru</MenuItem>
                        <MenuItem value="Alair">Alair</MenuItem>
                        <MenuItem value="Atmakur(m)">Atmakur(M)</MenuItem>
                        <MenuItem value="Bibinagar">Bibinagar</MenuItem>
                        <MenuItem value="Bhongir">Bhongir</MenuItem>
                        <MenuItem value="Bommalaramaram">
                            Bommalaramaram
                        </MenuItem>
                        <MenuItem value="Motakondur">Motakondur</MenuItem>
                        <MenuItem value="Mothkur">Mothkur</MenuItem>
                        <MenuItem value="Rajapet">Rajapet</MenuItem>
                        <MenuItem value="Turkapally">Turkapally</MenuItem>
                        <MenuItem value="Yadagirigutta">Yadagirigutta</MenuItem>
                        <MenuItem value="Bhoodan">Bhoodan Pochampally</MenuItem>
                        <MenuItem value="Choutuppal">Choutuppal</MenuItem>
                        <MenuItem value="Narayanpur">Narayanpur</MenuItem>
                        <MenuItem value="Ramannapet">Ramannapet</MenuItem>
                        <MenuItem value="Valigonda">Valigonda</MenuItem>
                    </Select>
                </FormControl>
            ) : null}
        </div>
    )
}

export default MandalSelector
