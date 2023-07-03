import React, { Component } from 'react';

import { createPortal } from 'react-dom';
// import { Overlay, ImageWrapper } from 'components/Modal/Modal.styled';
import { Overlay, ImageWrapper } from './Modal.styled';

import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.habdleEscPress);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.habdleEscPress);
  }

  habdleEscPress = ({ code }) => {
    if (code === 'Escape') {
      this.props.onClose();
    }
  };

  handleBackdropClick = ({ currentTarget, target }) => {
    if (currentTarget === target) {
      this.props.onClose();
    }
  };

  render() {
    const {
      item: { largeImageURL, tags },
    } = this.props;
    return createPortal(
      <Overlay onClick={this.handleBackdropClick}>
        <ImageWrapper>
          <img src={largeImageURL} alt={tags} />
        </ImageWrapper>
      </Overlay>,
      modalRoot
    );
  }
}

Modal.propTypes = {
  item: PropTypes.object.isRequired,
  onClose: PropTypes.func.isRequired,
};