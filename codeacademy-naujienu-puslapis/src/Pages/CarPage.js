import React, { useState } from 'react'
import CarForm from '../components/CarsPage/CarForm'
import CarList from '../components/CarsPage/CarList'

const CarPage = () => {
    const [cars, setCars] = useState([])

    const newCarHandler = newCarData => {
        setCars(prevState => [newCarData, ...prevState])
    }

    return (
        <div>
            <CarForm onNewCar={newCarHandler} />
            <CarList data={cars} />
        </div>
    )
}

export default CarPage