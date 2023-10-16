import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { ordered, restocked } from "./icecreamSlice";

const IcecreamComponent = () => {
  const dispatch = useDispatch();
  const noOfIcecream = useSelector((state) => state.icecream.noOfIcecream);
  return (
    <div>
      <h6>{noOfIcecream} Icecream left</h6>
      <button onClick={() => dispatch(ordered())}>buy</button>
    </div>
  );
};

export default IcecreamComponent;
