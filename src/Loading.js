import React from "react"
import { makeStyles } from "@material-ui/core/styles"
import Modal from "@material-ui/core/Modal"
import Backdrop from "@material-ui/core/Backdrop"
import "./Loading.css"
const useStyles = makeStyles((theme) => ({
    modal: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        outline: "none",
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        border: "2px solid #000",
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}))

function Loading() {
    const classes = useStyles()
    return (
        <div style={{ outline: "none" }}>
            <Modal
                style={{ outline: "none" }}
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={classes.modal}
                open={true}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <div className="loading-cont">
                    <img
                        src="Loading.gif"
                        alt="Loading"
                        style={{ width: "40px", height: "40px" }}
                    />
                </div>
            </Modal>
        </div>
    )
}
export default Loading
