import { UploadFile } from '@mui/icons-material';
import { useRef, useState } from 'react';
import ImageContainer from './ImageContainer';
import {
    Error,
    ImageDisplay,
    UploadButton,
    UploadFormWrapper,
    UploadLabel,
} from './style';

const UploadForm = () => {
    const [isActive, setIsActive] = useState(false);
    const [errorMessage, setErrorMessage] = useState(true);
    const [imageDataArray, setImageDataArray] = useState<any>([]);

    const inputEl = useRef<any>(null);

    const fileHandler = (file: any, name: any, type: string) => {
        setErrorMessage(true);
        if (type.split('/')[0] !== 'image') {
            setErrorMessage(false);
            return;
        }
        let reader = new FileReader();
        reader.onloadend = () => {
            //image and file name
            setImageDataArray((prevState: any) => [
                ...prevState,
                { imageUrl: reader.result, imageAlt: name },
            ]);
        };
        reader.readAsDataURL(file);
    };

    const uploadButtonChangeHandler = () => {
        setImageDataArray([]);
        Array.from(inputEl.current.files).forEach((file: any) => {
            fileHandler(file, file.name, file.type);
        });
    };

    const onDragEnterHandler = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        setIsActive(true);
    };

    const onDragLeaveHandler = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        setIsActive(false);
    };

    const onDragOverHandler = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        setIsActive(true);
    };

    const onDropHandler = (e: any) => {
        e.preventDefault();
        e.stopPropagation();
        setIsActive(false);
        let draggedData = e.dataTransfer;
        let files = draggedData.files;
        setImageDataArray([]);
        Array.from(files).forEach((file: any) => {
            fileHandler(file, file.name, file.type);
        });
    };

    return (
        <UploadFormWrapper
            onDragEnter={onDragEnterHandler}
            onDragLeave={onDragLeaveHandler}
            onDragOver={onDragOverHandler}
            onDrop={onDropHandler}
            isActive={isActive}
        >
            <UploadButton
                type="file"
                id="upload-button"
                multiple
                accept="image/*"
                ref={inputEl}
                onChange={uploadButtonChangeHandler}
            />
            <UploadLabel htmlFor="upload-button">
                <UploadFile />
                사진을 선택하거나 드래그 해주세요.
            </UploadLabel>
            {errorMessage ? <Error /> : <Error>사진 파일만 업로드 해주세요.</Error>}
            <ImageDisplay>
                {imageDataArray.map(
                    (
                        { imageUrl, imageAlt }: { imageUrl: string; imageAlt: string },
                        idx: number
                    ) => (
                        <ImageContainer
                            key={idx + 1}
                            imageUrl={imageUrl}
                            imageAlt={imageAlt}
                        />
                    )
                )}
            </ImageDisplay>
        </UploadFormWrapper>
    );
};

export default UploadForm;
