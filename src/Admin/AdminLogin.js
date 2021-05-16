import {
    Backdrop,
    Button,
    makeStyles,
    Modal,
    TextField,
} from "@material-ui/core"
import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"
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
function AdminLogin(props) {
    const {
        email,
        password,
        setEmail,
        setPassword,
        emailError,
        passwordError,
        handleLogin,
    } = props
    const classes = useStyles()
    const [open] = useState(true)
    useEffect(() => {
        document.title = "Login As Admin"
    }, [])
    return (
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            className={classes.modal}
            open={open}
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
                    padding: "50px",
                    borderRadius: "5px",
                    paddingTop: "30px",
                    display: "flex",
                    flexDirection: "column",
                }}
            >
                <center>
                    <span className="span-bold">
                        <h1 style={{ marginBottom: "25px" }}>
                            Sign in As Admin
                        </h1>
                    </span>
                    {/* <p className="heading-big" style={{ marginBottom: "15px" }}>
                        Sign in As Admin
                    </p> */}
                </center>

                <TextField
                    id="outlined-basic"
                    label="Email"
                    type="email"
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
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "flex-end",
                        marginBottom: "5px",
                    }}
                >
                    <Link to="/forgotPassword">Forgot Password</Link>
                </div>

                {emailError || passwordError ? (
                    <span
                        className="login-error error-message"
                        style={{ color: "red" }}
                    >
                        {emailError || passwordError}
                    </span>
                ) : null}
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
            </div>
        </Modal>
    )
}

export default AdminLogin
