const CityItem = ({ data, index, lastItem }) => {
    const { name, isCapital, population, location, touristAttractions } = data
    const { continent, country } = location

    let capitalTitle = ''
    let capitalClass = ''
    let capitalDescription = ''

    if (isCapital) {
        capitalTitle = '(capital)'
        capitalClass = 'capital'
        capitalDescription = ` ${name} is the capital of ${country}.`
    }

    let touristAttractionsTitle = `Main Tourist attractions of ${name} are:`

    if (touristAttractions.length === 1) {
        touristAttractionsTitle = `Main Tourist attraction of ${name} is:`
    }


    const lastOddItem = lastItem && (index + 1) % 2 !== 0

    const elementStyle = {
        width: lastOddItem ? '100%' : '48%',
        padding: '10px',
        border: '2px solid black',
        marginBottom: '10px'
    }

    return (
        <div style={elementStyle} className={`city-item ${capitalClass}`}>
            <h2>{name} {capitalTitle}</h2>
            <p>{name} city is located in {continent}, {country} and has population of {population} people.{capitalDescription}</p>
            
            {touristAttractions.length > 0 && (
                <div>
                    <h3>{touristAttractionsTitle}</h3>
                    <ul>
                        {touristAttractions.map((attraction, index) => (
                            <li key={index}>{attraction}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default CityItem