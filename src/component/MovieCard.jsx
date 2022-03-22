import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";



  export default function MovieCard({movie}) {
    
    let image = "https://image.tmdb.org/t/p/w500/"+movie.poster_path
    let description = movie?.overview.length >120 ? movie.overview.substring(0,121):movie.overview
    let titre = movie?.title + " (Populaire)"
  return (
    <div className="col-md-4">
      <Card
        sx={{
          maxWidth: 335,
          height: 550,
          padding:1,
          backgroundColor: "#eee",
          marginLeft: 10,
          marginBottom:5
        }}
      >
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {titre}
          </Typography>
         
        </CardContent>
        <CardMedia
          style={{marginTop:3}}
          component="img"
          height="320"
          image={image}
          alt="Image"
        />
        <Typography gutterBottom variant="h5" component="div">
            Description
          </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}....
        </Typography>
      </Card>
  
    </div>
  );
}
