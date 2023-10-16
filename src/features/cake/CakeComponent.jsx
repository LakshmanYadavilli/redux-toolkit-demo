import React from "react";

import { ordered, restoked } from "./cakeSlice";
import { useSelector, useDispatch } from "react-redux";

const CakeComponent = () => {
  const noOfCakes = useSelector((state) => state.cake.noOfCakes);
  const dispatch = useDispatch();
  return (
    <div>
      <h6>{noOfCakes} Cakes Left</h6>
      <button
        onClick={() => {
          // console.log(store.getState());
          dispatch(ordered());
          // console.log(store.getState());
        }}
      >
        buy
      </button>
      <button onClick={() => dispatch(restoked(5))}>Restocked</button>
    </div>
  );
};

export default CakeComponent;
