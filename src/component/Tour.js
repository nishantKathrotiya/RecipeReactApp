import Cards from "./Cards";

function Tour({ tours }) {
  return (
    <div>
      <div className="cardBucket">
        {
          tours.map((tour) => (
            <Cards  key={tour.recipe.url} {...tour.recipe}  />
          ))
        }
      </div>
    </div>
  );
}

export default Tour;
