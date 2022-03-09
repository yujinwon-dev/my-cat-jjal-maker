import './App.css';
import Title from "./components/Title"
import Form from "./components/Form"
import MainCat from "./components/MainCat"
import Favorites from "./components/Favorites"

function App() {
  return (
    <div className="App">
      <Title />
      <Form />
      <MainCat />
      <Favorites />
    </div>
  );
}

export default App;
