
interface ButtonProps {
    children: string;
    onClick: () => void;
    color?: 'primary' | 'secondary'|'danger'; //? makes it optional, so that if not passed in, it will default to primary which is set below
}

const Button = ({ children, onClick , color = 'primary'}: ButtonProps) => {
    return (
        <button className={'btn btn-'+ color} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button;