import { ImageBoxWrapper } from './style';

type ImageBoxProps = {
    imageSrc?: string;
    imageAlt?: string;
    isRound?: boolean;
    text?: string;
};

function ImageBox({ imageSrc, imageAlt, isRound, text }: ImageBoxProps) {
    return (
        <ImageBoxWrapper isRound={isRound}>
            <img
                src={
                    imageSrc
                        ? `${process.env.PUBLIC_URL}/images/${imageSrc}`
                        : `${process.env.PUBLIC_URL}/images/optimize.jpeg`
                }
                alt={imageAlt ? imageAlt : '기본 사진'}
            />
            {text ? <div>{text}</div> : ''}
        </ImageBoxWrapper>
    );
}

export default ImageBox;
