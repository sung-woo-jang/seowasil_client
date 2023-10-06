'use client';
import DragNDrop from './DragNDrop';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { useState } from 'react';
import Container from '@mui/material/Container';
import CategoryModal from './CategoryModal';

// 상품 등록 페이지
export default function Page() {
  const [age, setAge] = useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
  return (
    <Container component="main" maxWidth="md">
      <CategoryModal />
      <Box
        sx={{
          marginTop: 8,
        }}
      >
        <Box>
          <TextField label="제목" variant="outlined" />
        </Box>
        <Box>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">카테고리</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value={10}>나무10</MenuItem>
              <MenuItem value={20}>나무20</MenuItem>
              <MenuItem value={30}>나무30</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box>
          <TextField label="설명란" multiline rows={4} />
        </Box>
        <Box>
          <TextField
            // id="outlined-number"
            label="가격"
            type="number"
            // InputLabelProps={{
            //   shrink: true,
            // }}
          />
        </Box>
        <Box>
          <TextField label="최소 주문 수량" type="number" />
        </Box>
        <div>
          상품 사진
          <DragNDrop />
        </div>
        <div>
          상세 사진
          <DragNDrop />
        </div>
      </Box>
    </Container>
  );
}
