function Video({title, className, src}) {

    if(!src){
        return ''
    }

    const titleElement = title && <h2>{title}</h2>

    return(
        <div className={className}>
            <iframe width="560" height="315" src={src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            {titleElement}
        </div>
    )
}
export default Video