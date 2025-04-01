import ArtContext from "../context/ArtContext";
import { useContext } from "react";
import List from "../components/List";
const Genres = () => {
  const { genres, loading, error } = useContext(ArtContext);

  if (loading) return <div>Loading genres...</div>;
  if (error) return <div>Error: {error}</div>;

  const sortedGenres = [...genres].sort((a, b) =>
    a.genreName.localeCompare(b.genreName)
  );
  return (
    <div>
      this is the genres page
      <List title="Genre" data={sortedGenres} type="genres" />
    </div>
  );
};

export default Genres;
