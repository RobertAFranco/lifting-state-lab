import React from 'react';
import Ingredient from './Ingredient';

const BurgerStack = ({ stack, removeFromBurger }) => {
  return (
    <ul className="burger-stack">
      {stack.length === 0 ? (
        <li>No Ingredients</li> // Message when stack is empty
      ) : (
        stack.map((ingredient, index) => (
          <Ingredient 
            key={index}
            ingredient={ingredient}
            onClick={() => removeFromBurger(index)}
            isInStack={true} // This indicates it is in the stack
          />
        ))
      )}
    </ul>
  );
};

export default BurgerStack;
