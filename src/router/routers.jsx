import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Authentification from "../pages/authentification";
import Home_personnal from "../pages/waveWallet";
import CodeLoginStep from "../pages/CodeLoginStep";
import CodeOTP from "../pages/codeotp";
import Inscription from "../pages/inscription";
import NumberPhone from "../pages/number";

const Component_Router = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Navigate to="/presentation" replace />} />
                <Route path="/presentation" element={<Home_personnal />} />
                <Route path="/auth" element={<Authentification />} />
                <Route path="/verification" element={<CodeLoginStep />} />
                <Route path="/verification/otp" element={<CodeOTP />} />
                <Route path="/inscription" element={<Inscription />} />
                <Route path="/inscription/number" element={<NumberPhone />} />
            </Routes>
        </Router>
    );
};

export default Component_Router;
