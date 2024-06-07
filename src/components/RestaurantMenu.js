import { useEffect, useState } from "react";
import MenuItem from "./MenuItem";
import { useParams } from "react-router-dom";


const RestaurantMenu = () => {

    const [resName, setResName] = useState([]);
    const [menuItem, setMenuItem] = useState([]);

    const {resId} = useParams();


    useEffect(()=> {
        fetchMenu();
    }, []);

    const fetchMenu = async() =>{
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.71700&lng=75.83370&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards);
        setResName(json?.data?.cards[2]?.card?.card?.info);
        setMenuItem(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards)
    }

    return (
        <div className="resname">
            <div className="name-container">
            <h1>{resName.name}</h1>
            <div className="resdetails">
            <h3>⭐{resName?.avgRating} ({resName?.totalRatingsString}) . {resName?.costForTwoMessage}</h3>
            {/* <h4>{resName?.cuisines.join(", ")}</h4> */}
            <h4>{resName?.sla?.slaString}</h4>
            </div>
            <div className="menu-item">
                <h2>Recomended</h2>
                {menuItem.map((items) => (
                    <MenuItem key ={items.card.info.id} itemData = {items}/>
                ))}
{/*                 
                {filteredRestaurant.map((restaurant) => (
          <RestaurentCard key={restaurant.info.id} resData={restaurant} />
        ))} */}
            </div>
            </div>
        </div>
    )
}

export default RestaurantMenu;