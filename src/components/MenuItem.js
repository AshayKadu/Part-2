const MenuItem = (props) =>{
    const {itemData} = props;

    const {name, imageId, price, defaultPrice, description}= itemData?.card?.info;
    return (
        <div className="flex justify-between my-3 h-44 bg-gray-100 shadow-lg rounded-md">
            <div className="p-2">
            <h3 className=" text-lg font-bold">{name}</h3>
            <h5 className="p-4 font-semibold">₹ {price ? price / 100 : defaultPrice / 100}.00</h5>
            <p className="text-xs">{description}</p>
            </div>
            <div className="flex p-1 justify-center">
           
            <div className="w-40 h-40 p-1 rounded-xl justify-center flex"> 
            <img className="rounded-xl h-40" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`} alt="item-logo" />
            </div>
            <div className="absolute mt-32">
            <button className=" px-8 py-2 rounded-xl m-auto bg-slate-50 text-green-600 font-bold text-lg ">ADD</button>
            </div>
            </div>
        </div>
    )
}

export default MenuItem;