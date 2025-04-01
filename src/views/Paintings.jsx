import List from "../components/List";
import ArtContext from "../context/ArtContext";
import { useContext } from "react";
const Paintings = () => {
  const { paintings, loading, error } = useContext(ArtContext);

  return (
    <div>
      <List title="Painting" data={paintings} type="paintings" />
    </div>
  );
};

export default Paintings;
