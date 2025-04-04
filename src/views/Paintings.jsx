import PaintingFilter from "../components/PaintingFilter";
import ArtContext from "../context/ArtContext";
import { useContext } from "react";
import Card from "../components/Card";
const Paintings = () => {
  const { paintings } = useContext(ArtContext);

  const data = paintings;

  return (
    <div className="bg-[#F8F0EB]">
      <div>
        <PaintingFilter title="Painting" data={paintings} />
      </div>
      <div className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-4 gap-4 relative z-0">
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
                height={d.height}
                width={d.width}
                medium={d.medium}
                description={d.description}
                galleryName={d.galleries.galleryName}
                galleryCity={d.galleries.galleryCity}
                galleryCountry={d.galleries.galleryCountry}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Paintings;
