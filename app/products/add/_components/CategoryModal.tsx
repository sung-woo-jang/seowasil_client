'use client';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { CategoryModalFormValues } from './types';
import { Colors } from '@/styles/global-variables';
import useCreatgeCategoryMutation from '@/api/categories/createCategory';
import TextInput from '@/components/TextInput';

export default function CategoryModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { handleSubmit, register } = useForm<CategoryModalFormValues>();

  const { mutate: addCategoryMutation } =
    useCreatgeCategoryMutation(handleClose);

  const addCategoryHandler: SubmitHandler<CategoryModalFormValues> = ({
    name,
    department,
    scientific,
  }) => {
    addCategoryMutation({ name, department, scientific });
  };

  return (
    <div>
      <Button
        variant="contained"
        style={{ background: Colors.EerieBlack }}
        onClick={handleOpen}
      >
        카테고리 추가
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: 'absolute' as const,
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }}
          component="form"
          onSubmit={handleSubmit(addCategoryHandler)}
        >
          <Stack alignItems="center" justifyContent="center" gap={3} p={4}>
            <Typography variant="h4" component="h4">
              카테고리 추가
            </Typography>
          </Stack>
          <Stack alignItems="center" justifyContent="center" gap={3} p={4}>
            <Stack spacing={1} sx={{ width: '300px' }}>
              <TextInput
                label="이름 - 필수입력O"
                id="name"
                placeholder="카테고리명"
                type="text"
                register={register('name')}
              />
            </Stack>
            <Stack spacing={1} sx={{ width: '300px' }}>
              <TextInput
                label="과명 (ex:측백나무과) - 필수입력X"
                id="department"
                placeholder="과명"
                type="text"
                register={register('department')}
              />
            </Stack>
            <Stack spacing={1} sx={{ width: '300px' }}>
              <TextInput
                label="학명(ex:Thuja occidentalis) - 필수입력X"
                id="scientific"
                placeholder="학명"
                type="text"
                register={register('scientific')}
              />
            </Stack>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            gap={2}
            p={4}
          >
            <Button
              variant="contained"
              onClick={handleClose}
              sx={{
                background: Colors.Gray1,
                border: `1px solid ${Colors.EerieBlack}`,
                color: 'white',
              }}
            >
              취소
            </Button>
            <Button
              type="submit"
              variant="contained"
              sx={{
                background: Colors.Gray1,
                border: `1px solid ${Colors.EerieBlack}`,
                color: 'white',
              }}
            >
              추가하기
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
