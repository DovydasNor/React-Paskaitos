function Video({title, className, src}) {
    return(
        <div className={className}>
            <iframe width="560" height="315" src={src} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        <h2>{title}</h2>
    </div>
    )
}
export default Video