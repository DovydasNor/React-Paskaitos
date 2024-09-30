import logo from '../../../images/arrow_forward_ios_24dp_FILL0_wght400_GRAD0_opsz24.svg'
import './AllnewsButton.css'

function AllNewsButton({url, text}) {

    if(!url || !text){
        return ''
    }

    return(
        <a href={url}className="visos-link">
        <div className="visos-naujienos">
            <p>{text}</p>
            <img src={logo} alt=""/>
        </div>
    </a>
    )
}
export default AllNewsButton