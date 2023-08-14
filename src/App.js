import "./App.css";
import React from "react";
import { LandingPage } from "./components/landingPage";

function App() {
    const [isDialogOpen, setIsDialogOpen] = React.useState(false);

    const handleDialogClose = () => {
        setIsDialogOpen(false);
    };

    const handleOpenDialog = () => {
        setIsDialogOpen(true);
    };

    return (
        <div className="App">
            <div className={`background ${isDialogOpen ? 'open' : '' }`} onClick={handleDialogClose}></div>
            <LandingPage isDialogOpen={isDialogOpen} handleOpenDialog={handleOpenDialog}/>
        </div>
    );
}

export default App;
