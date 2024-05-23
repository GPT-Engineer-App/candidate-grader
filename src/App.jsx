import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import Candidates from "./pages/Candidates.jsx";
import Candidate from "./pages/Candidate.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/candidates" element={<Candidates />} />
        <Route exact path="/candidate/:id" element={<Candidate />} />
      </Routes>
    </Router>
  );
}

export default App;