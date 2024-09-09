import Player from "./Player"
import TitleH2 from "./TitleH2"


function PlayerWrapper() {
    return(
        <div className="player-wrapper">
        <TitleH2
            title='Podcastai ir radijo laidos'
        />
        <Player 
            length='7:55'
            title='Pojūčius pirštų galiukams sugražinti gali smegenų implantas'
            date='2021-09-02'
        />
        <Player
            length='7:54'
            title='Elektrinių povandeninių dronų kompanija pasirengusi tapti vandenynų „SpaceX“'
            date='2021-08-25'
        />
        <Player
            length='9:22'
            title='Kaip gyvensime 2031-aisiais? 10 esminių prognozių'
            date='2021-08-18'
        />
        <Player
            length='9:22'
            title='Jei virtualus pasaulis taps realybe, jos neturėtų valdyti „Facebook“'
            date='2021-08-11'
        />
    </div>
    )

}
export default PlayerWrapper