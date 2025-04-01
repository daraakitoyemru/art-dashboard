import List from "../components/List";
import ArtContext from "../context/ArtContext";
import { useContext } from "react";
const Gallery = () => {
  const { galleries, loading, error } = useContext(ArtContext);
  return (
    <div>
      <List title="Gallery" data={galleries} type="galleries" />
    </div>
  );
};

export default Gallery;
