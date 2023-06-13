import Counter from "./Counter";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();
  return (
   <>
    <Counter/>
    <button onClick={()=>{dispatch({type:"INCREMENT"})}}>Increment</button>
    <button onClick={()=>{dispatch({type:"DECREMENT"})}}>Decrement</button>
    <button onClick={()=>{dispatch({type:"STEP"})}}>Step increase</button>
   </>
  );
}

export default App;
