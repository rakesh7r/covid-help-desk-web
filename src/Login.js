import React, { useState, useEffect } from "react"
import { makeStyles } from "@material-ui/core/styles"
import Modal from "@material-ui/core/Modal"
import Backdrop from "@material-ui/core/Backdrop"
import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { FormControl, InputLabel, MenuItem, Select } from "@material-ui/core"

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

const Login = (props) => {
    const classes = useStyles()
    const [open, setOpen] = useState(true)
    const {
        email,
        password,
        setEmail,
        setPassword,
        handleSignup,
        handleLogin,
        hasAccount,
        setHasAccount,
        emailError,
        passwordError,
        hospitalName,
        hospitalArea,
        hospitalDistrict,
        verifyPassword,
        setHospitalName,
        setHospitalArea,
        setHospitalDistrict,
        setVerifyPassword,
    } = props

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            disableBackdropClick
            BackdropProps={{
                timeout: 500,
            }}
            style={{ width: "100%", height: "100%", borderRadius: "55px" }}
        >
            <div
                className="login-modal-cont"
                style={{
                    width: "30%",
                    backgroundColor: "white",
                    padding: "80px",
                    paddingTop: "30px",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <center>
                    <span className="span-bold">
                        {hasAccount ? (
                            <h1 style={{ marginBottom: "25px" }}>Sign in</h1>
                        ) : (
                            <h1 style={{ marginBottom: "25px" }}>Sign up</h1>
                        )}
                    </span>
                </center>
                {hasAccount ? null : (
                    <TextField
                        id="outlined-basic"
                        label="Hospital Name"
                        variant="outlined"
                        style={{
                            marginBottom: "15px",
                        }}
                        value={hospitalName}
                        onChange={(e) => setHospitalName(e.target.value)}
                    />
                )}
                {hasAccount ? null : (
                    <TextField
                        id="outlined-basic"
                        label="Hospital Area"
                        variant="outlined"
                        style={{
                            marginBottom: "15px",
                        }}
                        value={hospitalArea}
                        onChange={(e) => setHospitalArea(e.target.value)}
                    />
                )}
                {hasAccount ? null : (
                    <FormControl
                        variant="outlined"
                        className={classes.formControl}
                    >
                        <InputLabel id="demo-simple-select-outlined-label">
                            Select District
                        </InputLabel>
                        <Select
                            labelId="demo-simple-select-outlined-label"
                            id="demo-simple-select-outlined"
                            value={hospitalDistrict}
                            onChange={(e) =>
                                setHospitalDistrict(e.target.value)
                            }
                            style={{
                                marginBottom: "15px",
                            }}
                            label="Select District"
                        >
                            <MenuItem value="GHMC">Hyderabad</MenuItem>
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
                            <MenuItem value="Nagarkurnool">
                                Nagarkurnool
                            </MenuItem>
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
                            <MenuItem value="GHMC">GHMC</MenuItem>
                        </Select>
                    </FormControl>
                )}

                <TextField
                    id="outlined-basic"
                    label="Email"
                    variant="outlined"
                    style={{
                        marginBottom: "15px",
                    }}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    type="password"
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    style={{
                        marginBottom: "15px",
                    }}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {hasAccount ? null : (
                    <TextField
                        type="password"
                        id="outlined-basic"
                        label="Verify Password"
                        variant="outlined"
                        style={{
                            marginBottom: "15px",
                        }}
                        value={verifyPassword}
                        onChange={(e) => setVerifyPassword(e.target.value)}
                    />
                )}
                {emailError || passwordError ? (
                    <span
                        className="login-error error-message"
                        style={{ color: "red" }}
                    >
                        {emailError || passwordError}
                    </span>
                ) : null}
                {hasAccount ? (
                    <Button
                        variant="contained"
                        color="primary"
                        style={{
                            marginBottom: "15px",
                            height: "49px",
                            backgroundColor: "#006FE6",
                        }}
                        onClick={handleLogin}
                    >
                        Signin
                    </Button>
                ) : (
                    <Button
                        variant="contained"
                        color="primary"
                        style={{
                            marginBottom: "15px",
                            height: "49px",
                            backgroundColor: "#006FE6",
                        }}
                        onClick={handleSignup}
                    >
                        Signup
                    </Button>
                )}
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => setHasAccount(!hasAccount)}
                    style={{
                        backgroundColor: "#006FE6",
                        height: "49px",
                    }}
                >
                    {hasAccount ? (
                        <span>New User?</span>
                    ) : (
                        <span>Already a User?</span>
                    )}
                </Button>
            </div>
        </Modal>
    )
}
export default Login
