import css from './ImageGallery.module.css';

export default function ImageGallery({ children }) {
  return <ul className={css.ImageGallery}>{children}</ul>;
}
