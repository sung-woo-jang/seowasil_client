'use client';
import { ChangeEvent, DragEvent, useRef, useState } from 'react';
import {
  Card,
  Top,
  Button,
  DragArea,
  Select,
  Container,
  ImageContainer,
  StyledImage,
  DeleteButton,
  Input,
} from './style';

export default function DragNDrop() {
  const [images, setImages] = useState<Array<{ name: string; url: string }>>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const selectFiles = () => {
    fileInputRef.current?.click();
  };
  const onFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    // 백엔드 요청 용
    const files = event.target.files;
    if (!files) return;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.type.split('/')[0] !== 'image') continue;
      if (!images.some((e) => e.name === file.name)) {
        setImages((prevImages) => [
          ...prevImages,
          {
            name: file.name,
            url: URL.createObjectURL(file),
          },
        ]);
      }
    }
  };

  const deleteImage = (index: number) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };
  const onDragOver = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(true);
    event.dataTransfer.dropEffect = 'copy';
  };
  const onDragLeave = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
  };
  const onDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    // 백엔드 요청 용
    const files = event.dataTransfer.files;
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.type.split('/')[0] !== 'image') continue;
      if (!images.some((e) => e.name === file.name)) {
        setImages((prevImages) => [
          ...prevImages,
          {
            name: file.name,
            url: URL.createObjectURL(file),
          },
        ]);
      }
    }
  };

  const uploadImage = () => {
    console.log(images);
  };
  return (
    <Card>
      <Top>
        <p>Drag & Drop 상품 사진</p>
      </Top>
      <DragArea onDragOver={onDragOver} onDragLeave={onDragLeave} onDrop={onDrop}>
        {isDragging ? (
          <Select>여기에 이미지 드롭</Select>
        ) : (
          <>
            이미지를 여기로 끌어다 놓거나
            <Select role="button" onClick={selectFiles}>
              찾아보기
            </Select>
          </>
        )}

        <Input
          name="file"
          type="file"
          multiple
          ref={fileInputRef}
          onChange={onFileSelect}
        />
      </DragArea>
      <Container>
        {images.map((image, index) => (
          <ImageContainer key={image.name}>
            <DeleteButton onClick={() => deleteImage(index)}>&times;</DeleteButton>
            <StyledImage src={image.url} alt={image.name} width={75} height={75} />
          </ImageContainer>
        ))}

        <Button onClick={uploadImage}>Upload</Button>
      </Container>
    </Card>
  );
}
