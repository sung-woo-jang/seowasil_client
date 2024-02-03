'use client';
import DragNDrop from './DragNDrop';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextInput from '@/components/TextInput';
import { Colors } from '@/styles/global-variables';
import { SubmitHandler, useForm } from 'react-hook-form';
import Grid from '@mui/material/Grid';
import SelectBox from '@/components/SelectBox';
import { useQueryClient } from '@tanstack/react-query';
import { generateQueryKeysFromUrl } from '@/utils/generateQueryKeysFromUrl';
import { API_URL } from '@/constants/API_URL';
import { ICategory } from '@/api/categories/getCategories';
import useCreateProductMutation from '@/api/products/client/useCreateProductMutation';
import isNaN from 'lodash/isNaN';
import toNumber from 'lodash/toNumber';
import Alert from '@mui/material/Alert';
import Snackbar, { SnackbarOrigin } from '@mui/material/Snackbar';
import { useState } from 'react';

export interface PostFormValues {
  title: string;
  description: string;
  sellPrice: number;
  minAmount: number;
  productImages: File[] | null;
  detailImages: File[] | null;
  categoryId: number;
}

interface State extends SnackbarOrigin {
  open: boolean;
}

export default function PostContainer() {
  const queryClient = useQueryClient();
  const categories = queryClient
    .getQueryData<ICategory[]>(generateQueryKeysFromUrl(API_URL.CATEGORIES.GET_LIST))
    ?.map(({ id, name }) => ({ id, value: name }));

  const { handleSubmit, register, setValue, getValues } = useForm<PostFormValues>();

  const { mutate } = useCreateProductMutation();

  const [errorMessage, setErrorMessage] = useState('');
  const showErrorAndReturn = (errorMessage: string) => {
    setErrorMessage(errorMessage);
    setSnackbarOption((prev) => ({ ...prev, open: true }));
  };

  const onSubmitHandler: SubmitHandler<PostFormValues> = ({
    description,
    detailImages,
    minAmount,
    productImages,
    sellPrice,
    title,
    categoryId,
  }) => {
    console.log(productImages);
    if (title.length === 0) {
      return showErrorAndReturn('상품명 입력 해야됨');
    }
    if (isNaN(toNumber(categoryId))) {
      return showErrorAndReturn('카테고리 지정 해야됨');
    }
    if (description.length === 0) {
      return showErrorAndReturn('설명 추가 해야됨');
    }
    if (toNumber(sellPrice) === 0) {
      return showErrorAndReturn('가격 입력 해야됨');
    }
    if (toNumber(minAmount) === 0) {
      return showErrorAndReturn('최수 주문 수량 정해야됨');
    }
    if (productImages === undefined || productImages === null) {
      return showErrorAndReturn('사진 추가 해야됨');
    }
    if (detailImages === undefined || detailImages === null) {
      return showErrorAndReturn('사진 추가 해야됨');
    }

    mutate({
      categoryId: toNumber(categoryId),
      description,
      detailImages,
      minAmount,
      productImages,
      sellPrice,
      title,
    });
  };

  const [snackbarOption, setSnackbarOption] = useState<State>({
    open: false,
    vertical: 'top',
    horizontal: 'center',
  });
  const { vertical, horizontal, open } = snackbarOption;

  const handleClose = () => {
    setSnackbarOption((prev) => ({ ...prev, open: false }));
  };

  return (
    <Box
      sx={{
        marginTop: 8,
      }}
      component="form"
      onSubmit={handleSubmit(onSubmitHandler)}
    >
      <Grid container spacing={6}>
        <Grid item xs={12}>
          <TextInput
            //
            label="상품명"
            id="title"
            placeholder="상품명 입력란"
            type="text"
            register={register('title')}
          />
        </Grid>
        <div style={{ marginTop: '2rem' }} />

        <Grid item xs={12}>
          <SelectBox
            label="카테고리"
            id="title"
            placeholder="카테고리 선택"
            register={register('categoryId')}
            options={categories}
          />
        </Grid>
        <div style={{ marginTop: '2rem' }} />

        {/* textarea로 바꾸기 */}
        <Grid item xs={12}>
          <TextInput
            label="설명란"
            id="description"
            placeholder="상품 설명 입력란"
            type="text"
            register={register('description')}
          />
        </Grid>
        <div style={{ marginTop: '2rem' }} />
        <Grid item xs={6}>
          <TextInput
            //
            label="가격"
            id="sellPrice"
            placeholder="가격"
            type="number"
            register={register('sellPrice')}
          />
        </Grid>
        <div style={{ marginTop: '2rem' }} />

        <Grid item xs={6}>
          <TextInput
            label="최소 주문 수량"
            id="minAmount"
            placeholder="최소 주문 수량"
            type="number"
            register={register('minAmount')}
          />
        </Grid>
        <div style={{ marginTop: '2rem' }} />

        <Grid item xs={6}>
          <DragNDrop
            areaTitlt={'상품 사진'}
            getValues={getValues}
            setValue={setValue}
            setValueName="productImages"
            register={register}
          />
        </Grid>
        <div style={{ marginTop: '2rem' }} />

        <Grid item xs={6}>
          <DragNDrop
            areaTitlt={'상세 사진'}
            getValues={getValues}
            setValue={setValue}
            setValueName="detailImages"
            register={register}
          />
        </Grid>
      </Grid>
      <div style={{ marginTop: '2rem' }} />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{
          mt: 3,
          mb: 2,
          background: Colors.Gray1,
          border: `1px solid ${Colors.EerieBlack}`,
          color: 'white',
        }}
      >
        상품 등록
      </Button>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        key={vertical + horizontal}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
          {errorMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
}
