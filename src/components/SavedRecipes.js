import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select, { components } from 'react-select';
import { Link } from 'react-router-dom';
import { FaChevronLeft } from "react-icons/fa";
import { PiCookingPotBold } from "react-icons/pi";
import ToggleButton from './ToggleButton';

// this creates the saved recipes page
// the saved recipes are displayed using savedRecipes.map where each saved recipe is rendered into a card with its info
const SavedRecipesPage = ({ savedRecipes, setSavedRecipes }) => {
    console.log("From saved recipes" + savedRecipes);
    return (
        <div>
            <div className='d-flex justify-content-between align-items-center pt-4 px-4'>
                <Link to="/">
                    <FaChevronLeft size="30px"/>
                </Link>
                <h1 className='mx-auto'>Saved Recipes</h1>
            </div>
        
            <div className='container mt-4'>
                {savedRecipes ? (
                <div className='row'>
                    {savedRecipes.map((recipe, index) => (
                    <div className='col-4'>
                        <div className='recipe-card' key={index}>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <img src={recipe.images} alt={`Recipe ${index + 1}`} style={{maxWidth: "100%", maxHeight: "120px"}}></img>
                                </div>
                                <div>
                                    <div className='heart-btn'>
                                        <ToggleButton recipe={recipe} savedRecipes={savedRecipes} setSavedRecipes={setSavedRecipes}/>
                                    </div>
                                    <div className='pot-btn'>
                                        {/* target="_blank" opens link in new tab */}
                                        <a href={recipe.url} target="_blank" rel="noopener noreferrer">
                                            <PiCookingPotBold size="25px"/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className='recipe-title'>{recipe.title}</div>
                            <h6>{recipe.description}</h6>
                        </div>
                    </div>
                    ))}
                </div>
                ) : (
                    <h2>No Saved Recipes yet</h2>
                )}
            </div>
        </div>
    );
}


export default SavedRecipesPage;