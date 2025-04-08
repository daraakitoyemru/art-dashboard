import { Link, useLocation } from "react-router-dom";
import FavoritesModal from "./FavoritesModal";
import FavoritesContext from "./FavoritesContext";
import { useContext } from "react";

const NavBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const { favoriteArtists, favoriteGalleries, favoritePaintings } =
    useContext(FavoritesContext);

  const isDisabled = (path) => {
    let cleanedPath = currentPath;
    if (currentPath.startsWith("/")) {
      cleanedPath = currentPath.substring(1);
    }

    let destinationPath = path;
    if (path.startsWith("/")) {
      destinationPath = path.substring(1);
    }

    return cleanedPath === destinationPath;
  };

  let favoritesEmpty = true;
  if (
    favoriteArtists.length > 0 ||
    favoriteGalleries.length > 0 ||
    favoritePaintings.length > 0
  ) {
    favoritesEmpty = false;
  }

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm bg-[#6B5B4F] sticky top-0 z-50">
        <div className="flex-1">
          <div className="avatar">
            <div className="w-14 rounded">
              <img src="/logoSymbol.svg" />
            </div>
          </div>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-3 gap-2">
            <li className="text-white text-base hover:text-lg transition-all duration-300 ease-in-out">
              {" "}
              <Link
                to="artists"
                className={
                  isDisabled("artists")
                    ? "text-[#df9e7d] cursor-not-allowed hover:text-base"
                    : ""
                }
                onClick={(e) => isDisabled("artists") && e.preventDefault()}
              >
                Artists
              </Link>
            </li>
            <li className="text-white text-base hover:text-lg transition-all duration-300 ease-in-out">
              {" "}
              <Link
                to="paintings"
                className={
                  isDisabled("paintings")
                    ? "text-[#df9e7d] cursor-not-allowed hover:text-base"
                    : ""
                }
                onClick={(e) => isDisabled("paintings") && e.preventDefault()}
              >
                Paintings
              </Link>
            </li>
            <li className="text-white text-base hover:text-lg transition-all duration-300 ease-in-out">
              {" "}
              <Link
                to="galleries"
                className={
                  isDisabled("galleries")
                    ? "text-[#df9e7d] cursor-not-allowed hover:text-base"
                    : ""
                }
                onClick={(e) => isDisabled("galleries") && e.preventDefault()}
              >
                Galleries
              </Link>
            </li>
            <li className="text-white text-base hover:text-lg transition-all duration-300 ease-in-out">
              {" "}
              <Link
                to="genres"
                className={
                  isDisabled("genres")
                    ? "text-[#df9e7d] cursor-not-allowed hover:text-base"
                    : ""
                }
                onClick={(e) => isDisabled("genres") && e.preventDefault()}
              >
                Genres
              </Link>
            </li>
            <li
              className={`text-base hover:text-lg transition-all duration-300 ease-in-out ${
                favoritesEmpty
                  ? "text-[#8e8e8e] cursor-not-allowed"
                  : "text-white cursor-pointer"
              }`}
            >
              <a
                onClick={() => {
                  if (!favoritesEmpty) {
                    const modal = document.querySelector("#favorites_modal");
                    if (modal && modal instanceof HTMLDialogElement) {
                      modal.showModal();
                    }
                  }
                }}
              >
                Favourites
              </a>
            </li>

            <li className="text-white text-base hover:text-lg transition-all duration-300 ease-in-out">
              {" "}
              <Link
                to="about"
                className={
                  isDisabled("about")
                    ? "text-[#df9e7d] cursor-not-allowed hover:text-base"
                    : ""
                }
                onClick={(e) => isDisabled("about") && e.preventDefault()}
              >
                About
              </Link>
            </li>
            <li className="text-white text-base hover:text-lg transition-all duration-300 ease-in-out">
              {" "}
              <Link
                to="/"
                className={
                  isDisabled("/")
                    ? " text-[#df9e7d] cursor-not-allowed hover:text-base"
                    : ""
                }
                onClick={(e) => isDisabled("/") && e.preventDefault()}
              >
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
