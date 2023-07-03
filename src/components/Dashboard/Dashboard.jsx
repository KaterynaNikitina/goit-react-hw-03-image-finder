import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { toast } from 'react-toastify';

import { fetchImages } from 'servises/image-api';

import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Loader } from 'components/Loader/Loader';
import { Button } from 'components/Button/Button';
import { Modal } from 'components/Modal/Modal';


export class Dashboard extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    loading: false,
    totalHits: 0,
    showModal: false,
    modalImage: '',
  };

  componentDidUpdate(prevProps, prevState) {
      if (
      this.state.query !== prevState.query ||
      this.state.page !== prevState.page
    ) {
      this.fetch();
    }

    if (this.state.query !== prevState.query) {
      setTimeout(() => {
        toast.info(`We found ${this.state.totalHits} images!`)
      },500)
    }
  }

  hadleFormSubmit = query => {
    this.setState({ query, images: [], page: 1 });
  };

  async fetch() {
    try {
      this.setState({ loading: true });
      const { page, query } = this.state;
      const { hits, totalHits } = await fetchImages(query, page);

      this.setState(({ images }) => ({
        images: [...images, ...hits],
        totalHits,
      }));
      
    } catch (error) {
    } finally {
      this.setState({ loading: false });
    }
  }

  handleLoadMoreClick = () => {
    this.setState(prevState => ({
      page: prevState.page + 1,
    }));
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({ showModal: !showModal }));
  };

  onShowModal = item => {
    this.setState({ modalImage: item, showModal: this.toggleModal });
  };

  render() {
    const { images, loading, totalHits, page, showModal, modalImage } = this.state;
    const totalPages = Math.ceil(totalHits / 12);
    return (
      <div className='Dashboard'>
        <Searchbar onSubmit={this.hadleFormSubmit} />
        <ImageGallery images={images} onShowModal={this.onShowModal} />
        {loading && <Loader />}
        {images.length > 0 && page < totalPages && (
          <Button text="Load More" onClick={this.handleLoadMoreClick} />
        )}
        {showModal && <Modal onClose={this.toggleModal} item={modalImage}/>}
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
        />
      </div>
    );
  }
}