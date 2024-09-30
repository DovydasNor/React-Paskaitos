import React from 'react'

const CarItem = ({ data }) => {
  const { discount, basePrice, brand, color, engine, id, image, mileage, model, specialColor } = data

  let enginePrice = 0

  switch (engine) {
    case 'electric':
      enginePrice = 10000
      break

    case 'hybrid':
      enginePrice = 7500
      break

    case 'diesel':
      enginePrice = 5000
      break

    default:
      break
  }

  let colorPrice = 0

  if (color === 'special-blue') {
    colorPrice = 500
  } else if (color === 'other') {
    colorPrice = 30000
  }

  const extrasPrice = enginePrice + colorPrice

  const getMileageDiscountPercentage = () => {
    if (mileage > 400000) {
      return 50
    }

    if (mileage > 100000) {
      return 30
    }

    if (mileage > 50000) {
      return 20
    }

    if (mileage > 20000) {
      return 15
    }

    if (mileage > 0) {
      return 10
    }

    return 0
  }

  const mileageDiscountPercentage = getMileageDiscountPercentage()
  const mileageDiscount = basePrice / 100 * mileageDiscountPercentage

  const totalPriceBeforeDiscounts = basePrice + extrasPrice
  const totalPriceBeforeWithMileageDiscount = totalPriceBeforeDiscounts - mileageDiscount

  const discountAmount = totalPriceBeforeWithMileageDiscount / 100 * discount

  const totalDiscount = mileageDiscount + discountAmount

  const finalPriceBeforeVAT = basePrice + extrasPrice - totalDiscount
  const finalPriceVAT = finalPriceBeforeVAT * 0.21
  const finalPriceWithVAT = finalPriceBeforeVAT + finalPriceVAT

  return (
    <div className='car-item'>
      <div className='car-info'>
        <h3>{brand} ({model})</h3>
        <p>Color: {color}</p>
        <p>Mileage: {mileage}</p>
        <p>Engine: {engine}</p>
        {image && <img src={image} alt={`${brand} - ${model}`} />}
      </div>

      <div className='car-price-wrapper'>
        <h4>Price:</h4>

        <ul>
          <li>Base price: {basePrice}€</li>

          <li>
            Extras:
            <ul>
              <li>Engine type: {enginePrice}€ ({engine})</li>
              <li>Color: {colorPrice}€ ({color === 'other' ? specialColor : color})</li>
              <li>EXTRAS TOTAL: {extrasPrice}€</li>
            </ul>  
          </li>

          <li>
            Discounts:

            <ul>
              <li>Mileage: {mileageDiscount}€ - {mileageDiscountPercentage}% ({mileage} km)</li>
              <li>Discount: {discountAmount}€ - {discount}%</li>
              <li>TOTAL DISCOUNT: {totalDiscount}€</li>
            </ul>
          </li>
          <li>Final Price: {finalPriceBeforeVAT}€</li>
          <li>VAT: {finalPriceVAT}€</li>
          <li>Final Price with VAT: {finalPriceWithVAT}€</li>
        </ul>
      </div>
    </div>
  )
}

export default CarItem