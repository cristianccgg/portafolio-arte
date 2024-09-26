import React from "react";
import { useParams } from "react-router-dom";
import artworks from "../artworks.json";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PurchaseForm from "./PurchaseForm";

const ArtworkDetail = () => {
  const { id } = useParams();
  const artwork = artworks.find((art) => art.id === parseInt(id));

  if (!artwork) {
    return <div>Artwork not found!</div>;
  }

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
  };

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <div className="p-5 max-w-5xl flex flex-col  w-full items-center">
        <div className="slider-container max-w-4xl w-full">
          <h1 className="text-3xl font-bold text-center mb-4">
            {artwork.title}
          </h1>
          <Slider {...settings}>
            {artwork.images.map((image, index) => (
              <div key={index}>
                <img
                  src={image}
                  alt={`Slide ${index + 1}`}
                  className="w-full max-h-96 object-contain"
                />
              </div>
            ))}
          </Slider>
          <p className="mt-20 font-bold">Technique: {artwork.technique}</p>
          <p className="mt-4 font-bold">Dimensions: {artwork.measures}</p>
          <p className="mt-4">{artwork.description}</p>
          <p className="mt-4 font-bold">Price: ${artwork.price} USD</p>
        </div>
        <PurchaseForm artwork={artwork} className="sm:w-full" />
      </div>
    </div>
  );
};

export default ArtworkDetail;
