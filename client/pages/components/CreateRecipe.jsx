import { useState } from "react";
import Nav from "./Nav"
import axios from 'axios';
import styles from '../../styles/CreateRecipe.module.css'

export default function CreateRecipe() {
    const [ingredients, setIngredients] = useState(["ingredient"])
    const [steps, setSteps] = useState(["step"])
    
    const handleSubmit = (e) => {
        e.preventDefault()
        // Save all the steps and ingredients into arrays
        let ingredientArr = []
        let stepArr = []
        let i = 0
        // Save all inputs into array until null input name
        while(e.target['ingredient'+i] || e.target['step'+i]) {
            if(e.target['ingredient'+i]) {
                if(e.target['ingredient'+i].value !== "") {
                    ingredientArr.push(e.target['ingredient'+i].value)
                }
            }
            if(e.target['step'+i]) {
                if(e.target['step'+i].value !== "") {
                    stepArr.push(e.target['step'+i].value)
                }
            }
            i++
        }
        const obj = {name: e.target.name.value, ingredients: ingredientArr, steps: stepArr}
        console.log(obj)
        axios.post("http://localhost:8000/api/recipe", obj)
        .then(resp => console.log(resp))
        .catch(err => console.log(err))
    }

    // Create addictional input field for ingredient and step.
    const addIngredientField = () => {
        const temp = [...ingredients, "ingredient"]
        setIngredients(temp)
    }
    const addStepField = () => {
        const temp = [...steps, "step"]
        setSteps(temp)
    }
    return(
        <>
            <Nav/>
            <div className={styles.box}>
                <h1>New Recipe</h1>
                <form onSubmit={handleSubmit}>
                    <div className={styles.col}>
                        {/* Name for recipe */}
                        <div className={styles.formGroup}>
                            <label>Name</label>
                            <input type="text" placeholder="Enter a name" className={styles.input} name="name"/>
                        </div>
                        {/* Ingredients */}
                        <div className={styles.formGroup}>
                            <label>Ingredients:</label>
                            {/* Dynamically create input field */}
                            {ingredients.map((item, index) => {
                                return <input key={index} type="text" placeholder="Enter an Ingredient" className={styles.input} name={`ingredient${index}`}/>;
                            })}
                            {/* Create addictional fields */}
                            <button type="button" className={styles.btn} onClick={addIngredientField}>Add Ingredient</button>
                        </div>
                        {/* Steps */}
                        <div className={styles.formGroup}>
                            <label>Steps:</label>
                            {/* Dynamically create input field */}
                            {steps.map((item, index) => {
                                return <input key={index} type="text" placeholder={`Enter Step ${index+1}`} className={styles.input} name={`step${index}`}/>;
                            })}
                            {/* Create addictional fields */}
                            <button type="button" className={styles.btn} onClick={addStepField}>Add Another Step</button>
                        </div>
                    </div>
                    <button type="submit" className={`${styles.btn} ${styles.submitBtn}`}>Submit</button>
                </form>
            </div>
        </>
    );
}