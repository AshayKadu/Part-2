// import { useEffect, useState } from "react";
// import MenuItem from "./MenuItem";
import { useParams } from "react-router-dom";
import {
  useRestaurantMenu,
  useRestaurantItem,
} from "../utils/useRestaurantMenu";
import MenuCategory from "./MenuCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  // const [resName, setResName] = useState([]);
  // const [menuItem, setMenuItem] = useState([]);

  const { resId } = useParams();

  const resName = useRestaurantMenu(resId);
  // console.log(ashay)
  const menuItem = useRestaurantItem(resId);

const [showIndex, setShowIndex] = useState();

  // useEffect(()=> {
  //     fetchMenu();
  // }, []);

  // const fetchMenu = async() =>{
  //     const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.71700&lng=75.83370&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
  //     const json = await data.json();
  //     console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
  //     setResName(json?.data?.cards[2]?.card?.card?.info);
  //     setMenuItem(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
  // }

  const {
    name,
    avgRating,
    totalRatingsString,
    costForTwoMessage,
    sla,
    cuisines,
  } = resName;
  // console.log(resName)
  // const menuItem= ashay?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;

  return (
    <div className="flex justify-center">
      <div className="w-[50vw]">
        <h1 className="my-2 font-bold text-2xl px-5">{name}</h1>
        <div className="border-solid border-2 border-gray-600 shadow-lg rounded-lg my-7 p-3">
          <h3 className="text-lg">
            ⭐{avgRating} ({totalRatingsString}) . {costForTwoMessage}
          </h3>
          <h4 className="px-4">
            {cuisines?.join(", ")}
          </h4>
          <h4 className="px-4">{sla?.slaString}</h4>
        </div>
        <div className="menu-item">
          {menuItem.map((items, index) => (
            <MenuCategory key={items?.card?.card?.title} itemData={items} showItem = {index === showIndex ? true : false} setShowIndex= { () => setShowIndex(index)}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
