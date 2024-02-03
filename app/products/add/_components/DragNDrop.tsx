'use client';
import { ChangeEvent, DragEvent, useRef, useState } from 'react';
import classes from './style.module.scss';
import { UseFormGetValues, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { PostFormValues } from './PostContainer';
import Image from 'next/image';
import isNull from 'lodash/isNull';

interface DragNDropProps {
  areaTitlt: string;
  setValue: UseFormSetValue<PostFormValues>;
  getValues: UseFormGetValues<PostFormValues>;

  setValueName: 'productImages' | 'detailImages';
  register: UseFormRegister<PostFormValues>;
}

export default function DragNDrop({
  areaTitlt,
  register,
  setValueName,
  setValue,
  getValues,
}: DragNDropProps) {
  const [images, setImages] = useState<Array<{ name: string; url: string }>>([]);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const setValueHandler = (newFiles: File[]) => {
    const prevImages = getValues(setValueName);
    if (!!prevImages) {
      setValue(setValueName, [...prevImages, ...newFiles]); // 필드 값 설정
    } else {
      setValue(setValueName, newFiles); // 필드 값 설정
    }
  };

  const onFileSelect = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    const files = event.target.files;
    if (!files) return;
    const currentImages = images.slice();
    const newFiles = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.type.split('/')[0] !== 'image') continue;
      if (!currentImages.some((e) => e.name === file.name)) {
        currentImages.push({
          name: file.name,
          url: URL.createObjectURL(file),
        });
        newFiles.push(file);
      }
    }
    setValueHandler(newFiles);
    setImages(currentImages);
  };

  const onDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);

    const files = event.dataTransfer.files;
    const currentImages = images.slice();
    const newFiles = [];

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file.type.split('/')[0] !== 'image') continue;
      if (!currentImages.some((e) => e.name === file.name)) {
        currentImages.push({
          name: file.name,
          url: URL.createObjectURL(file),
        });
        newFiles.push(file);
      }
    }

    setValueHandler(newFiles);

    setImages(currentImages);
  };

  const deleteImage = (index: number) => {
    const currentImages = images.slice();
    currentImages.splice(index, 1);

    const prevImages = getValues(setValueName);
    if (!!prevImages) {
      const newImages = prevImages.slice();
      newImages.splice(index, 1);
      setValue(setValueName, newImages); // 필드 값 설정
    }

    setImages(currentImages);
    // setValue(setValueName, newFiles); // 필드 값 설정
    // 'file' 필드에 파일 목록(FileList)을 설정
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

  const selectFiles = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className={classes.Card}>
      <div className={classes.Top}>
        <p>{areaTitlt}</p>
      </div>
      <div
        className={classes.DragArea}
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
      >
        {isDragging ? (
          <span className={classes.Select}>여기에 이미지 드롭</span>
        ) : (
          <>
            이미지를 여기로 끌어다 놓거나
            <span className={classes.Select} role="button" onClick={selectFiles}>
              찾아보기
            </span>
          </>
        )}
        <input
          className={classes.Input}
          {...register(setValueName)}
          type="file"
          multiple
          ref={fileInputRef}
          onChange={onFileSelect}
        />
      </div>
      <div className={classes.Container}>
        {images.map((image, index) => (
          <div className={classes.ImageContainer} key={image.name}>
            <span className={classes.DeleteButton} onClick={() => deleteImage(index)}>
              &times;
            </span>
            <Image
              className={classes.StyledImage}
              src={image.url}
              alt={image.name}
              width={75}
              height={75}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
