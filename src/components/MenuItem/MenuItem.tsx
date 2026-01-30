
export interface MenuItemProps {
    content: string;
    className?: string;
    style?: React.CSSProperties;
}

const MenuItem = ({content}: MenuItemProps) => {
    return ( 
        <li>
            {content}
        </li>
     );
}
 
export default MenuItem;