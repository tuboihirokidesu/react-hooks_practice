import "./App.css";
import UseContextComponents from "./UseContextComponents";
import UseEffectComponents from "./UseEffectComponents";
import UseStateComponents from "./UseStateComponents";

function App() {
  return (
    <div className='App'>
      <h1>useContext</h1>
      <UseContextComponents />
      <h1>useState & useEffect</h1>
      <UseStateComponents />
      <UseEffectComponents />
    </div>
  );
}

export default App;
