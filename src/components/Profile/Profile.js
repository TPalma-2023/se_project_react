import React from "react";
import "./Profile.css";
import SideBar from "../Sidebar/Sidebar";
import ClothesSection from "../ClothesSection/ClothesSection";

const Profile = ({
  onClick,
  clothingItems,
  onSelectCard,
  logout,
  loggedIn,
  editProfile,
  onLike,
}) => {
  return (
    <div className="profile">
      <SideBar editProfile={editProfile} logout={logout} />
      <ClothesSection
        handleCreateModal={onClick}
        onSelectCard={onSelectCard}
        clothingItems={clothingItems}
        loggedIn={loggedIn}
        logout={logout}
        onLike={onLike}
      />
    </div>
  );
};

export default Profile;
