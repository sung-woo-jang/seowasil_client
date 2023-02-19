import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import InputField from '../InputField';
import { Button } from '../UI/Button';
import {
    AddCategory,
    CategoryEditor,
    CategoryItem,
    CategoryList,
    Container,
    DialogWrapper,
} from './style';

interface DialogProps {
    isCategory: string;
    onSelectToggleHandler: () => void;
    onDropdownCloseHandler: (index: number) => void;
    onDialog: () => void;
}

function Dialog({
    isCategory,
    onDialog,
    onSelectToggleHandler,
    onDropdownCloseHandler,
}: DialogProps) {
    const categories = useSelector((state: RootState) => state.product.categories);
    return (
        <DialogWrapper onClick={onDialog}>
            <Container onClick={(e: React.MouseEvent<HTMLElement>) => e.stopPropagation()}>
                <AddCategory>
                    <div>+ 새 카테고리</div>
                    <input type="text" placeholder="카테고리 이름" />
                    <div>
                        <Button onClick={onDialog}>취소</Button>
                        <Button onClick={onDialog} contained={true}>
                            저장
                        </Button>
                    </div>
                </AddCategory>

                <CategoryList>
                    {categories.map(({ name, id }, index) => (
                        <CategoryItem
                            key={id}
                            onClick={() => {
                                onDropdownCloseHandler(index);
                            }}
                        >
                            {name}
                        </CategoryItem>
                    ))}
                </CategoryList>

                <CategoryEditor>
                    <InputField text="카테고리명" isValue={isCategory} />
                </CategoryEditor>
            </Container>
        </DialogWrapper>
    );
}

export default Dialog;
