const GenreDetails = ({ genre }) => {
  return (
    <div className="mt-8 w-full max-w-7xl bg-white bg-opacity-60 rounded-xl shadow-lg p-8 text-left">
      <div className="flex flex-col gap-6">
        <div className="flex justify-between items-start">
          <h2 className="text-3xl font-bold">{genre.genreName}</h2>
        </div>

        {genre.description && (
          <p className="text-base leading-relaxed">
            <span className="font-semibold">Description:</span>{" "}
            {genre.description}
          </p>
        )}

        {genre.wikiLink && (
          <p className="text-base">
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
      <div className="mt-10 border-t border-[#4B3A2C] pt-6">
        <h3 className="text-2xl font-semibold mb-2">Paintings</h3>
        <p className="text-gray-700 italic">meep morp paintings teehee</p>
      </div>
    </div>
  );
};

export default GenreDetails;
