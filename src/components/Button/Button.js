import React from "react";
// import PropTypes from 'prop-types';
import styles from "./Button.module.css";


const Button = ({ fetchImages }) => (
        <button type="button"className={styles.Button} onClick={fetchImages}>
        Load more
        </button>
)

// ImageGallery.propTypes = {
//     images: PropTypes.arrayOf(PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         webformatUR: PropTypes.string.isRequired,
//         largeImageURL: PropTypes.string.isRequired,
//     })).isRequired,
// }

export default Button;