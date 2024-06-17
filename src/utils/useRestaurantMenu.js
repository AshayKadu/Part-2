import { useEffect, useState } from "react";


export const useRestaurantMenu = (resId) => {

    const [resName, setResName]= useState([]);

    useEffect(() => {
        fetchData();
    }, []) ;

    const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.71700&lng=75.83370&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        setResName(json?.data?.cards[2]?.card?.card.info);
        // console.log(json?.data?.cards[2]?.card?.card.info);
    }

    return resName;
};

export  const useRestaurantItem = (resId) => {
    const [menuItem, setMenuItem] = useState([]);

    useEffect(() => {
        fetchData();
    }, []) ;

    const fetchData = async() => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.71700&lng=75.83370&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
        const json = await data.json();
        
        // console.log(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
        
        const categories = json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=> c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
        // console.log(categories);
        // setMenuItem(json?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.itemCards);

        setMenuItem(categories);
    }

    return menuItem;
};