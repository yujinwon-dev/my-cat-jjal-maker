import "./App.css";
import React from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import MainCat from "./components/MainCat";
import Favorites from "./components/Favorites";

const fetchCat = async (text) => {
  const API_BASE_URL = "https://cataas.com";
  const response = await fetch(`${API_BASE_URL}/cat/says/${text}?json=true`);
  const responseJson = await response.json();
  return `${API_BASE_URL}/${responseJson.url}`;
};

function App() {
  const [count, setCount] = React.useState(0);
  const [src, setSrc] = React.useState(
    "https://cataas.com/cat/60b73094e04e18001194a309/says/Hello"
  );

  async function updateMainCat(value) {
    const newCat = await fetchCat(value);

    setSrc(newCat);
    setCount((prev) => {
      return prev + 1;
    });
  }

  return (
    <div className="App">
      <Title count={count} />
      <Form updateMainCat={updateMainCat} />
      <MainCat src={src} />
      <Favorites />
    </div>
  );
}

export default App;
