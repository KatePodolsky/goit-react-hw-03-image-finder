import React from "react";
import styles from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({image:{webformatURL,tags}}) => (
    <li className={styles.ImageGalleryItem}>
        <img src={webformatURL} alt={tags} className={styles.ImageGalleryItemImage}/>
    </li>
)

export default ImageGalleryItem