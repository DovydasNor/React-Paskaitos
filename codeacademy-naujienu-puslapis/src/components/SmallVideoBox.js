import AllNewsButton from "./AllNewsButton";
import Video from "./Video";

function SmallVideoBox({data}) {

    if(data.length === 0){
        return
    }

    const secondaryVideoData = data.slice(1)

    const secondaryVideoList = secondaryVideoData.map((item, index) => (
        <Video 
            key={index} 
            className={item.className}
            src={item.src}
            title={item.title}           
        />
    ))

    return(
        <div className="small-video-box">
            {secondaryVideoList}
            <AllNewsButton
                url='/#'
                text='Visi vaizdo įrašai'
            />
        </div>
    )
}
export default SmallVideoBox