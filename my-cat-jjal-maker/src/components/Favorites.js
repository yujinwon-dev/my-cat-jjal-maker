import CatItem from ".//CatItem";

function Favorites({ favorites }) {
  if (favorites.length === 0) {
    return <p>사진 위 하트를 눌러 고양이 사진을 저장해보세요!</p>;
  }

  return (
    <ul className="favorites">
      {favorites.map((favorite) => {
        return <CatItem src={favorite} key={favorite} />;
      })}
    </ul>
  );
}

export default Favorites;
