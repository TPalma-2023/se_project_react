const ItemCard = ({ item, onSelectCard }) => {
  return (
    <div>
      <div className="card_item">
        <img
          src={item.link}
          className="card_image"
          onClick={() => onSelectCard(item)}
        ></img>
        <div className="card_name">{item.name}</div>
      </div>
    </div>
  );
};

export default ItemCard;
