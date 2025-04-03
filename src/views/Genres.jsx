import ArtContext from "../context/ArtContext";
import { useContext } from "react";
import List from "../components/List";
const Genres = () => {
  const { genres, loading, error } = useContext(ArtContext);

  if (loading) return;
  <div>
    <div className="text-2xl text-center mt-50">Loading genres...</div>; if
    (error) return <div>Error: {error}</div>;
  </div>;

  const sortedGenres = [...genres].sort((a, b) =>
    a.genreName.localeCompare(b.genreName)
  );
  return (
    <div>
      <List title="Genre" data={sortedGenres} type="genres" />
    </div>
  );
};

export default Genres;
