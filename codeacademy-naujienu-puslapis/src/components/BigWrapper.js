import MainNews from "./MainNews"
import photo1 from '../images/Serbintaitė-big.jpg'
import photo2 from '../images/Pauliaus-big.png'

function BigWrapper() {
    return(
        <div className="big-wrapper">
            <MainNews
                url='/#'
                photo= {photo1}
                category='Karjera'
                title='Kaip junior’ui išnaudoti „LinkedIn“ savo naudai?'
                date='2024-05-28'
            />
            
            <MainNews
                url='/#' 
                photo={photo2}
                category='SĖKMĖS ISTORIJOS'
                title='Sėkmės istorija – įsidarbinimas į Asteri'
                date='2024-05-23'
            />
        </div>
    )
}
export default BigWrapper