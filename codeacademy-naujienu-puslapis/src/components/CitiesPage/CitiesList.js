
import CityItem from "./CityItem"

const CitiesList = ({ data }) => {
   
    const citiesListElement = data.map((city, index) => {
        const isLastItem = data.length === index + 1
        
        return (
            <CityItem 
                lastItem={isLastItem} 
                index={index} 
                data={city} 
                key={index} 
            />
        )
    })

    return (
        <div>
            <h1>{data.length > 0 ? 'Cities:' : 'No cities...'}</h1>

            {data.length > 0 && (
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }} className="cities-list">
                    {citiesListElement}
                </div>
            )}
        </div>
    )
}

export default CitiesList
