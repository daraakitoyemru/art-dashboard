import { useContext } from "react";
import List from "../components/List";
import ArtContext from "../context/ArtContext";

const formatArtistName = (data) => {
  const res = data.map((d) => `${d.firstName} ${d.lastName}`);
  return res;
};
const Artists = () => {
  const { artists, loading, error } = useContext(ArtContext);

  if (loading) {
    return (
      <div className="flex flex-col items-center mt-40">
        <img src="/loadingCircle.gif" alt="Loading..." className="w-20 h-20" />
        <div className="text-2xl text-center mt-4">Loading artists...</div>
      </div>
    );
  }
  if (error) return <div>Error: {error}</div>;

  // Sort artists by lastName
  const sortedArtists = [...artists].sort((a, b) =>
    a.lastName.localeCompare(b.lastName)
  );

  console.log(formatArtistName(sortedArtists));

  return (
    <div>
      <List title="Artist" data={sortedArtists} type="artists" />
    </div>
  );
};

export default Artists;
