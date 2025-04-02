const Card = (props) => {
  return (
    <div className="card bg-base-100 w-full shadow-sm">
      <figure>
        <img
          src={`public/${props.type}/square/${props.fileName}.jpg`}
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
          <button className="btn btn-link">Expand</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
