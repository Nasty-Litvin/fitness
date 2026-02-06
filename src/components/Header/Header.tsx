import HeaderContacts from "../HeaderContacts/HeaderContacts";
import HeaderNav from "../HeaderNav/HeaderNav";
import "./style.scss";

const Header = () => {
    return (
        <header className="header">
            <div style={{background: '#004643',}}>
                <div className="header__container">
                    <HeaderContacts />
                </div>
            </div>
            <div className="header__container">
                <HeaderNav />
            </div>
        </header>
    )
}

export default Header;