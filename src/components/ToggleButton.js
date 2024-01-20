import React, { useState } from 'react';
import { RiHeartAddFill, RiHeartAddLine } from 'react-icons/ri';

// this function creates and handles the toggle button component
// using the isToggled state, the recipe is either added or unadded from the saved recipes list
const ToggleButton = ({ recipe, savedRecipes, setSavedRecipes }) => {
    
    const [isToggled, setToggle] = useState(false);

    const handleToggle = () => {
        setToggle(!isToggled);
        
        if (!isToggled && !savedRecipes.includes(recipe)) {
            setSavedRecipes((prev) => [...prev, recipe]);
            recipe.saved = true;
        } else {
            setSavedRecipes((prev) => prev.filter((r) => r !== recipe));
            recipe.saved = false;
        }
    };

    // returns the toggle button which is displayed as a filled heart if the recipe is saved
    // or as a hollow heart if the recipe is not saved
    return (
        <button onClick={handleToggle} style={{ border: "none", background: "none" }}>
            {recipe.saved ? (
                <RiHeartAddFill size="25px" />
            ) : (
                <RiHeartAddLine size="25px" />
            )}
        </button>
    );
    
};

export default ToggleButton;