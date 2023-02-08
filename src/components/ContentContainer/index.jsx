import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Collapse, List, ListItemText, ListSubheader } from '@mui/material';
import { useState } from 'react';
import CategoryDialog from '../CategoryDialog';
import { ContentWrapper, InputBox, ListItemButton, TextArea, TextAreaBox } from './style';

const ContentContainer = (props) => {
    const [isActive, setIsActive] = useState(false);
    const [open, setOpen] = useState(true);
    const [select, setSelect] = useState('선택');

    const [dialogOpen, setDialogOpen] = useState(false);

    const dialogOpenHandler = () => {
        setDialogOpen(true);
    };

    const dialogCloseHandler = () => {
        setDialogOpen(false);
    };

    const selectHandler = (category) => {
        setSelect(category);
        setOpen(!open);
    };

    const isActiveHandler = () => {
        setIsActive(!isActive);
    };

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <ContentWrapper>
            <InputBox>
                <label htmlFor="content-title">상품명</label>
                <input type="text" id="content-title" />
            </InputBox>
            {/* className : wrapper */}
            <TextAreaBox>
                {/* <label htmlFor="content-description">상품 설명란</label> */}
                <div>상품 설명란</div>
                <TextArea
                    type="text"
                    placeholder="내용을 입력해주세요."
                    id="content-description"
                    onFocus={isActiveHandler}
                    onBlur={isActiveHandler}
                    isActive={isActive}
                />
            </TextAreaBox>
            {/* 
            1. 카테고리 (문그로우, 블루 애로우 등등)
                1-1 아코디언
                1-2 카테고리 추가 - Dialog
            2. inputGroup
                2-1. 과명
                2-2. 학명
                2-3. 염명
                2-4. 기타등등
                2-5. 최소 주문 수량
                2-6. 가격 (판매가, 정가)

            */}
            <List
                sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                component="nav"
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader component="div" id="nested-list-subheader">
                        카테고리
                    </ListSubheader>
                }
            >
                <ListItemButton onClick={handleClick}>
                    <ListItemText primary={select} />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton left={10}>
                            <ListItemText
                                primary="문그로우"
                                onClick={() => selectHandler('문그로우')}
                            />
                        </ListItemButton>
                        <ListItemButton left={10}>
                            <ListItemText
                                primary="파스티기아타"
                                onClick={() => selectHandler('파스티기아타')}
                            />
                        </ListItemButton>
                        <ListItemButton left={10}>
                            <ListItemText
                                primary="블루 애로우"
                                onClick={() => selectHandler('블루 애로우')}
                            />
                        </ListItemButton>
                        <ListItemButton left={10} onClick={dialogOpenHandler}>
                            <ListItemText
                                primary="카테고리 관리"
                                sx={{ color: '#1976d2' }}
                            />
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>
            <CategoryDialog isOpen={dialogOpen} dialogCloseHandler={dialogCloseHandler} />
        </ContentWrapper>
    );
};

export default ContentContainer;
