import "./App.module.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Homepage from "./pages/Homepage/Homepage";
import Instructor from "./pages/Instructor/Instructor";
import Module from "./pages/Module/Module";
import Topic from "./components/Topic/Topic";
import Assignment from "./components/Assignment/Assignmet";
import Quiz from "./components/Quiz/Quiz";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/Homepage" element={<Homepage />} />
          <Route path="/Instructor" element={<Instructor />} />

          <Route path="/Module" element={<Module />} />

          <Route path="/Module/topic" element={<Topic />} />
          <Route path="/Module/quiz" element={<Quiz />} />
          <Route path="/Module/assignment" element={<Assignment />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
