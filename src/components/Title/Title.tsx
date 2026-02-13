import type { ElementType } from "react";
import "./style.scss";

export interface TitleProps {
    title: string;
    level: 1 | 2 | 3 | 4 | 5 | 6;
    as?: ElementType;
    className?: string;
    style?: React.CSSProperties;
}

const Title = ({title, level, style}: TitleProps) => {
    const Tag = `h${level}` as ElementType

    return ( 
        <Tag className={`title title--h${level}`} style={style}>{title}</Tag>
     );
}
 
export default Title;