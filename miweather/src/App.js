import './App.css';
import Search from "./components/search/search";

function App() {

  const handleonSearchChange = (searchData) => {
    console.log(searchData);
  }

  return (
    <div className="container">
     <Search onSearchChange={handleOnSearchChange} />
    </div>
  );
}

export default App;
