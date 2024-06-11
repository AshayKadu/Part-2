// import { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import { useParams } from "react-router-dom";
import {useRestaurantMenu, useRestaurantItem} from "../utils/useRestaurantMenu";


const RestaurantMenu = () => {

    // const [resName, setResName] = useState([]);
    // const [menuItem, setMenuItem] = useState([]);

    const {resId} = useParams();

    const resName = useRestaurantMenu(resId);
    // console.log(ashay)
    const menuItem = useRestaurantItem(resId);


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

    const {name, avgRating, totalRatingsString, costForTwoMessage, sla} = resName;
    // console.log(resName)
    // const menuItem= ashay?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;

    return (
        <div className="resname">
            <div className="name-container">
            <h1>{name}</h1>
            <div className="resdetails">
            <h3>⭐{avgRating} ({totalRatingsString}) . {costForTwoMessage}</h3>
            {/* <h4>{resName?.cuisines.join(", ")}</h4> */}
            <h4>{sla?.slaString}</h4>
            </div>
            <div className="menu-item">
                <h2>Recomended</h2>
                {menuItem.map((items) => (
                    <MenuItem key ={items.card.info.id} itemData = {items}/>
                ))}

            </div>
            </div>
        </div>
    )
}

export default RestaurantMenu;