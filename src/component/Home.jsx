import React, { useState } from 'react';
import { Carousel } from 'react-carousel-minimal';

export default function Home ({movie,isSelect}) {
    console.log(movie," film")
    let data = movie
      const captionStyle = {
        fontSize: '2em',
        fontWeight: 'bold',
      }
      const slideNumberStyle = {
        fontSize: '20px',
        fontWeight: 'bold',
      }
      // React.useEffect(()=>{
       
      //  movie.map(e=>{
      //      data.push({
      //       image:"https://image.tmdb.org/t/p/w500/"+e.poster_path,
      //       caption:e.title
      //      })
      //  })
      // },[])
      return (
        <div className="App">
          <div style={{ textAlign: "center" }}>
            <h2>Autres films</h2>
           
            <div style={{
              padding: "0 20px"
            }}>
             {
               data && data.length>0 &&
               (
                <Carousel
                data={data}
                time={2000}
                width="850px"
                height="500px"
                captionStyle={captionStyle}
                radius="10px"
                slideNumber={true}
                slideNumberStyle={slideNumberStyle}
                captionPosition="bottom"
                automatic={true}
                dots={true}
                pauseIconColor="white"
                pauseIconSize="40px"
                slideBackgroundColor="darkgrey"
                slideImageFit="cover"
                thumbnails={true}
                thumbnailWidth="100px"
                style={{
                  textAlign: "center",
                  maxWidth: "850px",
                  maxHeight: "500px",
                  margin: "40px auto",
                }}
              />
               )
             }
            </div>
          </div>
        </div>
      );
    }

