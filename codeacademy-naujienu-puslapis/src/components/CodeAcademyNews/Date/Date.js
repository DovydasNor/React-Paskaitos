import './Date.css'

function Date({date}) {

    const dateElement = date && <span className="date">{date}</span>
    
    return(
       dateElement
    )
}

export default Date