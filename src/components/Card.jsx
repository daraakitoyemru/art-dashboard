import PaintingDetails from "./modals/PaintingDetails";

const Card = (props) => {
  const openModal = () => {
    const modal = document.getElementById(`modal_${props.id}`);
    if (modal instanceof HTMLDialogElement) {
      modal.showModal();
    }
  };

  return (
    <>
      <div className="card bg-base-100 w-full shadow-lg">
        <figure>
          <img
            src={`/${props.type}/square/${props.fileName}.jpg`}
            alt={props.title}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-xl">{props.title}</h2>
          <p>{props.excerpt}</p>
          <p className="text-l">
            {props.name} • {props.year}{" "}
          </p>

          <div className="card-actions justify-end">
            <button className="btn btn-link" onClick={openModal}>
              Details
            </button>
          </div>
        </div>
      </div>

      <PaintingDetails type={props.type} fileName={props.fileName} id={props.id} />
    </>
  );
};

export default Card;
