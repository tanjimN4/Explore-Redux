// import { useDispatch, useSelector } from "react-redux"
// import { decrement, increment } from "./redux/features/counter/counterSlice";
// import { RootState } from "./redux/store";
// import { useAppSelector } from "./redux/hook";
// import { use } from "react";

import { Link, Outlet } from "react-router"
import { Button } from "./components/ui/button"
import { ModeToggle } from "./components/ui/mode-toggle"


function App() {

  // // const dispatch =useDispatch()
  // const dispatch =useDispatch();

  // // const {count} = useSelector((state : RootState) => state.counter);
  // const {count} = useAppSelector((state)=> state.counter);

  // const handleIncrement = ( amount : number) => {
  //   dispatch(increment(amount));
  // };
  // const handleDecrement = () => {
  //   dispatch(decrement());
  // };


  return (
    // <div>

    //   <h1 className="text-3xl text-blue-600">Counter With Redux</h1>
    //   <Button>ok</Button>

    //   {/* <button onClick={()=>handleIncrement(5)}>increment by 5</button>
    //   <button onClick={()=>handleIncrement(1)}>increment</button>
    //   <h2>{count}</h2>
    //   <button onClick={handleDecrement}>decrement</button> */}
    // </div>
    <div>
      <div className="flex justify-between items-center p-4 bg-gray-200 dark:bg-gray-800">
        <h1>Task Bar</h1>
        <Button><Link to={"/users"}>Users</Link></Button>
        <Button><Link to={"/"}>Tasks</Link></Button>
        <div>
          <ModeToggle></ModeToggle>
        </div>
      </div>
      <Outlet></Outlet>
    </div>
  )
}

export default App
