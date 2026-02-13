import "./style.scss";

export interface TextCardProps {
    title: string;
    subtitle?: string;
    url?: string;
    className?: string;
    style?: React.CSSProperties;
}

const TextCard = ({title, subtitle, className, url}: TextCardProps) => {

    return ( 
        <div className={`card-text ${className || ''}`}>
            <img className={`card-img card-text__img--${className || ''}`} src={url} />
            <p className={`card-title ${className || ''}`}>{title}</p>
            <p className={`card-subtitle ${className || ''}`}>{subtitle}</p>
        </div>
     );
}
 
export default TextCard;