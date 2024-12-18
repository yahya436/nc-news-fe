import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleArticle = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://yahyas-northcoders-news-api.onrender.com/api/articles/${articleId}`)
      .then((response) => {
        setArticle(response.data.article);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error whilst trying to fetch the article:", error);
        setLoading(false);
      });
  }, [articleId]);

  if (loading) return <p>Loading article...</p>;
  if (!article) return <p>Article not found D:</p>;

  return (
    <div className="single-article-container">
      <h1>{article.title}</h1>
      <img src={article.article_img_url} alt={article.title} className="article-image" />
      <p>{article.body}</p>
      <p>Written by: {article.author}</p>
      <p>Num. of Votes: {article.votes}</p>
      <p>Topic: {article.topic}</p>
    </div>
  );
};

export default SingleArticle;
