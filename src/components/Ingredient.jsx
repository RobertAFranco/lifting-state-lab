import React from 'react';

const Ingredient = ({ ingredient, onClick, isInStack }) => {
  return (
    <li style={{ backgroundColor: ingredient.color }}>
      {ingredient.name}
      <button onClick={onClick}>
        {isInStack ? 'X' : '+'}
      </button>
    </li>
  );
};

export default Ingredient;
