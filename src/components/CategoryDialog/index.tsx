import { Dialog } from '@mui/material';
import Button from '../Button';
import InputField from '../InputField';
import {
    AddCategory,
    CategoryEditor,
    CategoryItem,
    CategoryList,
    Container,
} from './style';

const list = ['문그로우', '파스티기아타', '블루 애로우'];

type CategoryDialogProps = {
    isOpen: boolean;
    dialogCloseHandler: () => void;
};

function CategoryDialog({ isOpen, dialogCloseHandler }: CategoryDialogProps) {
    // const { isOpen, dialogCloseHandler } = props;

    return (
        <Dialog open={isOpen} onClose={dialogCloseHandler} maxWidth="lg">
            <Container>
                <AddCategory>
                    <div>+ 새 카테고리</div>
                    <input type="text" placeholder="카테고리 이름" />
                    <div>
                        <Button>취소</Button>
                        <Button contained={true}>저장</Button>
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
