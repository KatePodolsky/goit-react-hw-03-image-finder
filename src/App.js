import React, { Component } from "react";

// import PropTypes from "prop-types";

import ImageGallery from "./components/ImageGallery/ImageGallery";
import Searchbar from "./components/Searchbar/Searchbar";
import Button from "./components/Button/Button";
import galleryApi from "./services/galleryApi"
import GalleryLoader from "./components/Loader/Loader"

import styles from "./App.module.css"

class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error:null,
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  onChangeQuery = query => {
    this.setState({
      searchQuery: query,
      images: [],
      currentPage: 1,
      isLoading: false,
      error:null,
    });
    
  }
  
  fetchImages = () => {
    const { currentPage, searchQuery } = this.state;
    const options = { searchQuery, currentPage }
    
    this.setState({ isLoading: true });

    galleryApi.fetchImages(options)
      .then(hits => {
        this.setState(prevState => ({
          images: [...prevState.images, ...hits],
          currentPage: prevState.currentPage + 1,
        }))
      })
      .catch(error=>this.setState({error}))
      .finally(() => this.setState({ isLoading: false }));
    
    setTimeout(() => {
        window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
    });
    }, 500);
  }

  render() {
    const { images, isLoading } = this.state;
    const shouldRenderLoadMoreButton = images.length > 0 && !isLoading;

    return (
      <>
      <Searchbar onSubmit={this.onChangeQuery}/>
      <ImageGallery images={images} />
      {isLoading && <GalleryLoader />}
      {shouldRenderLoadMoreButton && 
        <Button fetchImages={this.fetchImages} />}
      </>
    )    
    }
}

export default App;