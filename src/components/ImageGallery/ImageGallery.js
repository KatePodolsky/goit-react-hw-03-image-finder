import React from "react";
// import PropTypes from 'prop-types';
import styles from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem"

const ImageGallery = ({ images }) => (
        <ul className={styles.ImageGallery}>
            {images.map((image) => (
                <ImageGalleryItem key={image.id} image={image} />
        ))}
        </ul>
)

// ImageGallery.propTypes = {
//     images: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         webformatUR: PropTypes.string.isRequired,
//         largeImageURL: PropTypes.string.isRequired,
//     })).isRequired,
// }

export default ImageGallery;