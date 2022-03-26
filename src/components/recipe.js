import React from "react";
import IngredientsList from "./ingredientslist";
import Instructions from "./instructions";

export default function Recipe({title, ingredients, steps}) {
    return (
        <section id={name.toLowerCase().replace(/ /g, "-")}>
            <h1>{name}</h1>
            <IngredientsList list={ingredients}/>
            <Instructions title="Cooking instructions" steps={steps}/>
            <section className="instructions">
                <h2>Cooking Instructions</h2>
                {steps.map((step, i) => (
                    <p key={i}>{step}</p>
                ))}
            </section>
        </section>
    );
}
