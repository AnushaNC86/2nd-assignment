import React from "react";

const Favourites = () => {
  return (
    <div className="favContainer">
      {false ? (
        <div className="noDataContainer">
          <div className="noDataImg">
            <img src={require("../../assests/icon_nothing.png")} alt="" />
          </div>
          <div className="nothingText">No Favorites Added</div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default Favourites;
