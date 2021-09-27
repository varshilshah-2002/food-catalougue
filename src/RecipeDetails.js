import * as React from 'react'
const RecipeDetails = ({ title, source, calories, ingredients }) => {
    return (
        <div>
            <h1>{title}</h1>
            <div className='detail'>
                <div >
                    <img src={source} alt="recipe"></img>
                    <h3>Calories : {Math.floor(calories)} kJ </h3>
                </div>
                <div >
                    <h1>Ingredients needed:</h1>
                    <ol>
                        {ingredients.map(ingredient => (
                            <li>{ingredient.text}</li>
                        ))}
                    </ol>
                </div>
            </div>
        </div>
    );
}

export default RecipeDetails
