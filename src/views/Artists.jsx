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

  console.log(formatArtistName(artists));

  return (
    <div>
      <List title="Artist" data={artists} type="artists" />
    </div>
  );
};

export default Artists;
