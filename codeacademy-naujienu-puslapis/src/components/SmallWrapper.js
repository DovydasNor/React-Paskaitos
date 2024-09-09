import AllNewsButton from "./AllNewsButton"
import SecondaryNews from "./SecondaryNews"
import photo1 from '../images/Ovidijus.jpeg'
import photo2 from '../images/Milda.jpg'
import photo3 from '../images/Giedrius.jpg'
import photo4 from '../images/Marius.jpeg'

function SmallWrapper() {
    return(
        <div className="small-wrapper">
            <SecondaryNews
            photo={photo1}
            category='SĖKMĖS ISTORIJOS'
            title='Sėkmės istorija – įsidarbinimas į Bentley Systems'
            date='2024-04-25'
            url='/#'
            />
            <SecondaryNews
                photo={photo2}
                category='SĖKMĖS ISTORIJOS'
                title='Sėkmės istorija – įsidarbinimas į Fresh media'
                date='2024-04-25'
                url='/#'
            />
            <SecondaryNews
                photo={photo3}
                category='SĖKMĖS ISTORIJOS'
                title='Sėkmės istorija – įsidarbinimas į Visma Tech'
                date='2024-04-25'
                url='/#'
            />
            <SecondaryNews
                photo={photo4}
                category='NAUJIENOS'
                title='Už verslo partnerystes „CodeAcademy“ programavimo akademijoje bus atsakingas IT ekspertas Marius Pareščius'
                date='2024-04-16'
                url='/#'
            />
            <AllNewsButton
                url='/#'
                text='Visos naujienos'
            />
        </div>
    )
}
export default SmallWrapper