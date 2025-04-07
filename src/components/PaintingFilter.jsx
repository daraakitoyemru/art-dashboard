import { useState } from "react";
import TextFilter from "./TextFilter";
import SelectFilter from "./SelectFilter";
import YearRangeFilter from "./YearRangeFilter";

const PaintingFilter = (props) => {
  const [filterValues, setFilterValues] = useState({});

  let title = `${props.title}`;

  const uniqueArtists = {};
  props.data.forEach((painting) => {
    const artistName = `${painting.artists.firstName} ${painting.artists.lastName}`;
    uniqueArtists[artistName] = true;
  });

  const artistOptions = Object.keys(uniqueArtists).map((name) => ({
    value: name,
    label: name,
  }));

  const uniqueGalleries = {};
  props.data.forEach((painting) => {
    const galleryName = painting.galleries.galleryName;
    uniqueGalleries[galleryName] = true;
  });

  const galleryOptions = Object.keys(uniqueGalleries).map((name) => ({
    value: name,
    label: name,
  }));

  const handleFilterChange = (filterName, value) => {
    setFilterValues({
      ...filterValues,
      [filterName]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const selectedFilter = document.querySelector(
      'input[name="filter-option"]:checked'
    );
    if (selectedFilter && selectedFilter instanceof HTMLInputElement) {
      const filterType = selectedFilter.value;
      const filterValue = filterValues[filterType];

      if (props.applyFilters) {
        props.applyFilters(filterType, filterValue);
      }
    }
  };

  const handleClear = (e) => {
    e.preventDefault();
    setFilterValues({});

    if (props.clearFilters) {
      props.clearFilters();
    }
  };

  return (
    <div className="drawer">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center p-4">
        <div className="flex justify-center w-full mb-4">
          <label
            htmlFor="my-drawer"
            className="btn btn-ghost text-2xl text-black font-bold drawer-button">
            {title}
          </label>
        </div>
      </div>
      <div className="drawer-side z-20">
        <label
          htmlFor="my-drawer"
          aria-label="close sidebar"
          className="drawer-overlay"></label>

        <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 bg-[#F8F0EB]">
          <li>
            <h1 className="text-3xl py-4">Painting Filters</h1>
          </li>

          <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
            <TextFilter
              label="Title"
              name="title"
              placeholder="Enter painting title"
              onChange={handleFilterChange}
            />

            <SelectFilter
              label="Artist"
              name="artist"
              options={artistOptions}
              onChange={handleFilterChange}
            />

            <SelectFilter
              label="Gallery"
              name="gallery"
              options={galleryOptions}
              onChange={handleFilterChange}
            />

            <YearRangeFilter
              label="Year Range"
              name="year"
              onChange={handleFilterChange}
            />

            <div className="flex justify-between mb-5">
              <button
                type="submit"
                className="text-white bg-[#4B3A2C] hover:bg-[#4B3A2C] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Apply
              </button>
              <button
                type="button"
                onClick={handleClear}
                className="text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700">
                Clear
              </button>
            </div>
          </form>
        </ul>
      </div>
    </div>
  );
};

export default PaintingFilter;
