const MenuItem = (props) =>{
    const {itemData} = props;
    const {name, imageId, category, description}= itemData?.card?.info;
    return (
        <div className="items">
            <div className="items-container">
            <h3>{name}</h3>
            <h5>{category}</h5>
            <p>{description}</p>
            </div>
            <img className="item-logo" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/${imageId}`} alt="item-logo" />
        </div>
    )
}

export default MenuItem;