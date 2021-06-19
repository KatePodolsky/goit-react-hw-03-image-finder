import React, { Component } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Searchbar from "./components/Searchbar/Searchbar";
import Button from "./components/Button/Button";
import galleryApi from "./services/galleryApi";
import GalleryLoader from "./components/Loader/Loader";
import Modal from "./components/Modal/Modal";

import "./App.module.css"

class App extends Component {
  state = {
    images: [],
    currentPage: 1,
    searchQuery: '',
    isLoading: false,
    error: null,
    showModal: false,
    selectedImage:'',
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.searchQuery !== this.state.searchQuery) {
      this.fetchImages();
    }
  }

  onOpenModal = e => {
    this.setState({
      selectedImage: e.target.dataset.source,
      showModal: true,
    })
  }

  onCloseModal = e => {
      this.setState({
        selectedImage: '',
        showModal: false,
      });
    };

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
    const { images, isLoading, showModal, selectedImage, error } = this.state;
    const shouldRenderLoadMoreButton = images.length > 0 && !isLoading;

    return (
      <>
      <Searchbar onSubmit={this.onChangeQuery} />
      {error&&<p>There was a problem with your request! Please, try again</p>}
      <ImageGallery images={images} openModal={this.onOpenModal} />
      {isLoading && <GalleryLoader />}
      {shouldRenderLoadMoreButton && 
          <Button fetchImages={this.fetchImages} />}
      {showModal && <Modal onClose={this.onCloseModal}>
        <img src={selectedImage} alt="" />
      </Modal>}
      </>
    )    
    }
}

export default App;