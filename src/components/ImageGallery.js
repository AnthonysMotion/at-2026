// src/components/ImageGallery.js
import React, { useState } from 'react';
import './ImageGallery.css';

const ImageGallery = ({ images, numColumns = 4 }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const columns = Array.from({ length: numColumns }, () => []);

  images.forEach((img, i) => {
    columns[i % numColumns].push({ ...img, globalIndex: i });
  });

  return (
    <div className="image-gallery">
      {columns.map((column, colIndex) => (
        <div className="gallery-column" key={colIndex}>
          {column.map((img, imgIndex) => {
            const image = typeof img === 'string' ? { src: img } : img;
            const isHovered = hoveredIndex === image.globalIndex;
            const displaySrc = isHovered && image.hoverSrc ? image.hoverSrc : image.src;

            const imageTag = (
              <img
                src={displaySrc}
                alt={`img-${colIndex}-${imgIndex}`}
                key={imgIndex}
                loading="lazy"
                onMouseEnter={() => setHoveredIndex(image.globalIndex)}
                onMouseLeave={() => setHoveredIndex(null)}
              />
            );

            return image.link ? (
              <a
                href={image.link}
                key={imgIndex}
                target={image.link.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
              >
                {imageTag}
              </a>
            ) : (
              <div key={imgIndex}>{imageTag}</div>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
