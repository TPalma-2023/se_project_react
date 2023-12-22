const ItemCard = ({ item, onSelectCard }) => {
  return (
    <div className="card_item">
      <img
        src={item.link}
        alt={item.name}
        className="card_image"
        onClick={() => onSelectCard(item)}
      ></img>
      <p className="card_name">{item.name}</p>
    </div>
  );
};

export default ItemCard;
