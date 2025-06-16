import "./App.css";
import FilteredList from "./components/FilteredList";
import peopleData from "./data/people.json";

function App() {
  return (
    <div className="App dark-mode">
      <header className="App-header">
        <h1>React Filter List App</h1>
        <p>Search and filter through a list of people</p>
      </header>
      <main>
        <FilteredList items={peopleData} />
      </main>
    </div>
  );
}

export default App;
