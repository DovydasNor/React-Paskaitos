function SecondaryNews({photo, category, title, date, url}){

    if(!url || !title){
        return ''
    }

    const photoElement = photo && (
        <div className="small">
            <img src={photo} alt="Ovidijus foto"/>
        </div>
    )
    const categoryElement = category && <span className="blue-text">{category}</span>
    const dateElement = date && <span className="date">{date}</span>

    return(
        <a href={url} className="small-box-link">
            <div className="small-box">
                {photoElement}
                <div className="small-content">
                    {categoryElement}
                    <h2>{title}</h2>
                    {dateElement}
                </div>
            </div>
        </a>
    )
}
export default SecondaryNews