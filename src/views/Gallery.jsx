import List from "../components/List";
import ArtContext from "../context/ArtContext";
import { useContext } from "react";
const Gallery = () => {
  const { galleries, loading, error } = useContext(ArtContext);

  if (loading) {
    return (
      <div className="flex flex-col items-center mt-40">
        <img src="/loadingCircle.gif" alt="Loading..." className="w-20 h-20" />
        <div className="text-2xl text-center mt-4">Loading galleries...</div>
      </div>
    );
  }
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
