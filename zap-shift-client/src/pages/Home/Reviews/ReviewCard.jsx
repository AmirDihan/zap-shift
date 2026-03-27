import React from "react";
import review_quote from "../../../assets/reviewQuote.png";
const ReviewCard = ({review}) => {
  return (
    <div className="p-5 bg-white w-full h-60 rounded-2xl">
      <img src={review_quote} alt="" />
      <p className="mt-2">
        {review.review}
      </p>
      <hr className="my-6 border-dotted border-[#03373D]" />
      <div className="flex gap-6">
        <img src={review.user_photoURL} className="w-20 h-20 rounded-full" alt="" />
        <div>
            <h3 className="text-xl font-bold text-secondary">{review.userName}</h3>
            <p>{review.designation}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
