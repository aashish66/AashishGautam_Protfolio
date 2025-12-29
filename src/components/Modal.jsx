import { useState } from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, media, title, description }) => {
    if (!isOpen) return null;

    const isVideo = media?.endsWith('.mp4') || media?.endsWith('.MP4') || media?.endsWith('.webm');
    const isGif = media?.endsWith('.gif');

    return (
        <div className="modal active" onClick={onClose}>
            <button className="modal-close" onClick={onClose}>×</button>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {isVideo ? (
                    <video className="modal-media" src={media} controls autoPlay />
                ) : (
                    <img className="modal-media" src={media} alt={title} />
                )}
                <div className="modal-body">
                    <h3>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Modal;
