
import MenuItem from "./MenuItem";
const MenuCategory = ({itemData, showItem, setShowIndex}) => {
    const {title, itemCards} = itemData?.card?.card;

   const handleClick = () => {
        setShowIndex();
   };

    return (
        <div>
        <div className="my-4 bg-gray-200 shadow-lg p-3 rounded-md flex justify-between hover:cursor-pointer" onClick={handleClick} >
            <span className=" font-bold text-lg">{title} ({itemCards?.length})</span>
            <span>🔽</span>
        </div>
        { showItem && itemCards.map((items) => (
                    <MenuItem key={itemData?.card?.info?.id} itemData = {items}/>
                ))}
        </div>
    )
}

export default MenuCategory;