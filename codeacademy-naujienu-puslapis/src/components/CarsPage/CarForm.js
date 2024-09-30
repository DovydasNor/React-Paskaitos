import React, { useState } from 'react'

const CarForm = ({ onNewCar }) => {
    const [brand, setBrand] = useState('')
    const [model, setModel] = useState('')
    const [image, setImage] = useState('')
    const [basePrice, setBasePrice] = useState('')
    const [mileage, setMileage] = useState('')
    const [engine, setEngine] = useState('petrol')
    const [baseColor, setBaseColor] = useState('black')
    const [color, setColor] = useState('')
    const [discount, setDiscount] = useState('')

    const brandHandler = event => setBrand(event.target.value)
    const modelHandler = event => setModel(event.target.value)
    const imageHandler = event => setImage(event.target.value)
    const basePriceHandler = event => setBasePrice(event.target.value)
    const mileageHandler = event => setMileage(event.target.value)
    const engineHandler = event => setEngine(event.target.value)
    
    const baseColorHandler = event => {
        const selectedColor = event.target.value

        if (selectedColor !== 'other') {
            setColor('')
        }

        setBaseColor(selectedColor)
    }

    const colorHandler = event => setColor(event.target.value)
    const discountHandler = event => setDiscount(event.target.value)
    
    const submitHandler = event => {
        event.preventDefault()

        const specialColor = baseColor === 'other' ? color : null

        const newCar = {
            id: Math.random(),
            brand,
            model,
            image,
            basePrice: Number(basePrice),
            mileage: Number(mileage),
            engine,
            color: baseColor,
            specialColor,
            discount: Number(discount)
        }

        onNewCar(newCar)

        setBrand('')
        setModel('')
        setImage('')
        setBasePrice('')
        setMileage('')
        setEngine('petrol')
        setBaseColor('black')
        setColor('')
        setDiscount('')
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div className='form-control'>
                    <label htmlFor='brand'>Brand</label>
                    <input type='text' name='brand' id='brand' value={brand} onChange={brandHandler} />
                </div>

                <div className='form-control'>
                    <label htmlFor='model'>Model</label>
                    <input type='text' name='model' id='model' value={model} onChange={modelHandler} />
                </div>

                <div className='form-control'>
                    <label htmlFor='image'>Image</label>
                    <input type='text' name='image' id='image' value={image} onChange={imageHandler} />
                </div>

                <div className='form-control'>
                    <label htmlFor='base-price'>Base Price</label>
                    <input type='number' name='base-price' id='base-price' min={0} step={10} value={basePrice} onChange={basePriceHandler} />
                </div>

                <div className='form-control'>
                    <label htmlFor='mileage'>Mileage</label>
                    <input type='number' name='mileage' id='mileage' min={0} value={mileage} onChange={mileageHandler} />
                </div>

                <div className='form-control'>
                    <label htmlFor='engine'>Engine:</label>
                    <select id='engine' name='engine' value={engine} onChange={engineHandler}>
                        <option value='petrol'>Petrol</option>
                        <option value='electric'>Electric</option>
                        <option value='diesel'>Diesel</option>
                        <option value='hybrid'>Hybrid</option>
                    </select>
                </div>

                <div className='form-control'>
                    <label htmlFor='base-color'>Base color:</label>
                    <select id='base-color' name='base-color' value={baseColor} onChange={baseColorHandler}>
                        <option value='black'>Black</option>
                        <option value='red'>Red</option>
                        <option value='blue'>Blue</option>
                        <option value='silver'>Silver</option>
                        <option value='white'>White</option>
                        <option value='special-blue'>Special Blue</option>
                        <option value='other'>Other</option>
                    </select>
                </div>

                {baseColor === 'other' && (
                    <div className='form-control'>
                        <label htmlFor='color'>Color</label>
                        <input type='text' name='color' id='color' value={color} onChange={colorHandler} />
                    </div>
                )}

                <div className='form-control'>
                    <label htmlFor='discount'>Discount</label>
                    <input type='number' name='discount' id='discount' min={0} max={100} value={discount} onChange={discountHandler} />
                </div>

                <button type='submit'>Create New Car</button>
            </form>
        </div>
    )
}

export default CarForm