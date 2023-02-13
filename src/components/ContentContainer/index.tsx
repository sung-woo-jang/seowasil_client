import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Collapse, List, ListItemText, ListSubheader } from '@mui/material';
import { SetStateAction, useState } from 'react';
import CategoryDialog from '../CategoryDialog';
import { ContentWrapper, InputBox, ListItemButton, TextArea, TextAreaBox } from './style';

function ContentContainer() {
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

    const selectHandler = (category: SetStateAction<string>) => {
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
            <TextAreaBox>
                <div>상품 설명란</div>
                <TextArea
                    // type="text"
                    placeholder="내용을 입력해주세요."
                    id="content-description"
                    onFocus={isActiveHandler}
                    onBlur={isActiveHandler}
                    isActive={isActive}
                />
            </TextAreaBox>

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
                            <ListItemText primary="카테고리 관리" sx={{ color: '#1976d2' }} />
                        </ListItemButton>
                    </List>
                </Collapse>
            </List>
            <CategoryDialog isOpen={dialogOpen} dialogCloseHandler={dialogCloseHandler} />
        </ContentWrapper>
    );
}

export default ContentContainer;
