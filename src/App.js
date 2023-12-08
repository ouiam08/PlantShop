import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Auth from "./components/Auth";
import Home from "./page/Home";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/auth" element={<Auth />} />
            </Routes>
        </Router>
    );
}

export default App;
