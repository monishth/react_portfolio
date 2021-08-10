import React, { useState, useEffect } from 'react';

const url =
  'https://portfolio-images-mtclicks.s3.eu-west-2.amazonaws.com/images.json';
function Gallery() {
  const [isLoading, setIsLoading] = useState(true);
  const [images, setImages] = useState([]);

  const getImages = async () => {
    const response = await fetch(url);
    console.log(response.body);
    const imageData = await response.json();
    setImages(imageData.images);
    setIsLoading(false);
    console.log(imageData);
    console.log(images);

    console.log('lol');
  };

  useEffect(() => {
    getImages();
  });

  if (isLoading) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  } else {
    return (
      <div className="gallery-container">
        {images.map((image) => (
          <img className="image" src={image.url} alt={image.name}></img>
        ))}
      </div>
    );
  }
}

export default Gallery;
