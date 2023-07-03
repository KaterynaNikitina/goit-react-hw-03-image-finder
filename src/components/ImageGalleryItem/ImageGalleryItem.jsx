import PropTypes from 'prop-types';

import {
  Item,
  Image,
} from 'components/ImageGalleryItem/ImageGalleryItem.styled';

export const ImageGalleryItem = ({
  item: { largeImageURL, webformatURL, tags },
  onShowModal,
}) => {
  return (
    <Item>
      <Image
        src={webformatURL}
        alt={tags}
        onClick={() => onShowModal({ largeImageURL, tags })}
      />
    </Item>
  );
};

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    largeImageURL: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }),
  onShowModal: PropTypes.func.isRequired,
};