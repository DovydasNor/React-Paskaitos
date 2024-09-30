import Category from '../Category/Category'
import Date from '../Date/Date'
import './SecondaryNews.css'

function SecondaryNews({photo, category, title, date, url}){

    if(!url || !title){
        return ''
    }

    const photoElement = photo && (
        <div className="small">
            <img src={photo} alt="Ovidijus foto"/>
        </div>
    )
    
    return(
        <a href={url} className="small-box-link">
            <div className="small-box">
                {photoElement}
                <div className="small-content">
                    <Category category={category}/>
                    <h2>{title}</h2>
                    <Date date={date} />
                </div>
            </div>
        </a>
    )
}
export default SecondaryNews