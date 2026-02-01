import Logo from "../Logo/Logo";
import Menu from "../Menu/Menu";
import logo from "../../assets/logo.svg";
import menuData from "../../data/menuHeader.json"

import "./style.scss";

const HeaderNav = () => {
    return (
        <div className="header-nav">
            <Logo urlLogo={logo} />
            <Menu menu={menuData.data} />
        </div>
    )
}

export default HeaderNav;