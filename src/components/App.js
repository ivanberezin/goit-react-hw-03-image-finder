import React, { Component } from 'react';

import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from "react-loader-spinner";
import Modal from './Modal/Modal';

import imagesApi from '../services/imagesApi';

class App extends Component {

  state = {
    images: [],
    searchQuery: '',
    page: 1,
    loading: false,
    largeImageURL: '',
  }

  componentDidUpdate(prevProps, prevState) {
    const prevQuery = prevState.searchQuery;
    const nextQuery = this.state.searchQuery;
    if (prevQuery !== nextQuery) {
      this.fetchImages();
    }
  }

  fetchImages = () => {
    const {searchQuery, page} = this.state;
    this.setState({loading: true})
    imagesApi
    .fetchImagesWithQuery(searchQuery, page)
    .then(images => this.setState(prevState => ({
      images: [...prevState.images, ...images],
      page: prevState.page + 1,
    })))
    .then(this.scroll)
    .catch(error => this.setState({error}))
    .finally(() => this.setState({loading: false})) 
  }

  handleBarSubmit = query => {
    this.setState({
      searchQuery: query,
      page: 1,
      images: [],
      showModal: false,
    })
  }

  scroll = () => {
    return window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  }

  toggleModal = () => {
    this.setState(state => ({showModal: !state.showModal}));
  }

  openModal = (largeImageURL) => {
    this.setState({showModal: true, largeImageURL: largeImageURL})
  }

  render () {
    const {images, loading, showModal, largeImageURL} = this.state;
    return (
      <div className="App">
        <Searchbar onSubmit={this.handleBarSubmit} />
        <ImageGallery images={images} onImageClick={this.openModal}/>
        {loading && <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} timeout={3000} />}
        {images.length !==0 && !loading && <Button clickOnBtn={this.fetchImages}/>}
        {showModal && 
          <Modal onClose={this.toggleModal} largeImageURL={largeImageURL}/>}
      </div>
    )
  }

}

export default App;