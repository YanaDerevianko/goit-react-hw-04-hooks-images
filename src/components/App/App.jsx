import { useState, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
import { fetchImages } from "../../services/api";
import { AppDiv } from "./App.styled";
import { Searchbar } from "../Searchbar/Searchbar";
import { ImageGallery } from "../ImageGallery/ImageGallery";
import { Button } from "../Button/Button";
import { Modal } from "../Modal/Modal";
import { MyLoader } from "../Loader/Loader";

export function App() {
  const [imageName, setImageName] = useState(null);
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const loadMore = () => {
    toggleLoaderVisible();
     setPage(page + 1);
  };

  const toggleLoaderVisible = () => {
    setLoading((prevLoading) => !prevLoading);
  };
  const closeModal = () => {
    setSelectedImage(null);
  };

  const handleSelectedImage = (src, alt) => {
    setSelectedImage({ src, alt });
  };

  const handleFormSubmit = (imageName) => {
    toggleLoaderVisible();
    setImageName(imageName);
    
  };

  useEffect(async () => {
    if (!imageName) {
      return;
    }
    const images = await fetchImages(imageName);
    toggleLoaderVisible();
    setImages(images);
  }, [imageName]);

  useEffect(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
    if (imageName) {
      try {
        fetchImages(imageName, page).then((images) => {
          setImages((prevState) => [...prevState, ...images]);
          toggleLoaderVisible();
        });
      } catch (error) {}
    }
  }, [page]);

  return (
    <AppDiv>
      <Searchbar onSearch={handleFormSubmit} />
      {images.length > 0 && (
        <ImageGallery images={images} onSelect={handleSelectedImage} />
      )}
      {loading && <MyLoader />}
      {images.length > 0 && <Button onClick={loadMore} />}
      {selectedImage && (
        <Modal closeModal={closeModal} selectedImage={selectedImage} />
      )}
      <Toaster position="top-right" />
    </AppDiv>
  );
}
