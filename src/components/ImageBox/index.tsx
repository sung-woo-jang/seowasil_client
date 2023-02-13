import { ImageBoxWrapper } from './style';

type ImageBoxProps = {
    imageSrc?: string;
    imageAlt?: string;
    // isRound?: boolean;
    text?: string;
};

function ImageBox({ imageSrc, imageAlt, text }: ImageBoxProps) {
    return (
        <ImageBoxWrapper>
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
