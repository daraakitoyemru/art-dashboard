import PaintingFilter from "../components/PaintingFilter";
import ArtContext from "../context/ArtContext";
import { useContext } from "react";
const Paintings = () => {
  const { paintings, loading, error } = useContext(ArtContext);

  return (
    <div>
      <PaintingFilter title="Painting" data={paintings} />
    </div>
  );
};

export default Paintings;
