const GalleryDetails = ({ gallery }) => {
  return (
    <div className="mt-8 w-full max-w-7xl bg-white bg-opacity-60 rounded-xl shadow-lg p-8 text-left">
      <div className="flex flex-col sm:flex-row gap-8 items-start">
        {/* gallery Info */}
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h2 className="text-3xl font-bold mb-4">{gallery.galleryName}</h2>
            <button className="btn bg-[#4B3A2C] text-white hover:opacity-90 px-4 py-2 rounded-md">
              ☆ Add to Favorites
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4 text-lg">
            <p>
              <span className="font-semibold">Name:</span> {gallery.galleryName}
            </p>
            <p>
              <span className="font-semibold">Native Name:</span>{" "}
              {gallery.galleryNativeName}
            </p>
            <p>
              <span className="font-semibold">City:</span> {gallery.galleryCity}
            </p>
            <p>
              <span className="font-semibold">Address:</span>{" "}
              {gallery.galleryAddress}
            </p>
            <p>
              <span className="font-semibold">Country:</span>{" "}
              {gallery.galleryCountry}
            </p>
          </div>

          {gallery.galleryWebSite && (
            <p className="mt-6 text-base">
              <span className="font-semibold">Website:</span>{" "}
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
      {/* paintings placeholder */}
      <div className="mt-10 border-t border-[#4B3A2C] pt-6">
        <h3 className="text-2xl font-semibold mb-2">Paintings</h3>
        <p className="text-gray-700 italic">meep morp paintings teehee</p>
      </div>
    </div>
  );
};

export default GalleryDetails;
