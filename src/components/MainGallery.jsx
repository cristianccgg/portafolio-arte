import React from "react";
import artworks from "../artworks.json";
import { useNavigate } from "react-router-dom";

const MainGallery = () => {
  const navigate = useNavigate();

  const handleImageClick = (id) => {
    navigate(`/artwork/${id}`);
  };

  return (
    <div>
      <h1 className="text-center text-2xl sm:text-4xl font-bold text-[#13212e] mt-5 ">
        Recent Artworks
      </h1>
      <h2 className="text-center">
        Click on the images for more details and prices
      </h2>
      <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center">
        {artworks.map((artwork) => (
          <div
            key={artwork.id}
            className="shadow-xl m-5 md:mb-[40px] relative group"
          >
            <img
              className="md:max-w-64 h-full w-full object-cover rounded-t-lg sm:rounded-lg cursor-pointer "
              src={artwork.images[0]}
              alt={artwork.title}
            />
            {/* Condición para mostrar el mensaje de "Vendido" */}
            {artwork.sold && (
              <div className="absolute top-2 left-2 bg-red-500  text-white text-sm font-bold px-4 py-4 rounded-lg">
                Sold out
              </div>
            )}
            <div
              onClick={() => handleImageClick(artwork.id)}
              className="absolute inset-0 flex items-center justify-center cursor-pointer opacity-0 group-hover:opacity-100 transition-opacity bg-black bg-opacity-50 rounded-lg"
            >
              <span className="text-white text-lg font-bold">
                Click for more details
              </span>
            </div>
            <h3 className="text-center mt-2 font-bold">{artwork.title}</h3>
            <p className="text-center flex flex-col">{artwork.measures1}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainGallery;
