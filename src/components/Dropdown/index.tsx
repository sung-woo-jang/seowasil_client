import { useState } from 'react';
import { Caret, DropDown, Menu, Select } from './style';

const list = ['파스티기아타', '문그로우', '블루 애로우'];

function Dropdown() {
    // Select State
    const [select, setSelect] = useState(false);
    const selectToggleHandler = () => {
        setSelect(!select);
    };

    const [title, setTitle] = useState(list[0]);
    const selectCancelHandler = (index: number) => {
        setTitle(list[index]);
        setSelect(false);
    };
    // toggle State
    return (
        <DropDown>
            <Select onClick={selectToggleHandler} isActive={select}>
                {/* 클릭한 놈으로 내용 바꾸기 */}
                <span>{title}</span>
                <Caret isActive={select}></Caret>
            </Select>
            <Menu isActive={select}>
                {list.map((el, idx) => (
                    <li
                        key={idx + 1}
                        onClick={() => {
                            selectCancelHandler(idx);
                        }}
                    >
                        {el}
                    </li>
                ))}
            </Menu>
        </DropDown>
    );
}

export default Dropdown;
