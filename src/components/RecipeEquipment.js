import React from "react";

const RecipeEquipment = ({ recipe }) => {
  const { equipment } = recipe;

  return (
    <div>
      <div className="recipe-equipment">
        <h6 className="equipment-heading6">Equipment</h6>
        <ul className="equipment-list">
          {equipment.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeEquipment;
