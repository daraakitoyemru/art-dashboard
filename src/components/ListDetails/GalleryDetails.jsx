import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import { useMap } from "react-leaflet";
import { useContext } from "react";
import { useState } from "react";
import ArtContext from "../../context/ArtContext.jsx";
import Card from "../Card";
import FavoritesContext from "../FavoritesContext";
// import FavButton from "../FavButton.jsx";

const MapUpdater = ({ lat, lng }) => {
  const map = useMap();

  useEffect(() => {
    if (lat && lng) {
      map.setView([lat, lng], 13);
    }
  }, [lat, lng, map]);

  return null;
};

const GalleryDetails = ({ gallery }) => {
  const { favoriteGalleries, addGallery } = useContext(FavoritesContext);
  const { paintings } = useContext(ArtContext);
  const [sortBy, setSortBy] = useState("Painting Name");
  const isFavorited = favoriteGalleries.includes(gallery.galleryName);

  const galleryPaintings = paintings
    .filter((p) => p.galleries.galleryId === gallery.galleryId)
    .sort((a, b) => {
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
      <div className="flex flex-col lg:flex-row gap-10">
        {/* map which updates when new gallery selected */}
        <div className="relative z-0  w-full lg:w-[300px] h-[300px] flex-shrink-0 rounded-lg overflow-hidden">
          <MapContainer
            center={[gallery.latitude, gallery.longitude]}
            zoom={13}
            scrollWheelZoom={true}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <MapUpdater lat={gallery.latitude} lng={gallery.longitude} />

            <Marker position={[gallery.latitude, gallery.longitude]}>
              <Popup>
                {gallery.galleryName}
                <br />
                {gallery.galleryCity}
              </Popup>
            </Marker>
          </MapContainer>
        </div>

        {/* gallery info */}
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h2 className="text-3xl font-bold mb-4 text-[#4B3A2C]">
              {gallery.galleryName}
            </h2>
            <button
              onClick={() => {
                if (!isFavorited) {
                  addGallery(gallery.galleryName);
                }
              }}
              className={`btn px-4 py-2 rounded-md ${
                isFavorited
                  ? "bg-gray-300 text-gray-600 cursor-default"
                  : "bg-[#4B3A2C] text-white hover:opacity-90"
              }`}
            >
              {isFavorited ? "Added to Favorites" : "☆ Add to Favorites"}
            </button>
            {/* <FavButton /> */}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-1 gap-x-6 gap-y-4 text-lg">
            <p>
              <span className="font-semibold text-[#4B3A2C]">Native Name:</span>{" "}
              {gallery.galleryNativeName}
            </p>
            <p>
              {gallery.galleryAddress}
              {", "}
              {gallery.galleryCity}
              {", "}
              {gallery.galleryCountry}
            </p>
          </div>

          {gallery.galleryWebSite && (
            <p className="mt-6 text-base">
              <span className="font-semibold text-[#4B3A2C]">Website:</span>{" "}
              <a
                href={gallery.galleryWebSite}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-800 underline break-words"
              >
                {gallery.galleryWebSite}
              </a>
            </p>
          )}
        </div>
      </div>

      {/* paintings for selected gallery */}
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
          <option>Artist Name</option>
          <option>Year</option>
        </select>

        {(() => {
          if (galleryPaintings.length === 0) {
            return (
              <p className="text-[#4B3A2C]">
                No paintings found for this gallery
              </p>
            );
          }

          return (
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {galleryPaintings.map((painting) => {
                return (
                  <Card
                    key={painting.paintingId}
                    type="paintings"
                    fileName={painting.imageFileName}
                    title={painting.title}
                    name={`${painting.artists.firstName} ${painting.artists.lastName}`}
                    year={painting.yearOfWork}
                    colourData={painting.jsonAnnotations}
                    id={painting.paintingId}
                    height={painting.height}
                    width={painting.width}
                    medium={painting.medium}
                    description={painting.description}
                    galleryName={gallery.galleryName}
                    galleryCity={gallery.galleryCity}
                    galleryCountry={gallery.galleryCountry}
                  />
                );
              })}
            </ul>
          );
        })()}
      </div>
    </div>
  );
};

export default GalleryDetails;
