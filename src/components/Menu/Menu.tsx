import MenuItem from "../MenuItem/MenuItem";

import "./style.scss";

export interface MenuItemProps {
    menu: string[];
    className?: string;
    style?: React.CSSProperties;
}

const Menu = ({menu}: MenuItemProps) => {

    return ( 
        <nav className="menu">
            <ul className="menu-list">
               {
                menu.map((item) => <MenuItem content={item} />)
               }
            </ul>
        </nav>
     );
}
 
export default Menu;