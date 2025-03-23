
body {
    background: linear-gradient(50deg, #e0eafc, #cfdef3);
    padding: 3rem 10vw;
    font-family: Arial, sans-serif;
}

.preview__container {
    display: flex;
    justify-content: center;
    align-items: center;
}

.preview.mobile {
    cursor: pointer;
    width: 360px;
    height: 540px;
    max-height: 540px;
    background-color: white;
    border-radius: 6px;
    box-shadow: 0 4px 24px rgba(0,0,0,0.2);
    padding: 20px;
    overflow: hidden;
    position: relative;
    transition: transform 0.3s ease, max-height 0.3s ease;
    opacity: 0.9;
}

.preview.mobile.expanded {
    max-height: 80vh;
    overflow-y: auto;
    transform: scale(1.05);
    opacity: 1;
    z-index: 10;
}

.extra-content {
    display: none;
    margin-top: 15px;
}

.preview.mobile.expanded .extra-content {
    display: block;
}

/* Scrollbar styling */
.preview.mobile.expanded::-webkit-scrollbar {
    width: 8px;
}

.preview.mobile.expanded::-webkit-scrollbar-thumb {
    background-color: rgba(0,0,0,0.2);
    border-radius: 4px;
}

.preview.mobile.expanded::-webkit-scrollbar-track {
    background-color: rgba(0,0,0,0.05);
}