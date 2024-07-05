import React from 'react'
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const ImageDisplay = ({ images }) => {
  const imagesGallery = images ? images.map(img => ({ original: img})) : [];

  const galleryProps = {
    showNav: true,
    showPlayButton: false,
    showFullscreenButton: false,
    renderItem: (item) => {
      return (
        <div className="image-gallery-image">
          <img src={item.original} style={{ maxHeight: "250px", objectFit: "contain", width: "100%" }} />
        </div>
      );
    }
  };

  return (
    <ImageGallery items={imagesGallery} {...galleryProps}/>
  )
}

export default ImageDisplay