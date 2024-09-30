import React from 'react'
import CarItem from './CarItem'

const CarsList = ({ data }) => {
  if (!data || data.length === 0) {
    return <h2>No Cars yet...</h2>
  }

  return (
    <div>
      <h2>Cars:</h2>

      <div className='cars-list'>
        {data.map(car => <CarItem key={car.id} data={car} />)}
      </div>
    </div>
  )
}

export default CarsList