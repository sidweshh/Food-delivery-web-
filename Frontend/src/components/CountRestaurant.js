import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getRestaurants } from '../actions/restaurantAction'
import "./css/count.css"

const CountRestaurant = () => {

  const dispatch = useDispatch();
  const { count, pureVegRestaurantsCount, showVegOnly, loading, error } =
    useSelector((state) => state.restaurants);
  useEffect(() => {
    dispatch(getRestaurants());
  }, [dispatch,showVegOnly]);

  return (
    <>
      {loading ? (
        <p>Loading restaurant count...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : (
        <p className="NumOfRestro">
          {showVegOnly ? pureVegRestaurantsCount : count}
          <span className="Restro">
            {showVegOnly
              ? pureVegRestaurantsCount === 1
                ? " Restaurant"
                : "Restaurants"
              : count === 1
              ? " Restaurant"
              : " Restaurants"}
          </span>
          <hr />
        </p>
      )}
    </>
  );
}

export default CountRestaurant
