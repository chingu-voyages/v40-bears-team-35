import { useEffect, useState } from 'react';
import styles from '../../styles/Home.module.css';

//temporary  dataset
const data = [
    {title: "Recipe 1", ingredients: "Eggs, Cheese"}, 
    {title: "Recipe 2", ingredients: "Meat, Apple"},
    {title: "Recipe 3", ingredients: "Eggs, Meat"}
]
export default function HomeScreen() {
    const [recipe, setRecipe] = useState(0)
    useEffect(() =>  {
        //initial recipe. should be the one from a data base
        setRecipe(0)
    }, [])

    const switchRecipe = (direction) => {
        console.log(data[recipe].ingredients.split(", "))
        if(direction === 'left') {
            if (recipe === 0) {
                setRecipe(data.length-1)
            } else {
                setRecipe(--recipe)
            }
        }
        if(direction === 'right') {
            if (recipe === data.length-1) {
                setRecipe(0)
            } else {
                setRecipe(++recipe)
            }
        }
    }
    return(
        <div className={styles.container}>
            <div className={`${styles.arrow} ${styles.left} ${styles.singleArrow}`} onClick={() => switchRecipe('left')}></div>
            <div className={styles.outerCircle}>
                <div className={styles.innerCircle}>
                    <div className={styles.content}>
                        <h1>Title: {data[recipe].title}</h1>
                        <p>Ingredient:</p>
                        <ul>
                            {data[recipe].ingredients.split(", ").map((item, index) => {
                                return <li key={index}>
                                    {item}
                                </li>
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <div className={`${styles.arrow} ${styles.right} ${styles.singleArrow}`} onClick={() => switchRecipe('right')}></div>
            <div className={styles.arrowGroup}>
                <div className={`${styles.arrow} ${styles.left}`} onClick={() => switchRecipe('left')}></div>
                <div className={`${styles.arrow} ${styles.right}`} onClick={() => switchRecipe('right')}></div>
            </div>
        </div>
    );
}