import { IButton } from './Button.interface';
import "./Button.style.css";

const Button = ({ type, click, title, size, color, shadow, className }: IButton) => {
    const buttonClasses = `btn ${size} ${color} ${shadow ? "shadow" : ""} ${className || ""}`.trim();

    return (
        <div>
            <button
                type={type}
                onClick={click}
                className={buttonClasses}>
                {title}
            </button>
        </div>
    );
};

export default Button;
