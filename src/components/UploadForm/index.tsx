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

const UploadForm = (props) => {
    const [isActive, setIsActive] = useState(false);
    const [errorMessage, setErrorMessage] = useState(true);
    const [imageDataArray, setImageDataArray] = useState([]);

    const inputEl = useRef(null);

    const fileHandler = (file, name, type) => {
        setErrorMessage(true);
        if (type.split('/')[0] !== 'image') {
            setErrorMessage(false);
            return;
        }
        let reader = new FileReader();
        reader.onloadend = () => {
            //image and file name
            setImageDataArray((prevState) => [
                ...prevState,
                { imageUrl: reader.result, imageAlt: name },
            ]);
        };
        reader.readAsDataURL(file);
    };

    const uploadButtonChangeHandler = () => {
        setImageDataArray([]);
        Array.from(inputEl.current.files).forEach((file) => {
            fileHandler(file, file.name, file.type);
        });
    };

    const onDragEnterHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsActive(true);
    };

    const onDragLeaveHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsActive(false);
    };

    const onDragOverHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsActive(true);
    };

    const onDropHandler = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setIsActive(false);
        let draggedData = e.dataTransfer;
        let files = draggedData.files;
        setImageDataArray([]);
        Array.from(files).forEach((file) => {
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
                {imageDataArray.map((el, idx) => (
                    <ImageContainer
                        key={idx + 1}
                        imageUrl={el.imageUrl}
                        imageAlt={el.imageAlt}
                    />
                ))}
            </ImageDisplay>
        </UploadFormWrapper>
    );
};

export default UploadForm;
