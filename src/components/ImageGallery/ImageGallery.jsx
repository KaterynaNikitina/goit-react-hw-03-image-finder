
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { List } from 'components/ImageGallery/ImageGallery.styled'

import PropTypes from 'prop-types';

export const ImageGallery = ({ images, onShowModal }) => {
  return (
    <List>
      {images.map(image => (
        <ImageGalleryItem
          item={image}
          key={image.id}
          onShowModal={onShowModal}
        />
      ))}
    </List>
  );
};


ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
      tags: PropTypes.string.isRequired,
    })
  ),
  onShowModal: PropTypes.func.isRequired,
};