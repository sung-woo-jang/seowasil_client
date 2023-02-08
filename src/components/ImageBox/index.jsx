import { ImageBoxWrapper } from './style';

const ImageBox = (props) => {
    const { imageSrc, imageAlt, isRound, text } = props;
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
};

export default ImageBox;
