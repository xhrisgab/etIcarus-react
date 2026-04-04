const Card = (props) => {
  return (
    <div className="card bg-icarus-2 w-auto shadow-sm m-2">
      <div className="card-body">
        <h2 className="card-title justify-center text-icarus-5">
          {props.title} <span className="text-icarus-4">{props.value}</span>
          {props.unit}
        </h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-center">
          <button className=" btn bg-icarus-1 border-icarus-4 border-2 text-icarus-4 rounded-2xl hover:bg-icarus-5">
            Ver detalles
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
