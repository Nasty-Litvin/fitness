import "./style.scss";

export interface IconProps {
    url: string;
    style?: React.CSSProperties;
}

const Icon = ({url, style}: IconProps) => {
    return (
        <img src={url} className="icon" style={style} alt="icon" />
    )
}

export default Icon;