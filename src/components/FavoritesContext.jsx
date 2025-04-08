import { createContext, useState } from "react";

const FavoritesContext = createContext(null);

export const FavoritesProvider = ({ children }) => {
  const [favoriteArtists, setFavoriteArtists] = useState([]);
  const [favoriteGalleries, setFavoriteGalleries] = useState([]);
  const [favoritePaintings, setFavoritePaintings] = useState([]);

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
