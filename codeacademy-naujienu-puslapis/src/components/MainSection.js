import BigWrapper from "./BigWrapper";
import SmallWrapper from "./SmallWrapper";
import TitleH1 from "./TitleH1";
import VideosWrapper from "./VideosWrapper";

function MainSection() {
    return(
        <section className="main">
            <TitleH1
                title='Naujienos'
            />
            <BigWrapper />
            <SmallWrapper />
            <VideosWrapper />
        </section>
    )
}

export default MainSection