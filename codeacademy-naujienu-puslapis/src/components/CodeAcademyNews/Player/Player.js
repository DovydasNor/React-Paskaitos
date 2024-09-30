import image from '../../../images/technologiju ritmu.png'
import play from '../../../images/play_arrow_24dp_FILL0_wght400_GRAD0_opsz24.svg'
import Date from '../Date/Date'
import './Player.css'

function Player({length, title, date}) {

    if(!title){
        return ''
    }

    const imageElement = image && <img src={image} alt=""/>
    const lengthElement = length && <div><p>Trukmė: {length}</p></div>
    
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
            <Date date={date} />
        </div>
    </div>
    )
}
export default Player