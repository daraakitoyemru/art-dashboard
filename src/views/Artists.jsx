import { useContext } from "react";
import List from "../components/List";
import ArtContext from "../context/ArtContext";

const formatArtistName = (data) => {
  const res = data.map((d) => `${d.firstName} ${d.lastName}`);
  return res;
};
const Artists = () => {
  const { artists, loading, error } = useContext(ArtContext);

  if (loading) return <div>Loading artists...</div>;
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
