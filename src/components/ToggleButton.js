import React, { useState } from 'react';
import { RiHeartAddFill, RiHeartAddLine } from 'react-icons/ri';

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

    //console.log("saved recipes" + savedRecipes);

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