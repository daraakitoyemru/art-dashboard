import PaintingFilter from "../components/PaintingFilter";
import ArtContext from "../context/ArtContext";
import { useContext } from "react";
import Card from "../components/Card";
const Paintings = () => {
  const { paintings } = useContext(ArtContext);

  const data = paintings;

  return (
    <div className="bg-white">
      <div>
        <PaintingFilter title="Painting" data={paintings} />
      </div>
      <div className="max-w-8xl mx-auto px-8">
        <div className="grid grid-cols-5 gap-4 relative z-0">
          {data.map((d) => {
            let filename = String(d.imageFileName).padStart(6, "0");
            return (
              <Card
                type="paintings"
                fileName={filename}
                title={d.title}
                name={`${d.artists.firstName} ${d.artists.lastName}`}
                year={d.yearOfWork}
                id={d.paintingId}
                key={d.paintingId}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Paintings;
