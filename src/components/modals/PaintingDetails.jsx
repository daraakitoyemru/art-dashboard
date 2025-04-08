import DominantColours from "../DominantColours";
import FavoritesContext from "../FavoritesContext";
import { useContext } from "react";

const CardDetails = (props) => {
  const { favoritePaintings, addPainting } = useContext(FavoritesContext);
  const isFavorited = favoritePaintings.includes(props.title);

  return (
    <div className="card xl:card-side bg-base-100 shadow-sm modal-box w-11/12 max-w-5xl">
      <figure>
        <img src={`/${props.type}/full/${props.fileName}.jpg`} alt="Album" />
      </figure>

      <div className="card-body">
        <h2 className="card-title">
          <span className="text-2xl">{props.title}</span>
        </h2>
        <p>
          {props.name} • {props.year} |{" "}
          <a
            href={props.museumLink}
            target="_blank"
            className="link text-blue-800">
            {props.galleryName} Museum
          </a>{" "}
          | {props.galleryCity}, {props.galleryCountry}
        </p>
        <span>
          Dimensions (cm): {props.width} x {props.height} | Medium:{" "}
          {props.medium} |{" "}
          <a
            href={props.wikiLink || "#"}
            target="_blank"
            className="link text-blue-800 ">
            Wiki
          </a>
        </span>
        <p>
          <span className="font-semibold">Description:</span>{" "}
          {props.description}
        </p>
        <DominantColours colourData={props.colourData} />
        <p className="mt-4 text-xs italic">Copyright: {props.copyrightText}</p>
        <div className="card-actions justify-end mt-4">
          {/* <FavButton /> */}
          <button
            onClick={() => {
              if (!isFavorited) {
                addPainting(props.title);
              }
            }}
            className={`btn px-4 py-2 rounded-md ${
              isFavorited
                ? "bg-gray-300 text-gray-600 cursor-default"
                : "bg-[#4B3A2C] text-white hover:opacity-90"
            }`}>
            {isFavorited ? "Added to Favorites" : "☆ Add to Favorites"}
          </button>
        </div>
      </div>
    </div>
  );
};

const PaintingDetails = (props) => {
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id={`modal_${props.id}`} className="modal">
        {/* <div className="modal-box w-11/12 max-w-5xl">
         
        </div> */}
        <CardDetails
          type={props.type}
          fileName={props.fileName}
          title={props.title}
          name={props.name}
          year={props.year}
          height={props.height}
          width={props.width}
          medium={props.medium}
          wikiLink={props.wikiLink}
          museumLink={props.museumLink}
          colourData={props.colourData}
          description={props.description}
          copyrightText={props.copyrightText}
          galleryName={props.galleryName}
          galleryCity={props.galleryCity}
          galleryCountry={props.galleryCountry}
        />
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default PaintingDetails;
