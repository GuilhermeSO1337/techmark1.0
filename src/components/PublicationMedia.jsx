export default function PublicationMedia(PublicationData){
    let MediaElement;
    switch (PublicationData.MediaType) {
        case '.jpg':
            MediaElement = <img src={PublicationData.MediaDir} alt=''/>
            break;
        case '.mp4':
            MediaElement = <video>
                <source src={PublicationData.MediaDir} type="video/mp4" />
            </video>
            break;
    
        default:
            MediaElement = null;
            break;
    }
    return MediaElement;
}