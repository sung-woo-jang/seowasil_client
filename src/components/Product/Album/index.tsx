import { ImageItem, ImageSelect, ImageShowcase, ProductImages } from './style';

interface AlbumProps {
    hoverImage: string;
    productImageUrl: { storedFileName: string[] };
    setHoverImage: React.Dispatch<React.SetStateAction<string>>;
}

function Album({ hoverImage, productImageUrl, setHoverImage }: AlbumProps) {
    const handleClick = (index: number) => {
        const imageSlider = productImageUrl.storedFileName[index];
        setHoverImage(imageSlider);
    };

    return (
        <ProductImages>
            <ImageShowcase>
                <img src={`${process.env.REACT_APP_AWS_URL}${hoverImage}`} alt="{나무이름} 사진" />
            </ImageShowcase>

            <ImageSelect>
                {productImageUrl.storedFileName.map((url, index: number) => (
                    <ImageItem key={index}>
                        <img
                            key={index}
                            src={`${process.env.REACT_APP_AWS_URL}${url}`}
                            alt="{나무이름} 사진"
                            onMouseEnter={() => {
                                handleClick(index);
                            }}
                        />
                    </ImageItem>
                ))}
            </ImageSelect>
        </ProductImages>
    );
}

export default Album;
