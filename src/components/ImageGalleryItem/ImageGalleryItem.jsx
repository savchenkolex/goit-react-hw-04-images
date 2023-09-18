import PropTypes from "prop-types";
import css from "./ImageGalleryItem.module.css";

export default function ImageGalleryItem({ webformatURL, tags, largeImageURL, showModal }) {
  
    return (
      <li className={css.ImageGalleryItem}>
        <img
          onClick={() => {
            showModal(largeImageURL, tags);
          }}
          data-bigimg={largeImageURL}
          className={css["ImageGalleryItem-image"]}
          src={webformatURL}
          alt={tags}
        />
      </li>
    );
  
}

ImageGalleryItem.propTypes = {
  items: PropTypes.array,
  showModal: PropTypes.func,
};
