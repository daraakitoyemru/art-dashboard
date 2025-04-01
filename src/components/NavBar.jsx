import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // function to check if a link should be disabled
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

  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl">artful</a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link
                to="artists"
                className={
                  isDisabled("artists")
                    ? "text-gray-500 cursor-not-allowed"
                    : ""
                }
                onClick={(e) => isDisabled("artists") && e.preventDefault()}>
                Artists
              </Link>
            </li>
            <li>
              <Link
                to="paintings"
                className={
                  isDisabled("paintings")
                    ? "text-gray-500 cursor-not-allowed"
                    : ""
                }
                onClick={(e) => isDisabled("paintings") && e.preventDefault()}>
                Paintings
              </Link>
            </li>
            <li>
              <Link
                to="galleries"
                className={
                  isDisabled("galleries")
                    ? "text-gray-500 cursor-not-allowed"
                    : ""
                }
                onClick={(e) => isDisabled("galleries") && e.preventDefault()}>
                Galleries
              </Link>
            </li>
            <li>
              <Link
                to="genres"
                className={
                  isDisabled("genres") ? "text-gray-500 cursor-not-allowed" : ""
                }
                onClick={(e) => isDisabled("genres") && e.preventDefault()}>
                Genres
              </Link>
            </li>
            <li>
              <a className="cursor-pointer">Favourites</a>
            </li>
            <li>
              <Link
                to="about"
                className={
                  isDisabled("about") ? "text-gray-500 cursor-not-allowed" : ""
                }
                onClick={(e) => isDisabled("about") && e.preventDefault()}>
                About
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className={
                  isDisabled("/")
                    ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                    : ""
                }
                onClick={(e) => isDisabled("/") && e.preventDefault()}>
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
