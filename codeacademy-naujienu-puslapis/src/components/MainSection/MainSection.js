import BigWrapper from "../BigWrapper/BigWrapper";
import SmallWrapper from "../SmallWrapper/SmallWrapper";
import TitleH1 from "../Titles/TitleH1";
import VideosWrapper from "../VideosWrapper/VideosWrapper";
import './MainSection.css'

function MainSection({newsData, videosData}) {

    const { news } = newsData
    const checkNews = news.length === 0
    const { src } = videosData
    const checkVideosSrc = src === 0

    return(
        <section className="main">
            {!checkNews && <TitleH1 title='Naujienos' />}
            {!checkNews && <BigWrapper data={newsData} />}
            {!checkNews && <SmallWrapper data={newsData} />}
            {!checkVideosSrc && <VideosWrapper data={videosData}/>}
        </section>
    )
}

export default MainSection