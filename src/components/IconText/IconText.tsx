import Icon from "../Icon/Icon";
import "./style.scss";

export interface IconTextProps {
    iconUrl: string;
    text: string;
    iconStyle?: React.CSSProperties;
}

const IconText = ({iconUrl, text, iconStyle}: IconTextProps) => {
    return (
        <div className="icon-text">
            <Icon url={iconUrl} style={iconStyle} />
            <p>{text}</p>
        </div>
    )
}

export default IconText;