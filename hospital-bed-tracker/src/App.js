import { Button } from "@material-ui/core"
import "./App.css"
import fire from "./Config/fire"

function App(props) {
    return (
        <div className="App">
            <h1>App Component</h1>
            <Button
                onClick={() => {
                    props.handleLogout()
                }}
            >
                Logout
            </Button>
        </div>
    )
}

export default App
