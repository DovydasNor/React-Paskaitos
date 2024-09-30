import Category from '../Category/Category'
import Date from '../Date/Date'
import './MainNews.css'

function MainNews({photo, title, date, category, url}) {

    if(!title || !url){
        return ''
    }

    const photoElement = photo && (
        <div>
            <div className="big2">
                <img src={photo} alt="Serbintaite foto"/>
            </div>
        </div>
    )

    return(
        <a href={url} className="big-link">
            <div className="big2-box">
                {photoElement}
                <div className="content">
                    <Category category={category} />
                    <h2>{title}</h2>
                    <Date date={date} />
                </div> 
            </div>
        </a>
    )
}

export default MainNews