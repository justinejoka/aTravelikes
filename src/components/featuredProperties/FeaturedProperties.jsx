import "./featuredProperties.css";

const FeaturedProperties = () => {
  // Mock Data for Frontend Testing
  const data = [
    {
      _id: "1",
      name: "Luxury Hotel",
      city: "New York",
      cheapestPrice: 120,
      photos: ["https://via.placeholder.com/150"],
      rating: 4.5,
    },
    {
      _id: "2",
      name: "Budget Stay",
      city: "Los Angeles",
      cheapestPrice: 80,
      photos: ["https://via.placeholder.com/150"],
      rating: 4.0,
    },
    {
      _id: "3",
      name: "Beach Resort",
      city: "Miami",
      cheapestPrice: 200,
      photos: ["https://via.placeholder.com/150"],
      rating: 5.0,
    },
  ];

  return (
    <div className="fp">
      {data.length > 0 ? (
        data.map((item) => (
          <div className="fpItem" key={item._id}>
            <img src={item.photos[0] || "default.jpg"} alt="" className="fpImg" />
            <span className="fpName">{item.name}</span>
            <span className="fpCity">{item.city}</span>
            <span className="fpPrice">Starting from ${item.cheapestPrice}</span>
            {item.rating && (
              <div className="fpRating">
                <button>{item.rating}</button>
                <span>Excellent</span>
              </div>
            )}
          </div>
        ))
      ) : (
        <p>No featured properties available.</p>
      )}
    </div>
  );
};

export default FeaturedProperties;
