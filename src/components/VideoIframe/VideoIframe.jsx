export function VideoIframe(getId) {
    const videoId = (getId)
    return (
        <iframe className="single-video-iframe" src={`https://www.youtube.com/embed/${videoId}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    )
}