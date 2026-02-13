import MenuItem from "../MenuItem/MenuItem";

import "./style.scss";

export interface MenuItemProps {
    menu: string[];
    className?: string;
    style?: React.CSSProperties;
}

const Menu = ({menu, className}: MenuItemProps) => {

    return ( 
        <nav className={`menu ${className || ''}`}>
            <ul className="menu__list">
               {
                menu.map((item) => <MenuItem content={item} />)
               }
            </ul>
        </nav>
     );
}
 
export default Menu;