import { ImageContainerWrapper } from './style';

const ImageContainer = ({ imageUrl, imageAlt }) => {
    return (
        <ImageContainerWrapper>
            <img src={imageUrl} alt={imageAlt} />
            <figcaption>{imageAlt}</figcaption>
        </ImageContainerWrapper>
    );
};

export default ImageContainer;
