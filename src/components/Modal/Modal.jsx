import { useEffect, useCallback } from "react";
import { Overlay, ModalWindow } from "./Modal.styled";
import PropTypes from "prop-types";

export function Modal({ selectedImage: { src, alt }, closeModal }) {
  const handleKeyPress = useCallback(
    (e) => {
      if (e.key === "Escape") {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);
    document.body.className = "noScroll";
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
      document.body.className = "";
    };
  }, [handleKeyPress]);

  const handleOverlayClick = (e) => {
    if (e.target.nodeName !== "IMG") {
      closeModal();
    }
  };

  return (
    <Overlay onClick={handleOverlayClick}>
      <ModalWindow>
        <img src={src} alt={alt} />
      </ModalWindow>
    </Overlay>
  );
}

Modal.propTypes = {
  closeModal: PropTypes.func.isRequired,
  selectedImage: PropTypes.object,
};
