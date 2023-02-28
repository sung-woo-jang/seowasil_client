import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Caret, DropDown, Menu, Select } from './style';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

interface DropdownProps {
    isSelected: boolean;
    isCategory: string;
    onDialog: () => void;
    onSelectToggleHandler: () => void;
    onDropdownCloseHandler: (index: number) => void;
}

function Dropdown({
    isSelected,
    isCategory,
    onDialog,
    onSelectToggleHandler,
    onDropdownCloseHandler,
}: DropdownProps) {
    const categories = useSelector((state: RootState) => state.product.categories);

    return (
        <DropDown>
            <Select onClick={onSelectToggleHandler} isActive={isSelected}>
                <span>{isCategory}</span>
                <Caret isActive={isSelected}>
                    <ArrowDropDownIcon />
                </Caret>
            </Select>
            <Menu isActive={isSelected}>
                {categories.map(({ id, name }, index) => (
                    <li
                        key={id}
                        onClick={() => {
                            onDropdownCloseHandler(index);
                        }}
                    >
                        {name}
                    </li>
                ))}
                <li onClick={onDialog}>새 카테고리 +</li>
            </Menu>
        </DropDown>
    );
}

export default Dropdown;
