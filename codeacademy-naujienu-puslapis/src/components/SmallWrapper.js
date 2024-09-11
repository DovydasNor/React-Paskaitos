import AllNewsButton from "./AllNewsButton"
import SecondaryNews from "./SecondaryNews"


function SmallWrapper({data}) {
    const { news } = data
    const SecondaryNewsData = news.slice(2)

    const SecondaryNewsList = SecondaryNewsData.map((item, index) => (
        <SecondaryNews
            key={index}
            photo={item.photo}
            category={item.category}
            title={item.title}
            date={item.date}
            url={item.url}
        />
    ))

    return(
        <div className="small-wrapper">
            {SecondaryNewsList}

            <AllNewsButton
                url='/#'
                text='Visos naujienos'
            />
        </div>
    )
}
export default SmallWrapper