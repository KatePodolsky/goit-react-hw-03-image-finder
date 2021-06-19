import Loader from "react-loader-spinner";
import styles from "./Loader.module.css";


const GalleryLoader = () => {
  return <Loader
    type="ThreeDots"
    color="tomato"
    height={100}
    width={100}
    timeout={3000} //3 secs
    className={styles.Loader}
      />
}

export default GalleryLoader


 