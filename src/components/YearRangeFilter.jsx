import { useState } from "react";

const YearRangeFilter = (props) => {
  const [fromYear, setFromYear] = useState("");
  const [toYear, setToYear] = useState("");

  const handleFromYearChange = (e) => {
    setFromYear(e.target.value);
    if (props.onChange) {
      props.onChange(props.name, { from: e.target.value, to: toYear });
    }
  };

  const handleToYearChange = (e) => {
    setToYear(e.target.value);
    if (props.onChange) {
      props.onChange(props.name, { from: fromYear, to: e.target.value });
    }
  };

  return (
    <li className="mb-5">
      <label
        htmlFor={props.name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        {props.label}
      </label>
      <div className="flex items-center gap-3">
        <input
          type="radio"
          name="filter-option"
          value={props.name}
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600"
        />
        <div className="flex items-center w-full">
          <div className="flex flex-col w-full">
            <div className="flex items-center gap-2 w-full">
              <span className="text-sm">From</span>
              <input
                type="number"
                id={`${props.name}-from`}
                value={fromYear}
                onChange={handleFromYearChange}
                placeholder="1800"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
              <span className="text-sm">To</span>
              <input
                type="number"
                id={`${props.name}-to`}
                value={toYear}
                onChange={handleToYearChange}
                placeholder="1930"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default YearRangeFilter;
