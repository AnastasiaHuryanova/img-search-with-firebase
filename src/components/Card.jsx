const Card = () => {
  return (
    <div className="col mb-5">
      <div className="card" style={{ width: "18rem" }}>
        <img
          src="https://via.placeholder.com/200"
          className="card-img-top"
          alt="image"
        />
        <div className="card-body">
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
