import MainNews from "../MainNews/MainNews"
import './BigWrapper.css'

function BigWrapper({data}) {
    const { news } = data
    
    const mainNewsData = news.slice(0, 2)

    const newsList = mainNewsData.map((item, index) =>(
        <MainNews
            key={index}
            url={item.url}
            photo={item.photo}
            category={item.category}
            title={item.title}
            date={item.date}
        />
    ))

    return(
        <div className="big-wrapper">
            {newsList}
        </div>
    )
}
export default BigWrapper