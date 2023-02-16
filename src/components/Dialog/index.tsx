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
    isData: { id: number; title: string }[];
    isCategory: string;
    onSelectToggleHandler: () => void;
    onDropdownCloseHandler: (index: number) => void;
    onDialog: () => void;
}

function Dialog({
    isData,
    isCategory,
    onDialog,
    onSelectToggleHandler,
    onDropdownCloseHandler,
}: DialogProps) {
    return (
        <DialogWrapper onClick={onDialog}>
            <Container onClick={(e: React.MouseEvent<HTMLElement>) => e.stopPropagation()}>
                <AddCategory>
                    <div>+ 새 카테고리</div>
                    <input
                        type="text"
                        placeholder="카테고리 이름"
                        // value={titleInput}
                        // onChange={onChangeHandler}
                    />
                    <div>
                        <Button onClick={onDialog}>취소</Button>
                        <Button onClick={onDialog} contained={true}>
                            저장
                        </Button>
                    </div>
                </AddCategory>

                <CategoryList>
                    {isData.map((list, index) => (
                        <CategoryItem
                            key={list.id}
                            onClick={() => {
                                onDropdownCloseHandler(index);
                            }}
                        >
                            {list.title}
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
