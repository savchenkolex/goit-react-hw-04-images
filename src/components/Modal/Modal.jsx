import PropTypes from "prop-types";
import css from "./Modal.module.css";
import { useEffect } from "react";

export default function Modal({closeModal, image, alt}) {
  

  const modalMouseHandler = (event) => {
    if (event.target.nodeName === "IMG") {
      return;
    }
    closeModal();
  };

  useEffect(() => {

    const modalKeyboardHandler = (event) => {
      if (event.code === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", modalKeyboardHandler);

    return () => {
      document.removeEventListener("keydown", modalKeyboardHandler);
    };
  },[closeModal]);

  return (
    <div className={css.Overlay} onClick={modalMouseHandler}>
      <div className={css.Modal}>
        <img src={image} alt={alt} />
        <div>
          <p>{alt}</p>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  closeModal: PropTypes.func,
  image: PropTypes.string,
  alt: PropTypes.string,
};
