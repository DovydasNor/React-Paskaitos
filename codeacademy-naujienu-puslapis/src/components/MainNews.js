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
    const categoryElement = category && <span className="blue-text">{category}</span>
    const dateElement = date && <span className="date">{date}</span>

    return(
        <a href={url} className="big-link">
            <div className="big2-box">
                {photoElement}
                <div className="content">
                    {categoryElement}
                    <h2>{title}</h2>
                    {dateElement}
                </div> 
            </div>
        </a>
    )
}

export default MainNews