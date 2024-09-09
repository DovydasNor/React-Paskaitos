import AllNewsButton from "./AllNewsButton"
import Events from "./Events"
import headerImage from '../images/CA_event-1024x576.png'

function EventsWrapper() {
    return(
        <div className="renginai-wrapper">
            <Events
                eventHeader={headerImage} 
                day='18'
                month='BIR'
                address='Upės g. 21, Greenhall 1, 10 aukštas ir Online'
                title='Java: Kodėl ji vis dar svarbi IT rinkoje?'
            />
            <Events
                day='30'
                month='GEG'
                address='Upės g. 21, Greenhall 1, 10 aukštas ir Online'
                title='CodeAcademy galimybės verslui'
            />
            <Events
                day='24'
                month='GEG'
                address='Lietuvos parodų ir kongresų centras LITEXPO'
                title='COMIC CON BALTICS 2024'
            />
            <AllNewsButton
                text='Daugiau'
            />
        </div>
    )
}
export default EventsWrapper