import { Route, Routes, NavLink } from "react-router-dom";

const HeaderTabs = () => {
  return (
    <div className="headerTabsContainer">
      <div className="webTabs">
        <NavLink to="/">HOME</NavLink>
        <NavLink to="/">FAVOURITE</NavLink>
        <NavLink to="/">RECENT SEARCH</NavLink>
      </div>
    </div>
  );
};

export default HeaderTabs;
