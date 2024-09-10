import image from '../images/technologiju ritmu.png'
import play from '../images/play_arrow_24dp_FILL0_wght400_GRAD0_opsz24.svg'



function Player({length, title, date}) {

    if(!title){
        return ''
    }

    const imageElement = image && <img src={image} alt=""/>
    const lengthElement = length && <div><p>Trukmė: {length}</p></div>
    const dateElement = date && <span className="date">{date}</span>

    return(
        <div className="player">
        <div className="virsus">
            {imageElement}
            {lengthElement}
            <div className="play">
                <button>
                    <img src={play} alt="play button"/>
                </button>
            </div>
        </div>
        <div className="apacia">
            <h3>{title}</h3>
            {dateElement}
        </div>
    </div>
    )
}
export default Player