import { Routes, Route } from "react-router-dom";
import "./App.css";
import Favourites from "./components/favourites/favourites";
import HeaderTabs from "./components/headerTabs/headerTabs";
import RecentSearch from "./components/recentSearch/recentSearch";
import Home from "./views/home/home";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
