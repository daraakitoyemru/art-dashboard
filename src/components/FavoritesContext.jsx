import { createContext } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";

const FavoritesContext = createContext(null);

export const FavoritesProvider = ({ children }) => {
  const [favoriteArtists, setFavoriteArtists] = useLocalStorage(
    "favoriteArtists",
    []
  );
  const [favoriteGalleries, setFavoriteGalleries] = useLocalStorage(
    "favoriteGalleries",
    []
  );
  const [favoritePaintings, setFavoritePaintings] = useLocalStorage(
    "favoritePaintings",
    []
  );

  const addGallery = (galleryName) => {
    if (!favoriteGalleries.includes(galleryName)) {
      setFavoriteGalleries([...favoriteGalleries, galleryName]);
    }
  };

  const addArtist = (artistName) => {
    if (!favoriteArtists.includes(artistName)) {
      setFavoriteArtists([...favoriteArtists, artistName]);
    }
  };

  const addPainting = (paintingName) => {
    if (!favoritePaintings.includes(paintingName)) {
      setFavoritePaintings([...favoritePaintings, paintingName]);
    }
  };

  const removeArtist = (artistName) => {
    setFavoriteArtists(favoriteArtists.filter((a) => a !== artistName));
  };

  const removeGallery = (galleryName) => {
    setFavoriteGalleries(favoriteGalleries.filter((g) => g !== galleryName));
  };

  const removePainting = (paintingName) => {
    setFavoritePaintings(favoritePaintings.filter((p) => p !== paintingName));
  };

  const clearFavorites = () => {
    setFavoriteArtists([]);
    setFavoriteGalleries([]);
    setFavoritePaintings([]);
  };

  return (
    <FavoritesContext.Provider
      value={{
        favoriteArtists,
        favoriteGalleries,
        favoritePaintings,
        addGallery,
        addArtist,
        addPainting,
        removeGallery,
        removeArtist,
        removePainting,
        clearFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
