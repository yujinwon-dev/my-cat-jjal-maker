function MainCat({ src }) {
  return (
    <div className="main-cat">
      <img src={src} alt="cat with message" height="500" />
      <button type="button">❤</button>
    </div>
  );
}

export default MainCat;
