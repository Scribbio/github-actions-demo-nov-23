import logo from "./logo.svg";
import "./App.css";
import StoreList from "./components/store-list/StoreList";

function App() {
  return (
    <div className="App">
      <h1 className="App-header">Our list of stores</h1>
      <StoreList />
    </div>
  );
}

export default App;
