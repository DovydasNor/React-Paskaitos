function MainNews({photo, title, date, category, url}) {
    return(
        <a href={url} className="big-link">
            <div className="big2-box">
                <div>
                    <div className="big2">
                        <img src={photo} alt="Serbintaite foto"/>
                    </div>
                </div>
                <div className="content">
                    <span className="blue-text">{category}</span>
                    <h2>{title}</h2>
                    <span className="date">{date}</span>
                </div> 
            </div>
        </a>
    )
}

export default MainNews