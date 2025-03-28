import React from "react";

const Footer = ({
  creditText = "Photo",
  creditAuthor = "Photographer",
  creditLink = "#",
  bgColor = "bg-gray-800",
  textColor = "text-white",
}) => {
  return (
    <footer
      className={`${bgColor} ${textColor} py-2 px-4 text-center text-xs absolute bottom-0 w-full`}>
      <p>
        {creditText} by{" "}
        <a
          href={creditLink}
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-300">
          {creditAuthor}
        </a>{" "}
        on{" "}
        <a
          href="https://unsplash.com"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-gray-300">
          Unsplash
        </a>
      </p>
    </footer>
  );
};

export default Footer;
