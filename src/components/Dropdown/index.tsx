import { Caret, DropDown, Menu, Select } from './style';

interface DropdownProps {
    isData: { id: number; title: string }[];
    isSelected: boolean;
    isCategory: string;
    onDialog: () => void;
    onSelectToggleHandler: () => void;
    onDropdownCloseHandler: (index: number) => void;
}

function Dropdown({
    isData,
    isSelected,
    isCategory,
    onDialog,
    onSelectToggleHandler,
    onDropdownCloseHandler,
}: DropdownProps) {
    return (
        <DropDown>
            <Select onClick={onSelectToggleHandler} isActive={isSelected}>
                {/* 클릭한 놈으로 내용 바꾸기 */}
                <span>{isCategory}</span>
                <Caret isActive={isSelected}></Caret>
            </Select>
            <Menu isActive={isSelected}>
                {isData.map(({ id, title }, index) => (
                    <li
                        key={id}
                        onClick={() => {
                            onDropdownCloseHandler(index);
                        }}
                    >
                        {title}
                    </li>
                ))}
                <li onClick={onDialog}>새 카테고리</li>
            </Menu>
        </DropDown>
    );
}

export default Dropdown;
