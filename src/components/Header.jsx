import { Link } from "react-router-dom";

const Header = ({ heading, paragraph, linkName, linkUrl = "#" }) => {
  return (
    <div className="mb-10">
      <div className="flex justify-center">
        <img alt="logo" className="h-20 w-20" src="/logo.svg" />
      </div>
      <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
        {heading}
      </h2>
      <p className="text-center text-sm text-gray-600 mt-5">
        {paragraph}{" "}
        <Link
          to={linkUrl}
          className="font-medium text-slate-600 hover:text-slate-500"
        >
          {linkName}
        </Link>
      </p>
    </div>
  );
};

export default Header;
