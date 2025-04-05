import { Link } from "react-router-dom";

const FormAction = ({
  handleSubmit,
  type = "Button",
  action = "submit",
  text,
}) => {
  const handleClick = () => {
    if (handleSubmit) {
      handleSubmit();
    }
  };

  return (
    <div className="my-5 mx-auto px-4 w-full max-w-sm">
      {type === "Button" ? (
        <Link to="/artists" className="w-full">
          <button
            type={
              action === "submit"
                ? "submit"
                : action === "reset"
                ? "reset"
                : "button"
            }
            className="w-full rounded-md py-2 px-4 border mb-10 border-gray-600 text-sm font-medium text-white bg-[#6B5B4F] hover:bg-[#4B3A2C] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            onClick={handleClick}
          >
            {text}
          </button>
        </Link>
      ) : (
        <></>
      )}
    </div>
  );
};

export default FormAction;
