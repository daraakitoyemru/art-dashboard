import List from "../components/List";
import ArtContext from "../context/ArtContext";
import { useContext } from "react";
const Gallery = () => {
  const { galleries, loading, error } = useContext(ArtContext);

  if (loading) return <div>Loading galleries...</div>;
  if (error) return <div>Error: {error}</div>;

  const sortedGalleries = [...galleries].sort((a, b) =>
    a.galleryName.localeCompare(b.galleryName)
  );

  return (
    <div>
      <List title="Gallery" data={sortedGalleries} type="galleries" />
    </div>
  );
};

export default Gallery;
