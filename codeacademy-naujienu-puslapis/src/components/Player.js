import image from '../images/technologiju ritmu.png'
import play from '../images/play_arrow_24dp_FILL0_wght400_GRAD0_opsz24.svg'

function Player({length, title, date}) {
    return(
        <div className="player">
        <div className="virsus">
            <img src={image} alt=""/>
            <div><p>Trukmė: {length}</p></div>
            <div className="play">
                <button>
                    <img src={play} alt="play button"/>
                </button>
            </div>
        </div>
        <div className="apacia">
            <h3>{title}</h3>

            <span className="date">{date}</span>
        </div>
    </div>
    )
}
export default Player