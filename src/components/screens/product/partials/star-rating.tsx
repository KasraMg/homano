import React, { useState } from "react";
import { Star } from "lucide-react";

const StarRating: React.FC = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          type="button"
          onClick={() => setRating(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          className="transition-transform hover:scale-110"
        >
          <Star
            size={24}
            className={`transition-colors ${
              (hover || rating) >= star
                ? "fill-orange-500 text-orange-500"
                : "text-gray-300"
            }`}
          />
        </button>
      ))}
    </div>
  );
};

export default StarRating;
