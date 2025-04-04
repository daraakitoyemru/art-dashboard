const ArtistDetails = ({ artist }) => {
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
            <button className="btn bg-[#4B3A2C] text-white hover:opacity-90 px-4 py-2 rounded-md">
              ☆ Add to Favorites
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-lg">
            <p>
              <span className="font-semibold">First Name:</span>{" "}
              {artist.firstName}
            </p>
            <p>
              <span className="font-semibold">Last Name:</span>{" "}
              {artist.lastName}
            </p>
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

      {/* paintings placeholder */}
      <div className="mt-10 border-t border-[#4B3A2C] pt-6">
        <h3 className="text-2xl font-semibold mb-2">Paintings</h3>
        <p className="text-gray-700 italic">meep morp paintings teehee</p>
      </div>
    </div>
  );
};

export default ArtistDetails;
