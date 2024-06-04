import RestaurentCard from "./RestaurentCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // Local state variable - Super powerful variable
  const [listOfRestaurant, setListOfRestaurant] = useState(resList);
  // Normal JS variable
  // let listOfRestaurant =[];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter(
              (res) => res.info.avgRating > 4.2
            );
            setListOfRestaurant(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {/* <RestaurentCard resName="Maghana Foods" cuisine="Biryani, North Indian, South Indian, Asian"/> */}
        {/* <RestaurentCard resName="KFC" cuisine="Burger, Fries, Chicken"/> */}
        {listOfRestaurant.map((restaurant) => (
          <RestaurentCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
