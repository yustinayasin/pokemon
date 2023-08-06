import Card from "./Card";
import FilterBar from "./FilterBar";

function App() {
  return (
    <div className="m-20 flex flex-column justify-between items-start">
      <FilterBar />
      <Card />
    </div>
  )
}

export default App;
