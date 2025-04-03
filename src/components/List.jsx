import { useState } from "react";

const ListItem = (props) => {
  return (
    <li className="">
      <a className="text-black p-3 hover:bg-[#dfd1c9]" onClick={props.onClick}>
        {props.text}
      </a>
    </li>
  );
};

const List = (props) => {
  const [selectedItem, setSelectedItem] = useState(null);
  let title = selectedItem ? selectedItem : `Select ${props.title}`;

  const handleItemClick = (e) => {
    setSelectedItem(e.target.textContent);
    // console.log("in handler", selectedItem, e.target.textContent);
  };

  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center p-4">
        {/* Page content here */}
        <div className="flex justify-center w-full mt-60 mb-4">
          <label
            htmlFor="my-drawer"
            className="btn btn-ghost text-[#4B3A2C] text-3xl px-12 py-10 drawer-button rounded-lg border-[#4B3A2C] border-4 bg-white bg-opacity-40 hover:bg-white hover:text-4xl hover:px-13 hover:py-11 transition-all duration-300 ease-in-out"
          >
            {title}
          </label>
        </div>

        {/* Display selected item */}
        {selectedItem && (
          <div className="mt-8 text-center">
            <h2 className="text-2xl font-bold">Selected Item:</h2>
            <p className="text-xl mt-2">{selectedItem}</p>
          </div>
        )}
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 bg-[#F8F0EB]">
          {/* Sidebar content here */}
          {/* <ListItem text="text" onClick={handleItemClick} /> */}
          {props.data.map((d) => {
            let artText = `${d.firstName} ${d.lastName}`;
            let galleryText = d.galleryName;
            let paintingText = d.title;
            if (props.type === "artists") {
              return (
                <ListItem text={artText} key={d.id} onClick={handleItemClick} />
              );
            } else if (props.type === "galleries") {
              return (
                <ListItem
                  text={galleryText}
                  key={d.galleryId}
                  onClick={handleItemClick}
                />
              );
            } else if (props.type === "paintings") {
              return (
                <ListItem
                  text={paintingText}
                  key={d.paintingId}
                  onClick={handleItemClick}
                />
              );
            } else if (props.type === "genres") {
              return (
                <ListItem
                  text={d.genreName}
                  key={d.genreId}
                  onClick={handleItemClick}
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
