import Cards from "../Cards/Cards";
import { restaurants } from "../../../Data/data";
import "./Home.css";
import { useState } from "react";

const Home = () => {
  const [restaurantData, setRestaurantData] = useState(restaurants);
  const [searchText, setSearchText] = useState("");

  function searchBar(searchEle) {
    setSearchText(searchEle);
  }

  const searchFilter = (searchData, restaurants) => {
    const result = restaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchData)
    );
    setRestaurantData(result);
  };

  return (
    <main className="main-body">
      {/* <Slider /> */}
      <input
        className="search-bar"
        type="text"
        value={searchText}
        placeholder="search"
        onChange={(e) => {
          searchBar(e.target.value);
        }}
      />
      <button onClick={() => searchFilter(searchText, restaurants)}>
        Search
      </button>
      <div className="restaurant-list">
        {restaurantData.map((restaurant) => (
          <Cards key={restaurant.info.id} {...restaurant.info} />
        ))}
      </div>
    </main>
  );
};

export default Home;
