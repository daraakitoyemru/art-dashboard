const CardDetails = (props) => {
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
          {props.name} • {props.year} | {props.galleryName} Museum |{" "}
          {props.galleryCity}, {props.galleryCountry}
        </p>
        <span>
          Dimensions (cm): {props.width} x {props.height} | Medium:{" "}
          {props.medium}
        </span>
        <p>
          <span className="font-semibold">Description:</span>{" "}
          {props.description}
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-link">Add to Favourites</button>
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
          description={props.description}
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
