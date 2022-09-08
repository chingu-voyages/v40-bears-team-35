import { useEffect, useState } from 'react';
import { useUserContext } from '../context/UserWrapper';
import styles from '../../styles/Home.module.css';
import axios from 'axios';

export default function HomeScreen() {
    const [recipe, setRecipe] = useState(0)
    const [data, setData] = useState([])
    const {user} = useUserContext()

    useEffect(() =>  {
        //initial recipe. should be the one from a data base
        setRecipe(0)
        axios.get("http://localhost:8000/api/recipes")
        .then(resp => {
            setData(resp.data)
        })
        .catch(err => console.log(err))
        // console.log(user)
    }, [])

    const switchRecipe = (direction) => {
        if (data.length > 0) {
            if (direction === 'left') {
                if (recipe === 0) {
                    setRecipe(data.length-1)
                } else {
                    setRecipe(--recipe)
                }
            }
            if (direction === 'right') {
                if (recipe === data.length-1) {
                    setRecipe(0)
                } else {
                    setRecipe(++recipe)
                }
            }
        }
    }
    return(
        <div className={styles.container}>
            <div className={`${styles.arrow} ${styles.left} ${styles.singleArrow}`} onClick={() => switchRecipe('left')}></div>
            <div className={styles.outerCircle}>
                <div className={styles.innerCircle}>
                    {data.length > 0 &&
                        <div className={styles.content}>
                            <h1>Title: {data[recipe].name}</h1>
                            <p>Ingredient:</p>
                            <ul>
                                {data[recipe].ingredients.map((item, index) => {
                                    return <li key={index}>
                                        {item}
                                    </li>
                                })}
                            </ul>
                        </div>
                    }
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