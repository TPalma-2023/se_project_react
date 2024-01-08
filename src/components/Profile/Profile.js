import React from "react";
import "./Profile.css";
import SideBar from "./Sidebar";
import ClothesSection from "../ClothesSection/ClothesSection";

const Profile = ({ onClick, clothingItems, onSelectCard }) => {
  return (
    <div className="profile">
      <SideBar />
      <ClothesSection
        handleCreateModal={onClick}
        onSelectCard={onSelectCard}
        clothingItems={clothingItems}
      />
    </div>
  );
};

export default Profile;
