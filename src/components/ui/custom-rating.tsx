
import React from 'react';
import { Rating } from 'react-simple-star-rating';

type CustomRatingProps = {
    initialValue?: number;
    onRatingChange?: (rate: number) => void;
    readonly?: boolean;
    size?: number;
    showValue?: boolean;
    className?: string;
    SVGstyle?: React.CSSProperties;
    onClick?: (value: number) => void;
    fillColor?: string;
    allowFraction?: boolean;
}

const CustomRating = ({
    initialValue = 0,
    onRatingChange,
    readonly = false,
    size = 20,
    showValue = false,
    className = "",
}: CustomRatingProps) => {
    return (
        <div className={`inline-flex items-center gap-2 whitespace-nowrap leading-none ${className}`}>
            <div
                className="flex flex-row items-center gap-1 w-max"
                role="img"
                aria-label={`${initialValue} out of 5 stars`}
            >
                <Rating
                    initialValue={initialValue} 
                    {...(onRatingChange && { onClick: (value) => onRatingChange(value) })}
                    readonly={readonly}
                    size={size}
                    fillColor="orange"
                    allowFraction={false}
                />
            </div>
            {showValue && (
                <span className="text-sm text-gray-600">
                    {initialValue}/5
                </span>
            )}
        </div>
    );
};

export default CustomRating;