import React from "react";
import ArticlesList from "./components/articlesList";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SingleArticle from "./components/singleArticle";
import "../src/App.css";

const App = () => {
  return (
    <Router>
      <div>
        <h1>Yahya's News Articles</h1>
        <Routes>
          <Route path="/" element={<ArticlesList />} />
          <Route path="/articles/:articleId" element={<SingleArticle />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
