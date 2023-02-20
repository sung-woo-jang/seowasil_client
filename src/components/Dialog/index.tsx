import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncPostCategoryFetch } from '../../api/productApi';
import { AppDispatch, RootState } from '../../store';
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
    onDropdownCloseHandler: (index: number) => void;
    onDialog: () => void;
}

function Dialog({ isCategory, onDialog, onDropdownCloseHandler }: DialogProps) {
    const dispatch = useDispatch<AppDispatch>();
    const categories = useSelector((state: RootState) => state.product.categories);
    const inputRef = useRef<HTMLInputElement>(null);

    const postCategoryHandler = (e: React.MouseEvent<HTMLElement>) => {
        e.preventDefault();

        if (inputRef.current && inputRef.current.value.length) {
            dispatch(asyncPostCategoryFetch(inputRef.current.value));
            inputRef.current.value = '';
        }
    };

    return (
        <DialogWrapper onClick={onDialog}>
            <Container onClick={(e: React.MouseEvent<HTMLElement>) => e.stopPropagation()}>
                <AddCategory>
                    <div>+ 새 카테고리</div>
                    <input type="text" placeholder="카테고리 이름" ref={inputRef} />
                    <div>
                        <Button onClick={onDialog}>취소</Button>
                        <Button onClick={postCategoryHandler} contained={true}>
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
