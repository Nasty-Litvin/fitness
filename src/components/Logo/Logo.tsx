import "./style.scss";

export interface LogoProps {
    url: string;
    style?: React.CSSProperties;
}

const Logo = ({url, style}: LogoProps) => {
    return (
        <img src={url} className="logo" style={style} alt="logo" />
    )
}

export default Logo;