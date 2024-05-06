import { CurrentUserContext } from "../../contexts/CurrentUserContext";
import { useContext } from "react";
import "./ItemCard.css";

const ItemCard = ({ item, onSelectCard, loggedIn, onLike }) => {
  const currentUser = useContext(CurrentUserContext);
  const isLiked = item.likes.some((user) => {
    return user.includes(currentUser?._id);
  });
  const likeButtonClass = `card_likebutton ${
    isLiked ? "card_likebutton-active" : "card_likebutton-inactive"
  }`;

  function handleLikeClick(id, isLiked) {
    onLike(id, isLiked);
  }

  return (
    <div className="card_item">
      <div>
        {loggedIn ? (
          <div className="card_button_container">
            <button
              type="button"
              className={likeButtonClass}
              onClick={() => {
                handleLikeClick(item._id, isLiked);
              }}
            ></button>
          </div>
        ) : (
          <></>
        )}
      </div>
      <img
        src={item.imageUrl}
        alt={item.name}
        className="card_image"
        onClick={() => onSelectCard(item)}
      ></img>
      <p className="card_name">{item.name}</p>
    </div>
  );
};

export default ItemCard;
