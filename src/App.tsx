import "./App.css";
import Practice from "./components/Practice";
import { firstInterface } from "./interfaces";

function App() {
  function testFunction(variable: firstInterface) {
    console.log("first", variable);
  }

  const myVar: firstInterface = {
    greeting: "hello",
  };

  const myNewVar: firstInterface = {
    greeting: "goodby",
  };

  testFunction(myVar);

  return (
    <div>
      <Practice myVar={myVar} myNewVar={myNewVar} />
    </div>
  );
}

export default App;
