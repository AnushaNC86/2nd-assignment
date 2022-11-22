import "./headerTabs.css";
import { useState } from "react";
import { Route, Routes, NavLink } from "react-router-dom";
import Favourites from "../favourites/favourites";
import RecentSearch from "../recentSearch/recentSearch";
import HomeDetails from "../homeBody/homeDetails";

const HeaderTabs = () => {
  const [dates, setDates] = useState("");
  const date = new Date();
  setInterval(() => {
    todayDate();
  }, 1000);
  const todayDate = () => {
    setDates(
      `${date.toLocaleString("en-us", {
        weekday: "short",
      })} ${date.getDate()}, ${date.toLocaleString("en-us", {
        month: "short",
      })} ${date.getFullYear()}${date.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        // second: "numeric",
        hour12: true,
      })}`
    );
  };

  return (
    <div>
      <div className="headerTabsContainer">
        {" "}
        <div className="webTabs">
          <NavLink to="/home" className="Links">
            HOME
          </NavLink>
          <NavLink to="/favourites" className="Links">
            FAVOURITE
          </NavLink>
          <NavLink to="/recents" className="Links">
            RECENT SEARCH
          </NavLink>
        </div>
        <div className="dates">
          <div>{dates}</div>
        </div>
      </div>
      <Routes>
        <Route path="/home" element={<HomeDetails value={dates} />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/recents" element={<RecentSearch />} />
      </Routes>
    </div>
  );
};

export default HeaderTabs;
