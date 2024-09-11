import EventsWrapper from './EventsWrapper'
import PlayerWrapper from './PlayerWrapper'

function Aside({podcastData, eventsData}) {
    return(
        <aside>
            <PlayerWrapper data={podcastData}/>
            <EventsWrapper data={eventsData} />
        </aside>
    )
}

export default Aside