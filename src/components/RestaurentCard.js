import CDN_URL from "../utils/constants";

const RestaurentCard = (props) =>{
    const {resData}=props;
    const {name, cuisines, avgRating, costForTwo, cloudinaryImageId}= resData?.info
    return (
      <div className="res-card" style={{backgroundColor : "#f0f0f0"}}>
        <img className="res-logo" src={CDN_URL+ cloudinaryImageId} alt="res-logo" />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4 style={{color:"skyblue"}}>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
      </div>
    )
  }

  export default RestaurentCard;