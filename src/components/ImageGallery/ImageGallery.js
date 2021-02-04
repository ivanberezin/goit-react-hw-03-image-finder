import React from 'react';

import PropTypes from 'prop-types';

import './ImageGallery.css';

const ImageGalleryItem = ({smallImageURL, tags, largeImageURL, onImageClick}) => {
  return (
    <li className="ImageGalleryItem">
      <img src={smallImageURL} alt={tags} className="ImageGalleryItem-image" onClick={() => onImageClick(largeImageURL)}/>
    </li>
  )
}

const ImageGallery = ({images, onImageClick}) => {
  return (
    <ul className="ImageGallery">
      {images.map(({id, largeImageURL, webformatURL, tags}) => (
        <ImageGalleryItem key={id} smallImageURL={webformatURL} tags={tags} largeImageURL={largeImageURL} onImageClick={onImageClick}/>
      ))}
    </ul>
  )
}

ImageGalleryItem.propTypes = {
  smallImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onImageClick: PropTypes.func.isRequired,
}

ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      webformatURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired
    })
  ),
  onImageClick: PropTypes.func.isRequired,
}

export default ImageGallery;
