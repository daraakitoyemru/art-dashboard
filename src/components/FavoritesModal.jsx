import { useContext } from "react";
import FavoritesContext from "./FavoritesContext";

const FavoritesModal = () => {
  const {
    favoriteArtists,
    favoriteGalleries,
    favoritePaintings,
    clearFavorites,
  } = useContext(FavoritesContext);

  return (
    <dialog id="favorites_modal" className="modal">
      <div className="modal-box max-w-4xl w-full bg-white relative">
        <form method="dialog">
          <button
            className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
            aria-label="Close"
          >
            ✕
          </button>
        </form>

        <h2 className="text-2xl font-bold text-center mb-8 text-[#4B3A2C]">
          Your Favourites
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* artists */}
          <div>
            <h3 className="font-semibold text-[#4B3A2C] mb-2">Artists</h3>
            {favoriteArtists.length === 0 && (
              <p className="text-sm italic text-gray-500">Empty</p>
            )}
            {favoriteArtists.map((artist, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-md p-2 mb-2 bg-gray-50 shadow-sm"
              >
                {artist}
              </div>
            ))}
          </div>

          {/* galleries */}
          <div>
            <h3 className="font-semibold text-[#4B3A2C] mb-2">Galleries</h3>
            {favoriteGalleries.length === 0 && (
              <p className="text-sm italic text-gray-500">Empty</p>
            )}
            {favoriteGalleries.map((gallery, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-md p-2 mb-2 bg-gray-50 shadow-sm"
              >
                {gallery}
              </div>
            ))}
          </div>

          {/* paintings */}
          <div>
            <h3 className="font-semibold text-[#4B3A2C] mb-2">Paintings</h3>
            {favoritePaintings.length === 0 && (
              <p className="text-sm italic text-gray-500">Empty</p>
            )}
            {favoritePaintings.map((painting, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-md p-2 mb-2 bg-gray-50 shadow-sm"
              >
                {painting}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={clearFavorites}
            className="bg-[#4B3A2C] text-white text-md px-4 py-2 mt-10 rounded hover:bg-[#291e15]"
          >
            Remove all
          </button>
        </div>

        <form method="dialog" className="modal-backdrop mt-4 text-center">
          <button className="btn">Close</button>
        </form>
      </div>
    </dialog>
  );
};

export default FavoritesModal;
