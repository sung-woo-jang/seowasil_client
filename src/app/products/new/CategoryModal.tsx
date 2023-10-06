'use client';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function CategoryModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>카테고리 추가</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack alignItems="center" justifyContent="center" gap={3} p={4}>
            <Typography variant="h4" component="h4">
              카테고리 추가
            </Typography>
          </Stack>
          <Stack alignItems="center" justifyContent="center" gap={3} p={4}>
            <Stack spacing={1}>
              <InputLabel>카테고리 등록</InputLabel>

              <TextField id="outlined-basic" variant="outlined" />
            </Stack>
          </Stack>
          <Stack
            direction="row"
            alignItems="center"
            justifyContent="center"
            gap={2}
            p={4}
          >
            <Button onClick={handleClose} variant="contained" color="secondary">
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              onClick={handleClose}
            >
              Add
            </Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
