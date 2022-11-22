import "./header.css";

const Header = () => {
  return (
    <div className="headerContainer">
      <div className="webHeader">
        <div className="logo">
          <img src={require("../../assests/logo_web.png")} alt="" />
        </div>
        <div className="searchFiled">
          <form className="formcontainer">
            <div className="inputField">
              <input
                type="text"
                className="search"
                name="search"
                placeholder="Search city"
              />
            </div>
            <div className="searchIcn">
              <img
                src={require("../../assests/icon_search_white.png")}
                alt=""
                className="searchIcn"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="mobileHeader">
        <div className="mobileLeft">
          <div className="burgerMenu">
            <img
              src={require("../../assests/icon_menu_white.png")}
              alt=""
              className="burger"
            />
          </div>
          <div className="mobileLogo">
            <img
              src={require("../../assests/logo.png")}
              alt=""
              className="mobLogo"
            />
          </div>
        </div>
        <div className="mobileRight">
          <img src={require("../../assests/icon_search_white.png")} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
