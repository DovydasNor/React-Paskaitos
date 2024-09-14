import EventsWrapper from '../EventsWrapper/EventsWrapper'
import PlayerWrapper from '../PlayerWrapper/PlayerWrapper'
import './Aside.css'

function Aside({podcastData, eventsData}) {
    return(
        <aside>
            <PlayerWrapper data={podcastData}/>
            <EventsWrapper data={eventsData} />
        </aside>
    )
}

export default Aside