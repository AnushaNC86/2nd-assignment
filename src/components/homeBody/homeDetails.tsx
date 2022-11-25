import { useState } from "react";
import "./homeDetails.css";
import Switch from "react-switch";

const HomeDetails = (props: any) => {
  const [checked, setChecked] = useState(false);
  const handleChange = () => {
    setChecked(!checked);
  };
  return (
    <div className="HomeDetailsContainer">
      <div className="weatherParent">
        <div>
          <div className="homeTab">
            <div className="dateMobile">{props.value}</div>
            <div className="locationName">Udupi,India</div>
            <div className="addToFav">
              <div className="heartImg">
                <img src={require("../../assests/icon_favourite.png")} alt="" />
              </div>
              <div className="addFavText">Add to Favourites</div>
            </div>
          </div>
          <div className="weatherData">
            <div className="weatherImg">
              <img
                src={require("../../assests/icon_mostly_sunny.png")}
                alt=""
              />
            </div>
            <div className="degree">
              <div className="degrees">14</div>
              <div className="switchTempature">
                <Switch
                  borderRadius={4}
                  onChange={handleChange}
                  checked={checked}
                  className="react-switch"
                  offColor="transparent"
                  onColor="transparent"
                  uncheckedHandleIcon={
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        fontSize: 18,
                        color: "red",
                      }}
                    >
                      {"\u00B0"}C
                    </div>
                  }
                  uncheckedIcon={
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        fontSize: 18,
                        paddingRight: 2,
                        color: "white",
                        zIndex: "2",
                      }}
                    >
                      {"\u00B0"}F
                    </div>
                  }
                  checkedIcon={
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        fontSize: 18,
                        paddingRight: 2,
                        color: "white",
                      }}
                    >
                      {"\u00B0"}C
                    </div>
                  }
                  checkedHandleIcon={
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        color: "red",
                        fontSize: 18,
                      }}
                    >
                      {"\u00B0"}F
                    </div>
                  }
                />
              </div>
            </div>
            <div className="weatherName">Mostly Cloudy</div>
          </div>
        </div>
        <div className="footer">
          <div className="footerListItem">
            <div className="footerImg">
              <img
                src={require("../../assests/icon_temperature_info.png")}
                alt=""
                className="footerImage"
              />
            </div>
            <div className="footerText">
              <div className="minMax">Min-Max</div>
              <div className="temp">75-78</div>
            </div>
          </div>
          <div className="footerListItem">
            <div className="footerImg">
              <img
                src={require("../../assests/icon_precipitation_info.png")}
                alt=""
                className="footerImage"
              />
            </div>
            <div className="footerText">
              <div className="minMax1">Precipitation</div>
              <div className="temp">75%</div>
            </div>
          </div>
          <div className="footerListItem">
            <div className="footerImg">
              <img
                src={require("../../assests/icon_humidity_info.png")}
                alt=""
                className="footerImage"
              />
            </div>
            <div className="footerText">
              <div className="minMax1">Humidity</div>
              <div className="temp">75%</div>
            </div>
          </div>
          <div className="footerListItem">
            <div className="footerImg">
              <img
                src={require("../../assests/icon_wind_info.png")}
                alt=""
                className="footerImage"
              />
            </div>
            <div className="footerText">
              <div className="minMax1">Wind</div>
              <div className="temp">75mph</div>
            </div>
          </div>
          <div className="footerListItem">
            <div className="footerImg">
              <img
                src={require("../../assests/icon_visibility_info.png")}
                alt=""
                className="footerImage"
              />
            </div>
            <div className="footerText">
              <div className="minMax1">Visibility</div>
              <div className="temp">75mph</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeDetails;
