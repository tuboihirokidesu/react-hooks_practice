import "./App.css";
import UseContextComponents from "./UseContextComponents";
import UseEffectComponents from "./UseEffectComponents";
import UseReducerComponents from "./UseReducerComponents";
import UseStateComponents from "./UseStateComponents";

function App() {
  return (
    <div className='App'>
      <h1>useContext</h1>
      <UseContextComponents />
      <h1>useState & useEffect</h1>
      <UseStateComponents />
      {/* <UseEffectComponents /> */}
      <h1>useReducer</h1>
      <UseReducerComponents />
    </div>
  );
}

export default App;
