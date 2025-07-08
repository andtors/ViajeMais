import { useState } from "react"

import { Typography, Grid, Card, CardMedia, Dialog, DialogContent, IconButton, Box } from "@mui/material"

import { Close as CloseIcon } from "@mui/icons-material"

import "./ImageGallery.css"

const galleryImages = [
  {
    id: 1,
    src: "/baloes.jpg",
    title: "Balões",
    description: "Balões sobrevoando Montanha",
  },
  {
    id: 2,
    src: "/cascata.jpg",
    title: "Cascata",
    description: "Cascata de agua cristalinas na China",
  },
  {
    id: 3,
    src: "/colina.jpg",
    title: "Colina",
    description: "Paisagem de arvores com montanha ao fundo",
  },
  {
    id: 4,
    src: "/flores.jpg",
    title: "Flores",
    description: "Flores roxas com montanha ao fundo",
  },
  {
    id: 5,
    src: "/praia.jpg",
    title: "Praia",
    description: "Paisagem de praia e coqueiros",
  },
  {
    id: 6,
    src: "/templo.jpg",
    title: "Templo",
    description: "Templo de Poseidon com pôr do sol ao fundo",
  },
]

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState()

  const handleImageClick = (galleryImages) => {
    setSelectedImage(galleryImages)
  }

  const handleClose = () => {
    setSelectedImage(null)
  }
  
  return (
    <div id="gallery">
    
      <h1 id="gallery-title">
        Galeria de Imagens
      </h1>

      <h2 id="gallery-subtitle">
        Uma coleção de destinos incríveis que vão inspirar sua próxima viagem
      </h2>

      <Grid sx={{ display:"flex", flexDirectio:"column", justifyContent: "center", marginBottom: 5 }} container spacing={3}>
        {galleryImages.map((image) => (
          <Grid item xs={12} sm={6} md={4} key={image.id}>
            <Card
              sx={{
                cursor: "pointer",
                transition: "transform 0.3s ease-in-out",
                "&:hover": {
                  transform: "scale(1.05)",
                },
                maxWidth:750
              }}
              onClick={() => handleImageClick(image)}
            >
              <CardMedia component="img" height="500" image={image.src} alt={image.title} sx={{ objectFit: "cover" }} />
              <Box sx={{ p: 2 }}>
                <Typography variant="h6" component="h3" gutterBottom>
                  {image.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {image.description}
                </Typography>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Modal */}
      <Dialog
        open={!!selectedImage}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
      >
        <DialogContent sx={{ p: 0, position: "relative" }}>
          <IconButton
            onClick={handleClose}
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              bgcolor: "rgba(0,0,0,0.5)",
              color: "white",
              zIndex: 1,
              "&:hover": {
                bgcolor: "rgba(0,0,0,0.7)",
              },
            }}
          >
            <CloseIcon />
          </IconButton>
          {selectedImage && (
            <Box>
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                style={{
                  width: "100%",
                  height: "auto",
                  borderRadius: "8px",
                }}
              />
              <Box sx={{ p: 3, bgcolor: "background.paper", borderRadius: "0 0 8px 8px" }}>
                <Typography variant="h5" component="h3" gutterBottom>
                  {selectedImage.title}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                  {selectedImage.description}
                </Typography>
              </Box>
            </Box>
          )}
        </DialogContent>
      </Dialog>
    </div>
  )
}

export default ImageGallery