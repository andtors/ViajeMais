import "./Homepage.css"
import CardComponent from "../components/CardComponent"

import Card from '@mui/material/Card';

import useDevApi from "../hooks/useDevApi"
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Homepage = () => {

  const [articles, setArticles] = useState([])

  useEffect(() => {

  async function getArticles() {
    const articles = await useDevApi("https://dev.to/api/articles?tag=travel")

    setArticles(articles.slice(0,2))
  }

  getArticles()

  }, [])

  const navigate = useNavigate()

  return (
    <div id="home">
        <div id="home-welcome">
            <img id="home-logo" src="image/logo.png" alt="Logo" />
            <div>
                <h1 id="home-title">Explore o mundo com a ViajeMais!</h1>
                <p id="home-desc">A minha <br /> A sua <br /> A nossa  <br />
                Proxima viagem se encontra aqui!</p>
            </div>
        </div>
        
        <h2>Confira abaixo alguma de nossas viagens!</h2>

        <div id="home-components">
            {articles.map((article) => (
                <CardComponent key={article.id} height="300" title={article.title} description={article.description} image={article.social_image} url={article.url} date={article.published_at}/>
            ))}
            <Card sx={{ maxWidth: 300, backgroundColor: "#00558a", marginBottom: 5}} >
                <div id="home-card-blog">
                    <h3 onClick={() => navigate("/blog")}>Acesse nosso blog clicando aqui!</h3>
                </div>
            </Card>
        </div>
    </div>
  )
}

export default Homepage