import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Select, { components } from 'react-select';

function SavedRecipes() {
    return (
        <div className='tan'>
            <div className='d-flex justify-content-between align-items-center pt-4 px-4'>
                <h1 className='mx-auto'>&nbsp;&nbsp;&nbsp;Saved Recipes</h1>
                <Link to="/saved-recipes">
                    <BiSolidFoodMenu className='saved-btn'/>
                </Link>
            </div>
            
        
            <div className='container mt-4'>
                <div className='row'>
                    {filteredRecipes().map((recipe, index) => (
                    <div className='col-4'>
                        <div className='recipe-card' key={index}>
                            <div className='d-flex justify-content-between'>
                                <div>
                                    <img src={recipe.images} alt={`Recipe ${index + 1}`} style={{maxWidth: "100%", maxHeight: "120px"}}></img>
                                </div>
                                <div>
                                    <div className='heart-btn'>
                                        <ToggleButton />
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
            </div>
        </div>
    );
}


export default SavedRecipes;