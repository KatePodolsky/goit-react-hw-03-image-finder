import React from "react";
import styles from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({image:{webformatURL,largeImageURL,tags}, openModal}) => (
    <li className={styles.ImageGalleryItem} onClick={openModal} >
        <img
            src={webformatURL}
            data-source={largeImageURL}
            alt={tags}
            className={styles.ImageGalleryItemImage} />
    </li>
)

export default ImageGalleryItem