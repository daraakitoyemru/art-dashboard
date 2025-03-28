const NavButton = ({ text, disabled = false }) => {
  return (
    <button
      disabled={disabled}
      className={`font-semibold py-2 px-4 border rounded ${
        disabled
          ? "bg-gray-300 text-gray-500 border-gray-400 cursor-not-allowed"
          : "bg-transparent hover:bg-blue-500 text-blue-700 hover:text-white border-blue-500 hover:border-transparent"
      }`}>
      {text}
    </button>
  );
};

export default NavButton;
