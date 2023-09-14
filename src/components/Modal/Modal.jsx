import PropTypes from "prop-types";
import css from "./Modal.module.css";
import { useEffect } from "react";

export default function Modal(props) {
  const modalKeyboardHandler = (event) => {
    if (event.code === "Escape") {
      props.closeModal();
    }
  };

  const modalMouseHandler = (event) => {
    if (event.target.nodeName === "IMG") {
      return;
    }
    props.closeModal();
  };

  useEffect(() => {
    document.addEventListener("keydown", modalKeyboardHandler);

    return () => {
      document.removeEventListener("keydown", modalKeyboardHandler);
    };
  });

  return (
    <div className={css.Overlay} onClick={modalMouseHandler}>
      <div className={css.Modal}>
        <img src={props.image} alt={props.alt} />
        <div>
          <p>{props.alt}</p>
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
