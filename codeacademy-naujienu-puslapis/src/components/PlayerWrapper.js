import Player from "./Player"
import TitleH2 from "./TitleH2"


function PlayerWrapper({data}) {
    const { podcastSectionTitle, podcastsData } = data

    if(podcastsData.length === 0){
        return <TitleH2 title='Podcastai ir radijo laidos - COMING SOON'/>
    }

    const podcastDataList = podcastsData.map((item, index) => (
        <Player
            key={index} 
            length={item.length}
            title={item.title}
            date={item.date}
        />
    ))

    return(
        <div className="player-wrapper">
        {podcastSectionTitle && <TitleH2 title='Podcastai ir radijo laidos'/>}
        {podcastDataList}
    </div>
    )

}
export default PlayerWrapper