const CardDetails = (props) => {
  return (
    <div className="card xl:card-side bg-base-100 shadow-sm modal-box w-11/12 max-w-5xl">
      <figure>
        <img src={`/${props.type}/full/${props.fileName}.jpg`} alt="Album" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">New album is released!</h2>
        <p>Click the button to listen on Spotiwhy app.</p>
        <div className="card-actions justify-end">
          <button className="btn btn-link">Listen</button>
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
        <CardDetails type={props.type} fileName={props.fileName} />
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
};

export default PaintingDetails;
