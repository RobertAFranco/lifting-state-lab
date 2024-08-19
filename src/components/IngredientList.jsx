import React from 'react';
import Ingredient from './Ingredient';

const IngredientList = ({ ingredients, addToBurger }) => {
  return (
    <ul className="ingredient-list">
      {ingredients.map((ingredient, index) => (
        <Ingredient 
          key={index}
          ingredient={ingredient}
          onClick={() => addToBurger(ingredient)}
          isInStack={false} // This indicates it's not in the stack
        />
      ))}
    </ul>
  );
};

export default IngredientList;


  