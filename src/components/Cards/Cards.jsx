import "./Cards.css";
import { restaurants } from "../../../Data/data";

export default Cards = (props) => {
  return (
    <div className="card-main">
      <div className="body-card">
        <img className="menu-item-img" src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${props.cloudinaryImageId}`} alt="" />
      </div>
      <h3 className="name-of-restaurants">{props.name}</h3>
      <div>
        <span className="rating">{props.avgRating}</span> &nbsp;
        <span className="mins-away">{props.sla.deliveryTime} mins</span>
      </div>
      <div className="menu-food-items">{props.cuisines.join(', ')}</div>
    </div>
  );
};
