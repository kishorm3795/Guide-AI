'use client';

interface StarRatingProps {
  rating: number;
  size?: 'sm' | 'md' | 'lg';
  readonly?: boolean;
  onRate?: (newRating: number) => void;
  className?: string;
}

const StarRating = ({ rating, size = 'md', readonly = false, onRate, className = '' }: StarRatingProps) => {
  const starSize = size === 'sm' ? 'w-4 h-4' : size === 'md' ? 'w-5 h-5' : 'w-6 h-6';
  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div className={`flex items-center gap-1 ${className}`}>
      {stars.map((star) => {
        const isFilled = star <= rating;
        const isHalf = !isFilled && star - 0.5 <= rating;
        
        return (
          <button
            key={star}
            type="button"
            className={`
              ${starSize}
              ${isFilled ? 'text-yellow-400 fill-current' : 'text-gray-300'}
              hover:text-yellow-400 transition-colors cursor-pointer
              ${readonly ? 'cursor-default hover:text-gray-300' : ''}
            `}
            onClick={!readonly ? () => onRate?.(star) : undefined}
            disabled={readonly}
            aria-label={`Star ${star}`}
          >
            {isHalf ? (
              <svg viewBox="0 0 24 44" fill="currentColor">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                <path d="M12 22l3.09-6.26L22 14.73l-5-4.87L17.18 5.5L12 9.23l-5.18-3.73L2 14.73l6.91 1.01L12 22z" opacity="0.5"/>
              </svg>
            ) : (
              <svg viewBox="0 0 20 20" fill="currentColor">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            )}
          </button>
        );
      })}
      {!readonly && (
        <span className="ml-2 text-sm text-gray-500">
          Click to rate
        </span>
      )}
    </div>
  );
};

export default StarRating;

