import { Dialog } from '@mui/material';
import { useState } from 'react';
import { Button } from '../Button/style';
import InputField from '../InputField';
import { AddCategory, CategoryEditor, CategoryItem, CategoryList, Container } from './style';

type CategoryDialogProps = {
    isOpen: boolean;
    dialogCloseHandler: () => void;
};

function CategoryDialog({ isOpen, dialogCloseHandler }: CategoryDialogProps) {
    const [list, setList] = useState(['문그로우', '파스티기아타', '블루 애로우']);
    const [titleInput, setTitleInput] = useState('');
    const addItemHandler = () => {
        setList([...list, titleInput]);
        setTitleInput('');
    };

    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitleInput(e.target.value);
    };

    return (
        <Dialog open={isOpen} onClose={dialogCloseHandler} maxWidth="lg">
            <Container>
                <AddCategory>
                    <div>+ 새 카테고리</div>
                    <input
                        type="text"
                        placeholder="카테고리 이름"
                        value={titleInput}
                        onChange={onChangeHandler}
                    />
                    <div>
                        <Button onClick={dialogCloseHandler}>취소</Button>
                        <Button onClick={addItemHandler} contained={true}>
                            저장
                        </Button>
                    </div>
                </AddCategory>
                <CategoryList>
                    {list.map((el) => (
                        <CategoryItem>{el}</CategoryItem>
                    ))}
                </CategoryList>
                <CategoryEditor>
                    <InputField text="카테고리명" />
                </CategoryEditor>
            </Container>
        </Dialog>
    );
}

export default CategoryDialog;
