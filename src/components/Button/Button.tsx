import './style.scss';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: string;
    variant?: 'primary' | 'secondary' | 'tertiary';
} 

const Button = ({text, variant='primary',  ...rest}: ButtonProps) => {
    return ( 
        <button className={`button button--${variant}`} {...rest}>{text}</button>
     );
}
 
export default Button;