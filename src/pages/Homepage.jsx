import "./Homepage.css"

import Card from '@mui/material/Card';

import CardComponent from "../components/CardComponent";

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

  }, [setArticles])

  const navigate = useNavigate()

  return (
    <div id="home">
        <div id="home-welcome">
            <img id="home-logo" src="logo.png" alt="Logo" />
            <div>
                <h1 id="home-title">Explore o mundo com a ViajeMais!</h1>
                <p id="home-desc">Conectando você às melhores experiências e destinos do mundo!</p>
            </div>
        </div>
        
        <h2>Confira abaixo alguma de nossas viagens!</h2>

        <div id="home-components">
            <Card sx={{ height:200, width: 800, backgroundColor: "#00558a", marginBottom: 5}} >
                <div id="home-card-blog">
                    <h3 onClick={() => navigate("/blog")}>Acesse nosso blog clicando aqui!</h3>
                </div>
            </Card>
            {articles.map((article) => (
                  <CardComponent width={800} key={article.id} height="300" title={article.title} description={article.description} image={article.social_image} url={article.url} date={article.published_at}/>
            ))}
        </div>
    </div>
  )
}

export default Homepage