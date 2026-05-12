import React from "react";

type ButtonCardProps = {
    title: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    disabled?: boolean;
    className?: string;
}

const ButtonCard = ({
    title,
    onClick,
    disabled = false,
    className = ''
}: ButtonCardProps) => {
    return (
        <button
            type="button"
            onClick={onClick}
            disabled={disabled}
            className={`add-to-cart-btn ${className}`}
        >
            {title}
        </button>
    )
}

export default ButtonCard;
