function Cards({ image, cuisineType, label,ingredients }) {
  // Destructure tour and deleteHandler

  return (
    <div className="cardContainer">
      <img src={image} alt="place" className="cardImage" />
      <div>
        <div className="heading">
          <h3>{cuisineType}</h3>
          <h3>{label}</h3>
        </div>
        <div>
          <span className="suppurt">Ingrdients :</span>
          {
            ingredients.map((ing) => (
              <span> {ing.food}, </span>
            ))

            }
          
        </div>
      </div>
    </div>
  );
}

export default Cards;
