
import { useState } from "react"

const CitiesForm = ({ onNewCity }) => {
    const [name, setName] = useState('')
    const [population, setPopulation] = useState('')
    const [continent, setContinent] = useState('')
    const [country, setCountry] = useState('')
    const [touristAttractions, setTouristAttractions] = useState('')
    const [isCapital, setIsCapital] = useState(false)
    const [checkboxes, setCheckboxes] = useState([])

    const nameHandler = event => setName(event.target.value)
    const populationHandler = event => setPopulation(event.target.value)
    const continentHandler = event => setContinent(event.target.value)
    const countryHandler = event => setCountry(event.target.value)
    const touristAttractionsHandler = event => setTouristAttractions(event.target.value)
    const capitalHandler = event => setIsCapital(event.target.checked)

    const checkboxHandler = (event) => {
        setCheckboxes(prevState => {
            const checkedValue = event.target.value
            const isChecked = event.target.checked

            if (isChecked) {
                return [...prevState, checkedValue]
            } 

            return prevState.filter(item => item !== checkedValue)
        })
    }

    const newCityHandler = event => {
        event.preventDefault()

        let touristAttractionsArray = []

        if (touristAttractions.trim().length > 0) {
            touristAttractionsArray = touristAttractions.split(',').map(attraction => {
                const trimmedName = attraction.trim()
                const attractionName = trimmedName[0].toUpperCase() + trimmedName.slice(1)
                return attractionName
            })
        }

        const newCity = {
            name,
            population,
            location: {
                continent,
                country
            },
            touristAttractions: touristAttractionsArray,
            isCapital
        }

        onNewCity(newCity)

        setName('')
        setPopulation('')
        setContinent('')
        setCountry('')
        setTouristAttractions('')
        setIsCapital(false)
        setCheckboxes([])
    }

    return (
        <div>
            <form onSubmit={newCityHandler}>
                <fieldset>
                    <legend>Title</legend>

                    <div>
                        <input type="checkbox" name="first" id="first" value="first" checked={checkboxes.includes("first")} onChange={checkboxHandler} />
                        <label htmlFor="first">First:</label>
                    </div>
                    
                    <div>
                        <input type="checkbox" name="second" id="second" value="second" checked={checkboxes.includes("second")} onChange={checkboxHandler} />
                        <label htmlFor="second">Second:</label>
                    </div>
                    
                    <div>
                        <input type="checkbox" name="third" id="third" value="third" checked={checkboxes.includes("third")} onChange={checkboxHandler} />
                        <label htmlFor="third">Third:</label>
                    </div>
                </fieldset>

                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" id="name" value={name} onChange={nameHandler} />
                </div>

                <div>
                    <label htmlFor="population">Population:</label>
                    <input type="number" name="population" id="population" value={population} onChange={populationHandler} />
                </div>

                <div>
                    <label htmlFor="continent">Continent:</label>
                    <input type="text" name="continent" id="continent" value={continent} onChange={continentHandler} />
                </div>

                <div>
                    <label htmlFor="country">Country:</label>
                    <input type="text" name="country" id="country" value={country} onChange={countryHandler} />
                </div>

                <div>
                    <label htmlFor="tourist-attractions">Tourist Attractions:</label>
                    <textarea name="tourist-attractions" id="tourist-attractions" value={touristAttractions} onChange={touristAttractionsHandler} />
                </div>

                <div>
                    <input type="checkbox" name="is-capital" id="is-capital" checked={isCapital} onChange={capitalHandler} />
                    <label htmlFor="is-capital">Capital</label>
                </div>

                <button type="submit">Create New City</button>
            </form>
        </div>
    )
}

export default CitiesForm
