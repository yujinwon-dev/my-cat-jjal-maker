import "./App.css";
import React from "react";
import Title from "./components/Title";
import Form from "./components/Form";
import MainCat from "./components/MainCat";
import Favorites from "./components/Favorites";

const fetchCat = async (text) => {
  // api 요청 코드
  const API_BASE_URL = "https://cataas.com";
  const response = await fetch(`${API_BASE_URL}/cat/says/${text}?json=true`);
  const responseJson = await response.json();
  return `${API_BASE_URL}/${responseJson.url}`;
};

// 로컬스토리지 관련 코드
const jsonLocalStorage = {
  // localStorage에 객체를 그냥 저장하면 object Object 형태로 저장됨. string 형태로 변환해서 저장
  setItem: (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  // string으로 저장되어있던 데이터를 JavaScript Object 형태로 변환해서 가져옴
  getItem: (key) => {
    return JSON.parse(localStorage.getItem(key));
  },
};

function App() {
  // 앱이 처음 실행될 때만 접근하도록
  const [count, setCount] = React.useState(() =>
    jsonLocalStorage.getItem("count")
  );
  const [src, setSrc] = React.useState(
    "https://cataas.com/cat/60b73094e04e18001194a309/says/HELLO"
  );
  const [favorites, setFavorites] = React.useState(
    () => jsonLocalStorage.getItem("favorites") || []
  );

  async function setInitialCat() {
    const initialCat = await fetchCat("HELLO WORLD");
    setSrc(initialCat);
  }

  // 처음에만 setInitialCat 호출되도록
  React.useEffect(() => {
    setInitialCat();
  }, []);

  let alreadyFavorite = favorites.includes(src);

  async function updateMainCat(value) {
    const newCat = await fetchCat(value);

    setSrc(newCat);
    setCount((prev) => {
      const nextCount = prev + 1;
      console.log(nextCount);
      jsonLocalStorage.setItem("count", nextCount);
      return nextCount;
    });
  }

  function handleHeartClick() {
    let nextFavorites = [];
    if (alreadyFavorite === true) {
      alreadyFavorite = false;
      nextFavorites = favorites.filter((favorite) => {
        return favorite !== src;
      });
    } else {
      nextFavorites = [...favorites, src];
    }
    setFavorites(nextFavorites);
    jsonLocalStorage.setItem("favorites", nextFavorites);
  }
  const countTitle = count === null ? "" : `${count}번째`;
  return (
    <div className="App">
      <Title>{countTitle} 고양이 가라사대</Title>
      <Form updateMainCat={updateMainCat} />
      <MainCat
        src={src}
        onHandleHeartClick={handleHeartClick}
        alreadyFavorite={alreadyFavorite}
      />
      <Favorites favorites={favorites} />
    </div>
  );
}

export default App;
