import Video from "./Video"
import SmallVideoBox from "./SmallVideoBox"

function VideosWrapper() {
    return(
        <div className="irasai-wrapper">
            <Video
                className='big-video'
                src='https://www.youtube.com/embed/Rz6bswWbPqw?si=hQr1EQgQmh4u6i-P'
                title='#6 Studentės istorija: sėkmė slypi disciplinoje'
            />
            <SmallVideoBox />
        </div>
    )
}
export default VideosWrapper