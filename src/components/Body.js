import RestaurentCard from "./RestaurentCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";


const Body = () => {
  // Local state variable - Super powerful variable
  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestautant] = useState([]);
  // Normal JS variable
  // let listOfRestaurant =[];
  const [searchText, setSearchText] = useState("");
  const [topRate, setTopRate] = useState("Top Rated Restaurants");


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

  // console.log(listOfRestaurant);

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

  const {loggedInUser, setUserName} = useContext(UserContext);

  return (listOfRestaurant.length === 0) ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex items-center" >
        <div className="search m-3 p-3">
        
          <input
          className="bg-slate-200 border-gray-600 h-8 w-60"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              if(searchText===""){
                setFilteredRestautant(listOfRestaurant);
              }
            }}
          />
          <button
            className="px-3 py-2 bg-green-200 m-3 rounded-lg"
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
          className=" bg-blue-400 px-2 w-42 h-10 rounded-lg"
          onClick={handleClick}>
          {topRate}
        </button>
        <label className="mx-2">UserName :</label>
        <input className="m-6 border border-gray-500 p-2" type="text" value={loggedInUser} onChange={(e) => setUserName(e.target.value)} />
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurants/"+restaurant.info.id}><RestaurentCard resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
