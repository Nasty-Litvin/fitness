import "./style.scss";

export interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    urlLogo: string;
}

const Logo = ({urlLogo, className, ...rest}: LogoProps) => {
    return (
        <img
            src={urlLogo} 
            className={`logo ${className ?? ''}`}
            alt="logo"
            {...rest}
        />
    )
}

export default Logo;