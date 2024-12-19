import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../styles/singleArticle.css";
import Lottie from "lottie-react";
import loadingAnimation from "../styles/loadingAnimation.json";
import searchingAnimation from "../styles/searchingAnimation.json";
import noDataFoundAnimation from "../styles/noDataFoundAnimation.json";
import CommentCard from "./commentCard";

const SingleArticle = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://yahyas-northcoders-news-api.onrender.com/api/articles/${articleId}`
      )
      .then((articleResponse) => {
        setArticle(articleResponse.data.article);

        return axios.get(
          `https://yahyas-northcoders-news-api.onrender.com/api/articles/${articleId}/comments`
        );
      })
      .then((commentsResponse) => {
        console.log(commentsResponse.data.articleComments, "ujbgedifjawf");
        setComments(commentsResponse.data.articleComments || []);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error whilst fetching data:", error);
        setLoading(false);
      });
  }, [articleId]);

  if (loading) {
    return (
      <div className="searching-container">
        <Lottie
          animationData={searchingAnimation}
          loop={true}
          style={{ width: "300px", height: "300px" }}
        />
      </div>
    );
  }

  if (!article) {
    return (
      <div className="no-data-found-container">
        <Lottie
          animationData={noDataFoundAnimation}
          loop={true}
          style={{ width: "400px", height: "400px" }}
        />
      </div>
    );
  }

  return (
    <div className="single-article-container">
      <h1>{article.title}</h1>
      <img
        src={article.article_img_url}
        alt={article.title}
        className="article-image"
      />
      <p>{article.body}</p>
      <p>Written by: {article.author}</p>
      <p>Num. of Votes: {article.votes}</p>
      <p>Topic: {article.topic}</p>

      {/* Comments Section */}
      <div className="comments-section">
        <h3>Comments</h3>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <CommentCard key={comment.comment_id} articleComments={comment} />
          ))
        ) : (
          <p>No comments yet..</p>
        )}
      </div>
    </div>
  );
};

export default SingleArticle;
