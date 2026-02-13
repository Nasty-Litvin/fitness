import "./style.scss";

export interface IconProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    urlIcon: string;
}

const Icon = ({urlIcon, className, ...rest}: IconProps) => {
    return (
        <img 
            src={urlIcon} 
            className={`icon ${className ?? ''}`}
            alt="icon" 
            {...rest}
            />
    )
}

export default Icon;