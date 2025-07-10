import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';

import "./CardComponent.css"

/*
  Apesar de ser possivel estilizar os componentes da MUI diretamente importando-os nas paginas,
  Optei por componentizar e usar props próprias e estilização em arquivo css
*/ 
const CardComponent = ({height, image, alt, title, description, url, date, width}) => {

  // Script para apareçer a data formatada
  function getParsedDate(strDate){
    var strSplitDate = String(strDate).split(' ');
    var date = new Date(strSplitDate[0]);
    
    var dd = date.getDate();
    var mm = date.getMonth() + 1; 

    var yyyy = date.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    date =  dd + "-" + mm + "-" + yyyy;
    return date.toString();
  }

  return (
    <Card sx={{ maxWidth: {width}, marginBottom: 5 }}>
        <CardActionArea >
            <CardMedia
            component="img"
            height={height}
            image={image}
            alt={alt}
            />
            <CardContent >
            <Typography gutterBottom variant="h5" component="div" height={130} >
                {title}
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }} >
                {description}
            </Typography>
            <a id='card-link' href={url} target="_blank">Leia mais</a>
            <br />
            <small>Publicado em {getParsedDate(date)}</small>
            </CardContent>
        </CardActionArea>
    </Card>
  )
}

export default CardComponent