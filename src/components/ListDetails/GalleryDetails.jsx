import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useEffect } from "react";
import { useMap } from "react-leaflet";
import { useContext } from "react";
import ArtContext from "../../context/ArtContext.jsx";

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
  const { paintings } = useContext(ArtContext);

  const galleryPaintings = paintings
    .filter((p) => p.galleries.galleryId === gallery.galleryId)
    .sort((a, b) => a.title.localeCompare(b.title));

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
            <button className="btn bg-[#4B3A2C] text-white hover:opacity-90 px-4 py-2 rounded-md">
              ☆ Add to Favorites
            </button>
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
        <h3 className="text-2xl font-semibold mb-4 text-[#4B3A2C]">
          Paintings
        </h3>

        {(() => {
          if (galleryPaintings.length === 0) {
            return (
              <p className="text-[#4B3A2C]">
                No paintings found for this gallery
              </p>
            );
          }

          return (
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {galleryPaintings.map((painting) => {
                return (
                  <li
                    key={painting.paintingId}
                    className="bg-white bg-opacity-80 p-4 rounded shadow hover:shadow-md transition"
                  >
                    <h4 className="font-semibold text-[#4B3A2C] text-lg mb-2 text-center">
                      {painting.title}
                    </h4>

                    {(() => {
                      if (painting.imageFileName) {
                        return (
                          <img
                            src={`/paintings/square/${painting.imageFileName}.jpg`}
                            alt={painting.title}
                            className="rounded object-cover w-full"
                          />
                        );
                      }
                    })()}
                    <p className="text-lg mt-2 text-[#4B3A2C] italic text-center">
                      {painting.artists.firstName} {painting.artists.lastName}
                    </p>
                    <p className="text-sm mt-2 text-[#4B3A2C] italic text-center">
                      {painting.yearOfWork}
                    </p>
                  </li>
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
