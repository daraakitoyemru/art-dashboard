import Card from "../Card";
import FavButton from "../FavButton.jsx";
import { useState, useContext } from "react";
import ArtContext from "../../context/ArtContext.jsx";

const GenreDetails = ({ genre }) => {
  const [sortBy, setSortBy] = useState("Painting Name");
  const { paintings } = useContext(ArtContext);

  const genrePaintings = [...genre.paintings].sort((a, b) => {
    if (sortBy === "Artist Name") {
      const nameA = `${a.artists.firstName} ${a.artists.lastName}`;
      const nameB = `${b.artists.firstName} ${b.artists.lastName}`;
      return nameA.localeCompare(nameB);
    } else if (sortBy === "Year") {
      return a.yearOfWork - b.yearOfWork;
    } else {
      return a.title.localeCompare(b.title);
    }
  });

  return (
    <div className="mt-8 w-full max-w-7xl bg-white bg-opacity-60 rounded-xl shadow-lg p-8 text-left">
      <div className="flex flex-col sm:flex-row gap-8 items-start">
        <img
          src={`/genres/${genre.genreId}.jpg`}
          alt={`${genre.genreName}`}
          className="w-48 object-cover rounded-lg shadow-md"
        />

        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h2 className="text-3xl font-bold mb-4 text-[#4B3A2C]">
              {genre.genreName}
            </h2>
          </div>

          {genre.description && (
            <p className="text-base leading-relaxed mt-4 text-[#4B3A2C]">
              <span className="font-semibold">Description:</span>{" "}
              {genre.description}
            </p>
          )}

          {genre.wikiLink && (
            <p className="text-base text-[#4B3A2C]">
              <span className="font-semibold">More Info:</span>{" "}
              <a
                href={genre.wikiLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-800 underline break-words"
              >
                {genre.wikiLink}
              </a>
            </p>
          )}
        </div>
      </div>
      <div className="mt-10 border-t border-[#4B3A2C] pt-6">
        <h3 className="text-2xl font-semibold mb-6 text-[#4B3A2C] text-center">
          Paintings
        </h3>{" "}
        <label className="mr-2 text-[#4B3A2C] font-semibold">Sorted by: </label>
        <select
          className="border rounded px-2 py-1 mb-6"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option>Painting Name</option>
          <option>Artist Name</option>
          <option>Year</option>
        </select>
        {genrePaintings.length > 0 ? (
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {genrePaintings.map((painting) => (
              <Card
                key={painting.paintingId}
                type="paintings"
                fileName={painting.imageFileName}
                title={painting.title}
                name={`${painting.artists.firstName} ${painting.artists.lastName}`}
                year={painting.yearOfWork}
                id={painting.paintingId}
                height={painting.height}
                width={painting.width}
                medium={painting.medium}
                wikiLink={painting.wikiLink}
                colourData={painting.jsonAnnotations}
                museumLink={painting.museumLink}
                description={painting.description}
                galleryName={painting.galleries.galleryName}
                galleryCity={painting.galleries.galleryCity}
                galleryCountry={painting.galleries.galleryCountry}
              />
            ))}
          </ul>
        ) : (
          <p className="text-[#4B3A2C]">No paintings found for this genre.</p>
        )}
      </div>
    </div>
  );
};

export default GenreDetails;
