import CDN_URL from "../utils/constants";

const RestaurentCard = (props) =>{
    const {resData}=props;
    const {name, cuisines, avgRating, costForTwo, cloudinaryImageId}= resData?.info
    return (
      <div className="m-4 p-3 w-[250px] bg-slate-100 hover:bg-slate-200">
        <img className="rounded-lg w-60 h-40" src={CDN_URL+ cloudinaryImageId} alt="res-logo" />
        <h3 className="font-bold py-3 text-lg">{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4 className="text-blue-500 py-2">⭐ {avgRating} stars</h4>
        <h4 className="underline ">{costForTwo}</h4>
      </div>
    )
  }

  export default RestaurentCard;