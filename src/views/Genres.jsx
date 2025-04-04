import ArtContext from "../context/ArtContext";
import { useContext } from "react";
import List from "../components/List";
const Genres = () => {
  const { genres, loading, error } = useContext(ArtContext);

  if (loading) {
    return (
      <div className="flex flex-col items-center mt-40">
        <img src="/loadingCircle.gif" alt="Loading..." className="w-20 h-20" />
        <div className="text-2xl text-center mt-4">Loading genres...</div>
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
