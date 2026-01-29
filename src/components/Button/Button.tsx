import './style.scss';

export interface ButtonProp extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    variant?: 'primary' | 'secondary';
    style?: React.CSSProperties;
} 

const Button = ({text, variant='primary', style,  ...rest}: ButtonProp) => {
    return ( 
        <button className={`button button--${variant}`} style={style} {...rest}>{text}</button>
     );
}
 
export default Button;