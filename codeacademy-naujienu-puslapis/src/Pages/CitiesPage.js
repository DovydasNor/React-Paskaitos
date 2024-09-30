import { useState } from "react"
import CitiesForm from "../components/CitiesPage/CitiesForm.js"
import CitiesList from "../components/CitiesPage/CitiesList"

const CitiesPage = () => {
    const initialCities = [
        {
            name: 'Kaunas',
            population: 500000,
            location: {
                continent: 'Europe',
                country: 'Lithuania'
            },
            touristAttractions: ['Pirma vieta', 'Antra vieta'],
            isCapital: true
        },
        {
            name: 'Paris',
            population: 500000,
            location: {
                continent: 'Europe',
                country: 'France'
            },
            touristAttractions: ['Pirma vieta', 'Antra vieta'],
            isCapital: true
        },
        {
            name: 'Vilnius',
            population: 500000,
            location: {
                continent: 'Europe',
                country: 'Lithuania'
            },
            touristAttractions: [],
            isCapital: true
        },
        {
            name: 'Vilnius',
            population: 500000,
            location: {
                continent: 'Europe',
                country: 'Lithuania'
            },
            touristAttractions: ['Pirma vieta', 'Antra vieta'],
            isCapital: false
        },
        {
            name: 'Vilnius',
            population: 500000,
            location: {
                continent: 'Europe',
                country: 'Lithuania'
            },
            touristAttractions: ['Pirma vieta', 'Antra vieta'],
            isCapital: true
        },
        {
            name: 'Vilnius',
            population: 100000,
            location: {
                continent: 'Europe',
                country: 'Lithuania'
            },
            touristAttractions: ['Antra vieta'],
            isCapital: false
        },
    ]

    const [cities, setCities] = useState(initialCities)
    
    const newCityHandler = (newCityData) => {
        setCities(prevState => [newCityData, ...prevState])
    }

    return (
        <div>
            <CitiesForm onNewCity={newCityHandler} />

            <CitiesList data={cities} />
        </div>
    )
}

export default CitiesPage