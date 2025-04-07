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

  const addGenre = (genreName) => {
    if (!favoritePaintings.includes(genreName)) {
      setFavoritePaintings([...favoritePaintings, genreName]);
    }
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
        clearFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
