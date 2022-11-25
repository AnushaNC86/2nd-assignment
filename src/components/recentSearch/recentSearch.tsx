import { useState } from "react";
import "../favourites/favourites.css";

const RecentSearch = () => {
  const [modalItem, setModalItem] = useState(false);
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
        <div className="favMobileHeader">
          <div className="favHeaderMobile">
            <div className="favoriteBackName">
              <div className="backBtn">
                <img
                  src={require("../../assests/back.png")}
                  alt=""
                  className="back"
                />
              </div>
              <div className="favoriteName">Recent Search</div>
            </div>
            <div className="favSearch">
              <div className="searchImgMobile">
                <img
                  src={require("../../assests/searchMobile.png")}
                  alt=""
                  className="searchMobileImg"
                />
              </div>
            </div>
          </div>
          <div className="favHeaderWeb">
            <div className="citiesCount">You recently searched for</div>
            <div className="removeAll" onClick={() => setModalItem(true)}>
              Clear All
            </div>
          </div>
          <div className="favShowPattern">
            <div className="favBodyContainer">
              <div className="favBody">
                <div className="favMobile">
                  <div className="state">udupi,karnataka</div>
                  <div className="tempDetails">
                    <div className="tempImgContent">
                      <img
                        src={require(`../../assests/icon_humidity_info.png`)}
                        alt=""
                        className="tempImg"
                      />
                    </div>
                    <div className="degreeContent">
                      30
                      <span className="deg">&#8451;</span>
                    </div>
                    <div className="weatherContent">mostly Cloudy</div>
                  </div>
                </div>
                <div className="fillHeart">
                  <img
                    src={require("../../assests/icon_favourite_Active.png")}
                    alt=""
                    className="fillHeartImg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {modalItem ? (
        <div className="modalContainer">
          <div className="modalbackground">
            <div className="modalBody">
              <div className="modalTitle">
                Are you sure want to remove all items searched?
              </div>
              <div className="modalBtns">
                <button
                  className="cancelBtn"
                  onClick={() => setModalItem(false)}
                >
                  No
                </button>
                <button className="cancelBtn">Yes</button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default RecentSearch;
