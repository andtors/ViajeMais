import { useEffect, useState } from "react"

import CardComponent from "../components/CardComponent"

import useDevApi from "../hooks/useDevApi"

import "./Blog.css"

const Blog = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {

  async function getArticles() {
    const articles = await useDevApi("https://dev.to/api/articles?tag=travel")

    setArticles(articles.slice(0,6))
  }

  getArticles()

  }, [])

  return (
    <div>
      <h1 id='blog-title'>Confira nossas viagens mais recentes:</h1>
        <div id="blog-cards-area">
          {articles.map((article) => (
                  <CardComponent key={article.id} height="300" title={article.title} description={article.description} image={article.social_image} url={article.url} date={article.published_at}/>
              ))}
      </div>
    </div>
  )
}

export default Blog