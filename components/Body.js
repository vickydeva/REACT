import RestaurantProperties from "./Restaurant";
import { useState, useEffect } from "react";
import { SWIGGY_API } from "../utils/constants";
import Shimmer from "./Shimmer";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [NewResList, setNewResList] = useState([]);
  const [filterResList, setfilterResList] = useState();
  const [searchText, setsearchText] = useState("");
  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const data = await fetch(SWIGGY_API);
    const json = await data.json();
    console.log(json);
    setNewResList(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
    setfilterResList(
      json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  if (!onlineStatus) {
    return <h1>You're offline, check your connection, please!!!</h1>;
  }

  return NewResList.length == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="btn-rated">
        <button
          onClick={() => {
            const filterList = NewResList.filter(
              res => res.info.avgRating > 4.2
            );
            setfilterResList(filterList);
          }}
        >
          Top Rated
        </button>
        <input
          type="text"
          className="input"
          placeholder="search for food"
          value={searchText}
          onChange={e => {
            setsearchText(e.target.value);
          }}
        ></input>
        <button
          className="btn-search"
          onClick={() => {
            console.log(searchText);
            const filter = NewResList.filter(res =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setfilterResList(filter);
          }}
        >
          Search
        </button>
      </div>
      <div className="res-container">
        {filterResList.map(resList => (
          <RestaurantProperties key={resList.info.id} resData={resList} />
        ))}
      </div>
    </div>
  );
};

export default Body;
