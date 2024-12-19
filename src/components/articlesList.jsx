import React, { useState, useEffect } from "react";
import axios from "axios";
import ArticleCard from "./articleCard";
import "../styles/articlesList.css";
import Lottie from "lottie-react";
import loadingAnimation from "../styles/loadingAnimation.json";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://yahyas-northcoders-news-api.onrender.com/api/articles")
      .then((response) => {
        console.log(response, "res");
        setArticles(response.data.article);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="loading-container">
        <Lottie
          animationData={loadingAnimation}
          loop={true}
          style={{ width: "150px", height: "150px" }}
        />
      </div>
    );
  }

  return (
    <div className="articles-container">
      {/* Display articles list */}
      {articles.map((article) => (
        <ArticleCard key={article.article_id} article={article} />
      ))}
    </div>
  );
};

export default ArticlesList;
