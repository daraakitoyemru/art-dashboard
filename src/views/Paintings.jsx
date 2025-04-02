import PaintingFilter from "../components/PaintingFilter";
import ArtContext from "../context/ArtContext";
import { useContext } from "react";
import Card from "../components/Card";
const Paintings = () => {
  const { paintings } = useContext(ArtContext);

  const data = paintings;
  return (
    <>
      <div>
        <PaintingFilter title="Painting" data={paintings} />
      </div>
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-4 gap-4 relative z-0">
          {data.map((d) => {
            let filename = d.imageFileName
              ? `0${d.imageFileName}` || d.imageFileName
              : `00${d.imageFileName}`;
            return (
              <Card
                type="paintings"
                fileName={filename}
                title={d.title}
                name={`${d.artists.firstName} ${d.artists.lastName}`}
                year={d.yearOfWork}
                key={d.id}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Paintings;
