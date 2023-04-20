const Card = (props) => {
  return (
    <div className="col mb-5">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src={props.path}
          className="card-img-top"
          alt={props.title}
        />
      </div>
    </div>
  );
};

export default Card;
