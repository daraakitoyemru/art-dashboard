import { useState } from "react";

const List = ({ category }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  let title = selectedItem ? selectedItem : `Select ${category}`;

  console.log("before: ", selectedItem);
  const handleItemClick = (itemText) => {
    setSelectedItem(itemText);

    console.log("in handler", selectedItem);
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
      <div className="drawer-side">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"></label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
          {/* Sidebar content here */}
          <li>
            <a onClick={() => handleItemClick("Sidebar Item 1")}>
              Sidebar Item 1
            </a>
          </li>
          <li>
            <a onClick={() => handleItemClick("Sidebar Item 2")}>
              Sidebar Item 2
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default List;
