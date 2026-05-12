import React from 'react'

type BadgeProps = {
    number: number | string;
    className?: string;
}

const Badge = ({ number, className = '' }: BadgeProps) => {
    return (
        <div>
            <span
                className={`${className}`}
            >
                {number}
            </span>
        </div>
    )
}

export default Badge;
