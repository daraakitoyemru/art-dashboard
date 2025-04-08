import PaintingFilter from "../components/PaintingFilter";
import ArtContext from "../context/ArtContext";
import { useContext, useState, useEffect } from "react";
import Card from "../components/Card";

const Paintings = () => {
  const { paintings, loading } = useContext(ArtContext);

  const [showPaintings, setShowPaintings] = useState([]);

  useEffect(() => {
    if (!loading && paintings) {
      setShowPaintings(paintings);
    }
  }, [paintings, loading]);

  const handleFilters = (filterType, value) => {
    if (!paintings) return;

    let filtered = [...paintings];

    if (filterType === "title" && value) {
      filtered = filtered.filter((p) =>
        p.title.toLowerCase().includes(value.toLowerCase())
      );
    } else if (filterType === "artist" && value) {
      filtered = filtered.filter(
        (p) => `${p.artists.firstName} ${p.artists.lastName}` === value
      );
    } else if (filterType === "gallery" && value) {
      filtered = filtered.filter((p) => p.galleries.galleryName === value);
    } else if (filterType === "year" && value) {
      const fromYear = parseInt(value.from) || 0;
      const toYear = parseInt(value.to) || 3000;
      filtered = filtered.filter(
        (p) => p.yearOfWork >= fromYear && p.yearOfWork <= toYear
      );
    }

    setShowPaintings(filtered);
  };

  const clearFilter = () => {
    setShowPaintings(paintings || []);
  };

  return (
    <div className="bg-[#F8F0EB]">
      <div>
        <PaintingFilter
          title="Filter Paintings"
          data={paintings}
          applyFilters={handleFilters}
          clearFilters={clearFilter}
        />
      </div>

      <div className="max-w-8xl mx-auto px-8 py-4">
        <div className="mb-4 text-sm text-gray-600">
          Showing {showPaintings.length} of {paintings?.length || 0} paintings
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 relative z-0">
          {showPaintings.map((d) => {
            const fileName = d.imageFileName;
            return (
              <Card
                type="paintings"
                fileName={fileName}
                title={d.title}
                name={`${d.artists.firstName} ${d.artists.lastName}`}
                year={d.yearOfWork}
                id={d.paintingId}
                key={d.paintingId}
                height={d.height}
                width={d.width}
                medium={d.medium}
                wikiLink={d.wikiLink}
                copyrightText={d.copyrightText}
                colourData={d.jsonAnnotations}
                museumLink={d.museumLink}
                description={d.description}
                galleryName={d.galleries.galleryName}
                galleryCity={d.galleries.galleryCity}
                galleryCountry={d.galleries.galleryCountry}
              />
            );
          })}
        </div>

        {showPaintings.length === 0 && (
          <div className="text-center py-10">
            <p className="text-lg text-gray-600">No paintings found</p>
            <button
              onClick={clearFilter}
              className="mt-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Paintings;
