import AllNewsButton from "./AllNewsButton";
import Video from "./Video";

function SmallVideoBox() {
    return(
        <div className="small-video-box">
            <Video
                className='small-video' 
                src='https://www.youtube.com/embed/yovsPjuDElw?si=uzIbDVyp--58_tM3'
                title='#4 Ctrl+Alt+Defend: Kibernetinis saugumas šiandien'
            />
            <Video
                className='small-video' 
                src='https://www.youtube.com/embed/7X4iX-D6ymQ?si=BbrGst9YICGmlAJH'
                title='Susipažink su mūsų įdarbinimo partneriais – Danske Bank!'
            />
            <AllNewsButton
                url='/#'
                text='Visi vaizdo įrašai'
            />
        </div>
    )
}
export default SmallVideoBox