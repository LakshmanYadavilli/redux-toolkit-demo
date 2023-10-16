import { useState, useEffect } from "react";

import CakeComponent from "./features/cake/CakeComponent";
import { useSelector, useDispatch } from "react-redux";
import IcecreamComponent from "./features/icecream/IcecreamComponent";
import { fetchUser } from "./features/users/userSlice";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const dispatch = useDispatch();
  // const fetch = async () => {
  //   let res = await useDispatch(fetchUser());
  // };
  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  const userData = useSelector((state) => state.user.userData);

  console.log(userData);

  return (
    <>
      <h1>BUY NOW</h1>
      <CakeComponent />
      <IcecreamComponent />
      <ul>
        {userData.map((i) => (
          <li>{i}</li>
        ))}
      </ul>
    </>
  );
}

export default App;
