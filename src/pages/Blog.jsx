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
      <h1 id='blog-title'>Blog de Viagens</h1>
      <h2 id="blog-subtitle">Descubra histórias inspiradoras e dicas valiosas de viajantes ao redor do mundo</h2>
        <div id="blog-cards-area">
          {articles.map((article) => (
                  <CardComponent width={800} key={article.id} height="300" title={article.title} description={article.description} image={article.social_image} url={article.url} date={article.published_at}/>
              ))}
      </div>
    </div>
  )
}

export default Blog