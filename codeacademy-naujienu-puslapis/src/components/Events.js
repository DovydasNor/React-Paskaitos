function Events({eventHeader, day, month, address, title}) {
    return(

        <div className="renginiai">

        {eventHeader ? (
          <div className="renginiai-img">
            <img src={eventHeader} alt="" />
          </div>
        ) : null}
  
        <div className="date-icon">
          <div className="day">
            <h4>{day}</h4>
          </div>
          <div className="month">
            <span>{month}</span>
          </div>
        </div>
  
        <div className="renginiai-content">
          <span>{address}</span>
          <h3>{title}</h3>
        </div>
      </div>

    )
}
export default Events