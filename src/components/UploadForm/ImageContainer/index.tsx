import { ImageContainerWrapper } from './style';

interface ImageContainerProps {
    imageUrl: string;
    imageAlt: string;
}

function ImageContainer({ imageUrl, imageAlt }: ImageContainerProps) {
    return (
        <ImageContainerWrapper>
            <img src={imageUrl} alt={imageAlt} />
            <figcaption>{imageAlt}</figcaption>
        </ImageContainerWrapper>
    );
}

export default ImageContainer;
