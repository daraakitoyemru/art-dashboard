const NavButton = ({ text, disabled = false }) => {
  return (
    <button
      disabled={disabled}
      className={`font-semibold py-2 px-4 border rounded ${
        disabled
          ? "bg-gray-300 text-gray-500 border-gray-400 cursor-not-allowed"
          : "btn rounded-full"
      }`}>
      {text}
    </button>
  );
};

export default NavButton;
