// Import BrowserRouter as Router
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Pages/homeCoding";
import Team from "./Pages/teamCoding";
import Event from "./Pages/eventCoding";
import { Routes, Route } from "react-router-dom";
import ICPCCoding from "./Pages/ICPCCoding";
import HOF from "./Pages/HOF";
import ResourcesCoding from "./Pages/resourcesCoding";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/event" element={<Event />} />
        <Route path="/icpc" element={<ICPCCoding />} />
        <Route path="/resource" element={<ResourcesCoding />} />
        <Route path="/hof" element={<HOF />} />
      </Routes>
    </div>
  );
}

export default App;
