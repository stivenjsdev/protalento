import {useParams} from 'react-router-dom' 
import {useEffect, useState} from 'react'

function Drink(){

    const {id} = useParams() 
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
    const [drink, setDrink] = useState({})

    useEffect(()=>{
        async function getDrinks(){
            const response = await fetch(url)
            const json = await response.json()
            setDrink(json.drinks[0])
        }
        getDrinks()
    })


    return (
        <>
            <section className="hero is-white is-fullheight">
                <div className="hero-body">
                    <div className="is-flex is-justify-content-start">
                        <figure className="image is-drink mr-4">
                            <img src={drink.strDrinkThumb} alt="Placeholder image"/>
                        </figure>
                        <div className="info">
                            <h1 className="title">{drink.strDrink}</h1>
                            <h3 className="subtitle">{drink.strCategory}</h3>
                            <p className="content">{drink.strInstructions}</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Drink