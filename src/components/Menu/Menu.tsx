import MenuItem from "../MenuItem/MenuItem";
import "./style.scss";

export interface MenuItemProps {
    className?: string;
    style?: React.CSSProperties;
}

const Menu = () => {
    return ( 
        <nav className="menu">
            <ul className="menu-list">
                <MenuItem content="О клубе"/>
            </ul>
        </nav>
     );
}
 
export default Menu;