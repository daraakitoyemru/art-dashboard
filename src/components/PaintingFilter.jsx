import { useState } from "react";
import TextFilter from "./TextFilter";
import SelectFilter from "./SelectFilter";
import YearRangeFilter from "./YearRangeFilter";

const PaintingFilter = (props) => {
  const [filterValues, setFilterValues] = useState({});
  const [reset, setReset] = useState(0);
  const [selectedFilter, setSelectedFilter] = useState("");

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

  const handleRadioChange = (e) => {
    setSelectedFilter(e.target.value);
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

    const radioBtn = document.querySelectorAll(
      'input[name="filter-option"]:checked'
    );
    radioBtn.forEach((r) => {
      if (r instanceof HTMLInputElement) {
        r.checked = false;
      }
    });

    setSelectedFilter("");
    setReset((prev) => prev + 1);
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
            className=" text-[#4B3A2C] cursor-pointer text-3xl px-6 py-5 drawer-button rounded-lg hover:underline transition-all duration-300 ease-in-out">
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
              key={`title-${reset}`}
              label="Title"
              name="title"
              placeholder="Enter painting title"
              onChange={handleFilterChange}
              onRadioChange={handleRadioChange}
            />

            <SelectFilter
              key={`artist-${reset}`}
              label="Artist"
              name="artist"
              options={artistOptions}
              onChange={handleFilterChange}
              onRadioChange={handleRadioChange}
            />

            <SelectFilter
              key={`gallery-${reset}`}
              label="Gallery"
              name="gallery"
              options={galleryOptions}
              onChange={handleFilterChange}
              onRadioChange={handleRadioChange}
            />

            <YearRangeFilter
              key={`year-${reset}`}
              label="Year Range"
              name="year"
              onChange={handleFilterChange}
              onRadioChange={handleRadioChange}
            />

            <div className="flex justify-between mb-5">
              <button
                type="submit"
                disabled={!selectedFilter}
                className={`text-white ${
                  !selectedFilter
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-[#4B3A2C] hover:bg-[#4B3A2C]"
                } focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800`}>
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
