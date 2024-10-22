import { IMG_URL } from "../utils/constants";

const RestaurantProperties = resvalue => {
  const { resData } = resvalue;
  return (
    <div className="res-card">
      <img className="res-img" src={IMG_URL + resData.info.cloudinaryImageId} />
      <h2>{resData.info.name}</h2>
      <p>{resData.info.costForTwo}</p>
      <p>{resData.info.cuisines.join(", ")}</p>
      <p>{resData.info.avgRating}</p>
    </div>
  );
};

export default RestaurantProperties;
