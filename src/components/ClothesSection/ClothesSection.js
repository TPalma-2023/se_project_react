import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";
import { useContext } from "react";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const ClothesSection = ({
  handleCreateModal,
  clothingItems,
  onSelectCard,
  loggedIn,
  onLike,
}) => {
  const currentUser = useContext(CurrentUserContext);

  return (
    <section className="clothes">
      {clothingItems ? (
        <div className="clothes_section">
          <p className="clothes_section-text">Your items</p>
          <button
            className="clothes_section-button"
            type="button"
            onClick={handleCreateModal}
          >
            + Add New
          </button>
        </div>
      ) : null}
      {clothingItems ? (
        <div className="clothes_section-cards">
          {clothingItems.map((item) => {
            const isOwn = currentUser._id === item.owner;
            if (isOwn) {
              return (
                <ItemCard
                  item={item}
                  onSelectCard={onSelectCard}
                  key={item._id}
                  loggedIn={loggedIn}
                  onLike={onLike}
                />
              );
            } else return null;
          })}
        </div>
      ) : null}
    </section>
  );
};

export default ClothesSection;
