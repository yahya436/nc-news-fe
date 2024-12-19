import React from "react";
import "../styles/commentCard.css"

function CommentCard({ articleComments }) {
  return (
    <div className="comment-card">
      <div className="comment-header">
        <strong>{articleComments.author}</strong>
        <span className="comment-timestamp">{articleComments.created_at}</span>
      </div>
      <p className="comment-text">{articleComments.body}</p>
    </div>
  );
}

export default CommentCard;
