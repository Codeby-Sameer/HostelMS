// src/components/dashboard/Reviews.jsx
import React, { useState } from 'react';

const Reviews = () => {
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');

  const reviewStats = {
    average: 4.2,
    total: 15,
    breakdown: [
      { stars: 5, count: 8 },
      { stars: 4, count: 4 },
      { stars: 3, count: 2 },
      { stars: 2, count: 1 },
      { stars: 1, count: 0 },
    ],
  };

  const myReviews = [
    {
      id: 1,
      rating: 5,
      comment: 'Excellent facilities and great food quality. Staff is very cooperative.',
      date: '2024-01-20',
      likes: 5,
    },
    {
      id: 2,
      rating: 4,
      comment: 'Good overall experience. Room maintenance could be better.',
      date: '2023-12-15',
      likes: 3,
    },
  ];

  const allReviews = [
    ...myReviews,
    {
      id: 3,
      rating: 5,
      comment: 'Best hostel in the campus! Clean rooms and tasty food.',
      author: 'Student 2',
      date: '2024-01-18',
      likes: 8,
    },
    {
      id: 4,
      rating: 3,
      comment: 'Average facilities. WiFi needs improvement.',
      author: 'Student 3',
      date: '2024-01-15',
      likes: 2,
    },
  ];

  const handleSubmitReview = (e) => {
    e.preventDefault();
    if (rating > 0 && reviewText.trim()) {
      alert('Review submitted successfully!');
      setRating(0);
      setReviewText('');
    }
  };

  const renderStars = (rating, interactive = false) => {
    return (
      <div className="flex space-x-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type={interactive ? "button" : "span"}
            onClick={interactive ? () => setRating(star) : undefined}
            className={`text-2xl ${
              star <= rating ? 'text-yellow-400' : 'text-gray-300'
            } ${interactive ? 'cursor-pointer hover:text-yellow-300' : ''}`}
          >
            ★
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Hostel Reviews</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Review Stats & Form */}
        <div className="lg:col-span-1 space-y-6">
          {/* Review Stats */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold mb-4">Overall Rating</h3>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {reviewStats.average}
              </div>
              <div className="flex justify-center mb-2">
                {renderStars(Math.round(reviewStats.average))}
              </div>
              <p className="text-gray-600">
                Based on {reviewStats.total} reviews
              </p>
            </div>
            <div className="mt-4 space-y-2">
              {reviewStats.breakdown.map((item) => (
                <div key={item.stars} className="flex items-center">
                  <span className="text-sm w-12">{item.stars} ★</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2 mx-2">
                    <div
                      className="bg-yellow-400 h-2 rounded-full"
                      style={{
                        width: `${(item.count / reviewStats.total) * 100}%`,
                      }}
                    ></div>
                  </div>
                  <span className="text-sm w-8 text-right">{item.count}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Review Form */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold mb-4">Write a Review</h3>
            <form onSubmit={handleSubmitReview}>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Rating
                </label>
                {renderStars(rating, true)}
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Review
                </label>
                <textarea
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  rows="4"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Share your experience..."
                />
              </div>
              <button
                type="submit"
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>

        {/* Reviews List */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-lg font-bold mb-4">All Reviews</h3>
            <div className="space-y-4">
              {allReviews.map((review) => (
                <div key={review.id} className="border-b border-gray-200 pb-4 last:border-0">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-bold">
                        {review.author || 'You'}
                      </h4>
                      {renderStars(review.rating)}
                    </div>
                    <span className="text-sm text-gray-500">{review.date}</span>
                  </div>
                  <p className="text-gray-700 mb-2">{review.comment}</p>
                  <div className="flex justify-between items-center">
                    <button className="text-gray-500 hover:text-blue-600 text-sm flex items-center">
                      👍 {review.likes}
                    </button>
                    {!review.author && (
                      <button className="text-red-600 hover:text-red-700 text-sm">
                        Delete
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;