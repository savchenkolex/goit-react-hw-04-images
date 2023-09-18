import css from "./ImageGallery.module.css";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";
import PropTypes from "prop-types";

export default function ImageGallery({ items, showModal }) {
  return (
    <ul className={css.ImageGallery}>
      {items.map(({ id, webformatURL, tags, largeImageURL }) => (
        <ImageGalleryItem
          showModal={showModal}
          key={id}
          webformatURL={webformatURL}
          tags={tags}
          largeImageURL={largeImageURL}
        />
      ))}
    </ul>
  );
}

ImageGallery.propTypes = {
  items: PropTypes.array,
  showModal: PropTypes.func,
};
