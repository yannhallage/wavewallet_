import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Authentification from "../pages/authentification";
import Home_personnal from "../pages/waveWallet";
import CodeLoginStep from "../pages/CodeLoginStep";

const Component_Router = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/presentation" replace />} />
                <Route path="/presentation" element={<Home_personnal />} />
                <Route path="/auth" element={<Authentification />} />
                <Route path="/verification" element={<CodeLoginStep />} />
            </Routes>
        </Router>
    );
};

export default Component_Router;
