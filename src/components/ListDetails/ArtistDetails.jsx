import { useState, useContext } from "react";
import ArtContext from "../../context/ArtContext.jsx";
import Card from "../Card";
import FavButton from "../FavButton.jsx";
import FavoritesContext from "../FavoritesContext";

const ArtistDetails = ({ artist }) => {
  const { addArtist } = useContext(FavoritesContext);
  const { paintings } = useContext(ArtContext);
  const [sortBy, setSortBy] = useState("Painting Name");

  const artistPaintings = paintings
    .filter((p) => p.artists.artistId === artist.artistId)
    .sort((a, b) => {
      if (sortBy === "Year") {
        return a.yearOfWork - b.yearOfWork;
      } else {
        return a.title.localeCompare(b.title);
      }
    });

  return (
    <div className="mt-8 w-full max-w-7xl bg-white bg-opacity-60 rounded-xl shadow-lg p-8 text-left">
      <div className="flex flex-col sm:flex-row gap-8 items-start">
        <img
          src={`/artists/full/${artist.artistId}.jpg`}
          alt={`${artist.firstName} ${artist.lastName}`}
          className="w-48 object-cover rounded-lg shadow-md"
        />

        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h2 className="text-3xl font-bold mb-4">
              {artist.firstName} {artist.lastName}
            </h2>
            <button
              onClick={() =>
                addArtist(`${artist.firstName} ${artist.lastName}`)
              }
              className="btn bg-[#4B3A2C] text-white hover:opacity-90 px-4 py-2 rounded-md"
            >
              ☆ Add to Favorites
            </button>
            <FavButton />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-lg">
            <p>
              <span className="font-semibold">Nationality:</span>{" "}
              {artist.nationality}
            </p>
            <p>
              <span className="font-semibold">Gender:</span> {artist.gender}
            </p>
            <p>
              <span className="font-semibold">Year of Birth:</span>{" "}
              {artist.yearOfBirth}
            </p>
            <p>
              <span className="font-semibold">Year of Death:</span>{" "}
              {artist.yearOfDeath}
            </p>
          </div>

          {artist.details && (
            <div>
              <p className="mt-6 text-base leading-relaxed">
                <span className="font-semibold">Details:</span> {artist.details}
              </p>
              <p className="mt-4 text-base">
                <span className="font-semibold">More Info:</span>{" "}
                <a
                  href={artist.artistLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-800 underline break-words"
                >
                  {artist.artistLink}
                </a>
              </p>
            </div>
          )}
        </div>
      </div>

      {/* paintings for selected artist */}
      <div className="mt-10 border-t border-[#4B3A2C] pt-6">
        <h3 className="text-2xl font-semibold mb-6 text-[#4B3A2C] text-center">
          Paintings
        </h3>
        <label className="mr-2 text-[#4B3A2C] font-semibold">Sorted by: </label>
        <select
          className="border rounded px-2 py-1 mb-6"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option>Painting Name</option>
          <option>Year</option>
        </select>

        {(() => {
          if (artistPaintings.length === 0) {
            return (
              <p className="text-[#4B3A2C]">
                No paintings found for this artist.
              </p>
            );
          }

          return (
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {artistPaintings.map((painting) => (
                <Card
                  key={painting.paintingId}
                  type="paintings"
                  fileName={painting.imageFileName}
                  title={painting.title}
                  name={`${artist.firstName} ${artist.lastName}`}
                  year={painting.yearOfWork}
                  colourData={painting.jsonAnnotations}
                  id={painting.paintingId}
                  height={painting.height}
                  width={painting.width}
                  medium={painting.medium}
                  description={painting.description}
                  galleryName={painting.galleries.galleryName}
                  galleryCity={painting.galleries.galleryCity}
                  galleryCountry={painting.galleries.galleryCountry}
                />
              ))}
            </ul>
          );
        })()}
      </div>
    </div>
  );
};

export default ArtistDetails;
