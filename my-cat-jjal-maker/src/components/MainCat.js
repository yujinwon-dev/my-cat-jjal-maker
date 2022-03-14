function MainCat({ src, onHandleHeartClick, alreadyFavorite }) {
  const heartIcon = alreadyFavorite ? "💖" : "🤍";
  return (
    <div className="main-cat">
      <img src={src} alt="cat with message" height="500" />
      <button type="button" onClick={onHandleHeartClick}>
        {heartIcon}
      </button>
    </div>
  );
}

export default MainCat;
