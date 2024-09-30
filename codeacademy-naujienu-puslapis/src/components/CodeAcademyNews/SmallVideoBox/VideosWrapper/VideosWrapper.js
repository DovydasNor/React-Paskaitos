import Video from "../../Videos/Video"
import SmallVideoBox from "../SmallVideoBox"
import './VideosWrapper.css'

function VideosWrapper({data}) {

    const mainVideoData = data.slice(0, 1)

    const BigVideoList = mainVideoData.map((item, index) =>(
        <Video
            key={index} 
            className={item.className}
            src={item.src}
            title={item.title}      
        />
    ))

    return(
        <div className="irasai-wrapper">
            {BigVideoList}
            <SmallVideoBox data={data} />
        </div>
    )
}
export default VideosWrapper