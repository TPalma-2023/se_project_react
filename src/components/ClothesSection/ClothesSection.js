import ItemCard from "../ItemCard/ItemCard";
import "./ClothesSection.css";

const ClothesSection = ({ handleCreateModal, clothingItems, onSelectCard }) => {
  return (
    <section className="clothes">
      <div className="clothes__section">
        <p className="clothes__section-text">Your items</p>
        <button
          className="clothes__section-button"
          type="button"
          onClick={handleCreateModal}
        >
          + Add New
        </button>
      </div>

      <div className="clothes__section-cards">
        {clothingItems.map((item) => {
          return (
            <ItemCard item={item} onSelectCard={onSelectCard} key={item._id} />
          );
        })}
      </div>
    </section>
  );
};

export default ClothesSection;
