import React, { useEffect, useState } from 'react';
import { useLocalStorage } from '../../hooks/useLocalStorage';

const stars = new Array(5).fill(0);

export const StarRating: React.FC = () => {
  const [cachedRating, setCachedRating] = useLocalStorage<number>('star_rating', -1);
  const [clickRating, setClickRating] = useState<number>(-1);
  const [hoverRating, setHoverRating] = useState<number>(-1);

  const rating = hoverRating > -1 ? hoverRating : clickRating;

  useEffect(() => {
    setClickRating(cachedRating);
  }, [cachedRating])

  const clickStar = (index:number) => {
    setClickRating(index);
    setCachedRating(index);
  }

  return (
    <div>
    { stars.map((_, index) => 
      <span
        className="star"
        key={index}
        style={{
          cursor: 'pointer',
          color: index <= rating ? "orange": 'grey'
        }}
        onClick={() => clickStar(index)}
        onMouseEnter={() => setHoverRating(index)}
        onMouseLeave={() => setHoverRating(-1)}
      >&#9733;</span>
      )
    }
    </div>
  )
}
