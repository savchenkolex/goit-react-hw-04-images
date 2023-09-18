import { getImages } from "./utils/api_pixabay";
import "./App.css";
import Searchbar from "./components/Searchbar/Searchbar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Button from "./components/Button/Button";
import Modal from "./components/Modal/Modal";
import Loader from "./components/Loader/Loader";
import { useState } from "react";
import { useEffect } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [maxPages, setMaxPages] = useState(0);
  const [hits, setHits] = useState([]);
  const [loading, setLoading] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [image, setImage] = useState("");
  const [alt, setAlt] = useState("");

  useEffect(() => {
    async function updateGallery() {
      setLoading(true);
      // Api handler
      try {
        const {
          data: { hits, total },
        } = await getImages(query, page);

        setLoading(false);
        setHits((prevHits) => {
          return [...prevHits, ...hits];
        });
        setMaxPages(total / 12);
      } catch (error) {
        console.error(error);
      }
    }

    if (!query) {
      return;
    }
    updateGallery();
  }, [query, page]);

  const setNewQuery = (query) => {
    setQuery(query);
    setHits([]);
    setPage(1);
  };

  const showModal = (img, alt) => {
    setModalOpen(true);
    setImage(img);
    setAlt(alt);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const loadMoreImages = () => {
    setPage((currentPage) => currentPage + 1);
  };

  return (
    <div className="App">
      <Searchbar queryHandler={setNewQuery} />
      {hits.length !== 0 && (
        <ImageGallery showModal={showModal} items={hits}/>
      )}
      {loading && <Loader />}
      {maxPages > page && <Button loadMoreImages={loadMoreImages} />}

      {modalOpen && <Modal image={image} alt={alt} closeModal={closeModal} />}
    </div>
  );
}

export default App;
