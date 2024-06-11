import RestaurentCard from "./RestaurentCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // Local state variable - Super powerful variable
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestautant] = useState([]);
  // Normal JS variable
  // let listOfRestaurant =[];
  const [searchText, setSearchText] = useState("");
  const [topRate, setTopRate] = useState("Top Rated Restaurants")

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.71700&lng=75.83370&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    setListOfRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestautant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const handleClick = () =>{
    if(topRate === "Top Rated Restaurants"){
      setTopRate("All Restaurants");
      const filteredList = listOfRestaurant.filter(
        (res) => res.info.avgRating > 4.2
      );
      setFilteredRestautant(filteredList)
    } else {
      setTopRate("Top Rated Restaurants");
      setFilteredRestautant(listOfRestaurant);
    }
  }
  

  const onlineStatus= useOnlineStatus();
  if(onlineStatus === false) return <h1>Looks like you're offline!! Please check internet connection.</h1>

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              if(searchText===""){
                setFilteredRestautant(listOfRestaurant);
              }
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredRestaurant = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestautant(filteredRestaurant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={handleClick}>
          {topRate}
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}><RestaurentCard resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
