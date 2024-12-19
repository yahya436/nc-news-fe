import React from "react";
import { Link } from "react-router-dom"
import "../styles/articleCard.css"

const ArticleCard = ({ article }) => {
  return (
    <div className="article-card">
      <img
        src={article.article_img_url}
        alt={article.title}
        className="article-image"
      />
      <h2 className="article-title">{article.title}</h2>
      <p className="article-author">By {article.author}</p>
      <p className="article-topic">Topic: {article.topic}</p>
      <p className="article-votes">Votes: {article.votes}</p>
      <Link to={`/articles/${article.article_id}`} className="read-more">
      Read more
      </Link>
    </div>
  );
};

export default ArticleCard;
