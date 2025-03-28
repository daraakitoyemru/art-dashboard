import { Link, useLocation } from "react-router-dom";
import NavButton from "./NavButton";

const NavBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  // Function to check if a NavButton should be disabled
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
      <nav>
        <ul>
          <li>
            <Link to="/">
              <NavButton text="Logout" disabled={isDisabled("/")} />
            </Link>
          </li>
          <li>
            <Link to="artists">
              <NavButton text="Artists" disabled={isDisabled("artists")} />
            </Link>
          </li>
          <li>
            <Link to="galleries">
              <NavButton text="Galleries" disabled={isDisabled("galleries")} />
            </Link>
          </li>
          <li>
            <NavButton text="Favourites" />
          </li>
          <li>
            <Link to="about">
              <NavButton text="About" disabled={isDisabled("about")} />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
