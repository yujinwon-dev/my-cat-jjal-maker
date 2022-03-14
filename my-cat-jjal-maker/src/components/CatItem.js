function CatItem({ src }) {
  return (
    <li>
      <img
        src={src}
        alt="Favorite cat"
        style={{ height: "250px", display: "block", margin: "10px" }}
      />
    </li>
  );
}

export default CatItem;
