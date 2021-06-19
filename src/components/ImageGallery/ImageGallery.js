import React from "react";
import PropTypes from 'prop-types';
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem"
import defaulFoto from "./Default_image.jpg";

import styles from "./ImageGallery.module.css";

const ImageGallery = ({ images, openModal }) => (
        <ul className={styles.ImageGallery}>
            {images.map((image) => (
                    <ImageGalleryItem key={image.id} image={image} openModal={openModal} />
        ))}
        </ul>
)

ImageGallery.defaultProps = {
        webformatUR: defaulFoto,
        largeImageURL: defaulFoto,
        tags:'No image available'
}

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        webformatUR: PropTypes.string,
        largeImageURL: PropTypes.string,
        tags: PropTypes.string,
    })).isRequired,
}

export default ImageGallery;