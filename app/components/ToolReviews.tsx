'use client';

import { useState, useEffect } from 'react';
import StarRating from './StarRating';
import { Tool } from '../../lib/tools';

interface Review {
  id: string;
  rating: number;
  comment: string;
  date: string;
}

interface ToolReviewsProps {
  tool: Tool;
}

export default function ToolReviews({ tool }: ToolReviewsProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [newRating, setNewRating] = useState(0);
  const [newComment, setNewComment] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const averageRating = reviews.length > 0 
    ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length 
    : tool.averageRating;
  const reviewCount = reviews.length > 0 ? reviews.length : tool.reviewCount;

  const STORAGE_KEY = `reviews-${tool.id}`;

  useEffect(() => {
    // Load reviews from localStorage
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved) as Review[];
      // Defer state update to avoid synchronous cascading render warning
      setTimeout(() => {
        setReviews(parsed);
      }, 0);
    }
  }, [STORAGE_KEY]);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newRating || !newComment.trim() || newComment.length < 10) return;

    setSubmitting(true);
    
    const review: Review = {
      id: Date.now().toString(),
      rating: newRating,
      comment: newComment.trim(),
      date: new Date().toLocaleDateString(),
    };

    const updatedReviews = [...reviews, review];
    setReviews(updatedReviews);

    // Save to localStorage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updatedReviews));

    // Reset form
    setNewRating(0);
    setNewComment('');
    setSubmitting(false);

    // Scroll to top of reviews
    const reviewsSection = document.getElementById('reviews-section');
    reviewsSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div id="reviews-section" className="mt-12 pt-8 border-t border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
        <span>⭐</span> User Reviews & Ratings
      </h2>

      {/* Average Rating */}
      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl mb-8 border border-yellow-200">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1">
            <StarRating rating={averageRating} size="lg" readonly />
          </div>
          <div>
            <p className="text-3xl font-bold text-gray-900">{averageRating.toFixed(1)}</p>
            <p className="text-gray-600">{reviewCount} {reviewCount === 1 ? 'review' : 'reviews'}</p>
          </div>
        </div>
      </div>

      {/* Add Review Form */}
      <div className="bg-white rounded-xl p-6 shadow-sm mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Write a Review</h3>
        <form onSubmit={handleSubmitReview} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Your Rating</label>
            <StarRating 
              rating={newRating} 
              size="lg" 
              onRate={setNewRating}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Your Review (min 10 characters)
            </label>
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Share your experience with this tool..."
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 resize-vertical min-h-[100px]"
              rows={4}
              maxLength={500}
            />
            <p className="text-sm text-gray-500 mt-1">
              {newComment.length}/500 characters
            </p>
          </div>
          <button
            type="submit"
            disabled={!newRating || newComment.length < 10 || submitting}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
          >
            {submitting ? (
              <>
                <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                Submitting...
              </>
            ) : (
              'Submit Review'
            )}
          </button>
        </form>
      </div>

      {/* Reviews List */}
      {reviews.length > 0 ? (
        <div className="space-y-6">
          <h3 className="text-lg font-semibold text-gray-900">Recent Reviews ({reviews.length})</h3>
          {reviews.slice(-5).reverse().map((review) => (
            <div key={review.id} className="bg-gray-50 rounded-lg p-6">
              <div className="flex items-center gap-3 mb-3">
                <StarRating rating={review.rating} size="sm" readonly />
                <span className="font-semibold text-gray-900">{review.date}</span>
              </div>
              <p className="text-gray-700 leading-relaxed">{review.comment}</p>
            </div>
          ))}
          {reviews.length > 5 && (
            <p className="text-center text-gray-500 text-sm">
              Showing 5 most recent of {reviews.length} total reviews
            </p>
          )}
        </div>
      ) : (
        <div className="text-center py-12 bg-white rounded-xl shadow-sm">
          <div className="text-6xl mb-4">⭐</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Be the first to review</h3>
          <p className="text-gray-600 mb-6">Share your experience to help others discover great tools.</p>
          <button
            type="button"
            onClick={() => document.getElementById('reviews-section')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Write a review
          </button>
        </div>
      )}
    </div>
  );
}

