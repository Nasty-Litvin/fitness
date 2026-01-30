import type { ElementType } from "react";


export interface TitleProps {
    title: string;
    level: 1 | 2 | 3 | 4 | 5 | 6;
    as?: ElementType;
    className?: string; 
}

const Title = ({title, level}: TitleProps) => {
    const Tag = `h${level}` as ElementType

    return ( 
        <Tag className={`title title--h${level}`}>{title}</Tag>
     );
}
 
export default Title;