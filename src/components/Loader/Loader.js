import Loader from "react-loader-spinner";

const GalleryLoader = () => {
    return <Loader
        type="ThreeDots"
        color="tomato"
        height={100}
        width={100}
        timeout={3000} //3 secs
      />
}

export default GalleryLoader


 