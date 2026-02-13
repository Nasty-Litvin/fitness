
export interface MenuItemProps {
    content: string;
    className?: string;
    style?: React.CSSProperties;
}

const MenuItem = ({content}: MenuItemProps) => {
    return ( 
        <li className="menu-item">
            {content}
        </li>
     );
}
 
export default MenuItem;