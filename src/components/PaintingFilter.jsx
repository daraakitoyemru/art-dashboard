import { useState } from "react";

const ListItem = (props) => {
  return (
    <li>
      <a onClick={props.onClick}>{props.text}</a>
    </li>
  );
};

const PaintingFilter = (props) => {
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
        <div className="flex justify-center w-full mb-4">
          <label
            htmlFor="my-drawer"
            className="btn btn-ghost text-xl drawer-button">
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
      <div className="drawer-side z-20">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"></label>

        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <li>
            <h1 className="text-3xl">Painting Filters</h1>
          </li>
          {/* <ListItem text="text" onClick={handleItemClick} /> */}
          {props.data.map((d) => {
            return (
              <ListItem
                text={d.title}
                key={d.paintingId}
                onClick={handleItemClick}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default PaintingFilter;
