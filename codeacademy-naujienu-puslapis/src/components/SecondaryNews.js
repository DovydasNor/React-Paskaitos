function SecondaryNews({photo, category, title, date, url}){
    return(
        <a href={url} className="small-box-link">
            <div className="small-box">
                <div className="small">
                    <img src={photo} alt="Ovidijus foto"/>
                </div>
                <div className="small-content">
                    <span className="blue-text">{category}</span>
                    <h2>{title}</h2>
                    <span className="date">{date}</span>
                </div>
            </div>
        </a>
    )
}
export default SecondaryNews