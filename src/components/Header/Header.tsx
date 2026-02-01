import HeaderContacts from "../HeaderContacts/HeaderContacts";
import HeaderNav from "../HeaderNav/HeaderNav";
import "./style.scss";

const Header = () => {
    return (
        <header className="header">
            <HeaderNav />
            <HeaderContacts />
        </header>
    )
}

export default Header;