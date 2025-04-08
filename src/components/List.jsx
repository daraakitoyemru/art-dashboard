import { useState } from "react";
import ArtistDetails from "./ListDetails/ArtistDetails";
import GalleryDetails from "./ListDetails/GalleryDetails";
import GenreDetails from "./ListDetails/GenreDetails";

const ListItem = (props) => {
  return (
    <li className="">
      <a className="text-black p-3 hover:bg-[#efe2d9]" onClick={props.onClick}>
        {props.text}
      </a>
    </li>
  );
};

const List = (props) => {
  const [selectedItem, setSelectedItem] = useState(null);
  let title = `Select ${props.title}`;
  if (selectedItem) {
    const typeMap = {
      artists: `${selectedItem.firstName} ${selectedItem.lastName}`,
      galleries: selectedItem.galleryName,
      genres: selectedItem.genreName,
      paintings: selectedItem.title,
    };
    title = typeMap[props.type] || `Selected ${props.title}`;
  }

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center p-4">
        <div
          className={`flex justify-center w-full transition-all duration-500 ${
            selectedItem ? "mt-4" : "mt-60"
          } mb-4`}
        >
          {" "}
          <label
            htmlFor="my-drawer"
            className="btn btn-ghost text-[#4B3A2C] text-3xl px-12 py-10 drawer-button rounded-lg border-[#4B3A2C] border-4 bg-white bg-opacity-40 hover:bg-white hover:text-4xl hover:px-13 hover:py-11 transition-all duration-300 ease-in-out"
          >
            {title}
          </label>
        </div>

        {/* display selected item */}
        {selectedItem && props.type === "artists" && (
          <ArtistDetails artist={selectedItem} />
        )}
        {selectedItem && props.type === "galleries" && (
          <GalleryDetails gallery={selectedItem} />
        )}
        {selectedItem && props.type === "genres" && (
          <GenreDetails genre={selectedItem} />
        )}
      </div>
      <div className="drawer-side z-60">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 bg-[#F8F0EB] ">
          {/* Sidebar content here */}
          {/* <ListItem text="text" onClick={handleItemClick} /> */}
          {props.data.map((d) => {
            let artText = `${d.firstName} ${d.lastName}`;
            let galleryText = d.galleryName;
            let paintingText = d.title;
            if (props.type === "artists") {
              return (
                <ListItem
                  text={artText}
                  key={d.id}
                  onClick={() => handleItemClick(d)}
                />
              );
            } else if (props.type === "galleries") {
              return (
                <ListItem
                  text={galleryText}
                  key={d.galleryId}
                  onClick={() => handleItemClick(d)}
                />
              );
            } else if (props.type === "paintings") {
              return (
                <ListItem
                  text={paintingText}
                  key={d.paintingId}
                  onClick={() => handleItemClick(d)}
                />
              );
            } else if (props.type === "genres") {
              return (
                <ListItem
                  text={d.genreName}
                  key={d.genreId}
                  onClick={() => handleItemClick(d)}
                />
              );
            }
          })}
        </ul>
      </div>
    </div>
  );
};

export default List;
