import { Routes, Route } from "react-router-dom";
import "./App.css";
import HeaderTabs from "./components/headerTabs/headerTabs";
import Home from "./views/home/home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tabheader" element={<HeaderTabs />} />
      </Routes>
    </div>
  );
}

export default App;
