import React, { useState, useEffect, useRef, useCallback } from 'react';
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import "./GalleryPage.css";

const images = [
  '1', '3', '5', '6', '7',
  '8', '9', '10', '12', '13', '14'
];

const slides = images.map(name => ({
  src: `/${name}.jpg`
}));

const thumbnails = images.map(name => ({
  src: `/${name}.webp`,
  alt: `Gallery image ${name}`
}));

// Optimized Image Component with Intersection Observer
const LazyImage = ({ src, alt, onClick, index }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '50px', // Start loading 50px before entering viewport
        threshold: 0.01
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, []);

  const handleLoad = useCallback(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div 
      ref={imgRef} 
      className={`grid-thumbnail-wrapper ${isLoaded ? 'loaded' : ''}`}
      onClick={onClick}
    >
      {!isLoaded && <div className="skeleton-loader" />}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`grid-thumbnail ${isLoaded ? 'visible' : ''}`}
          onLoad={handleLoad}
          loading="lazy"
          decoding="async"
        />
      )}
    </div>
  );
};

function GalleryPage() {
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    document.title = "Geek Room - Gallery";
  }, []);

  const handleImageClick = useCallback((idx) => {
    setIndex(idx);
  }, []);

  const handleClose = useCallback(() => {
    setIndex(-1);
  }, []);

  return (
    <div className="gallery-wrapper">
      <h1 className="gallery-title">Our Gallery</h1>
      <p className="gallery-subtitle">A glimpse into our community, events, and workshops.</p>
      
      <div className="image-grid">
        {thumbnails.map((thumb, idx) => (
          <LazyImage
            key={idx}
            src={thumb.src}
            alt={thumb.alt}
            onClick={() => handleImageClick(idx)}
            index={idx}
          />
        ))}
      </div>

      <Lightbox
        open={index >= 0}
        close={handleClose}
        slides={slides}
        index={index}
      />
    </div>
  );
}

export default GalleryPage;