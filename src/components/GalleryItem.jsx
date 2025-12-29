import './GalleryItem.css';

const GalleryItem = ({ src, title, description, isVideo, onClick }) => {
    return (
        <div className={`gallery-item ${isVideo ? 'video' : ''}`} onClick={onClick}>
            {isVideo ? (
                <video src={src} muted />
            ) : (
                <img src={src} alt={title} />
            )}
            <div className="gallery-overlay">
                <h4>{title}</h4>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default GalleryItem;
