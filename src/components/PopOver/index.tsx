import { Fragment, useState } from 'react';
import { ThreeDots } from '../../icons';
import { Button } from '../UI/Button';
import { Checkbox, Popover } from '@mui/material';

function PopOver() {
    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    // const id = open ? 'simple-popover' : undefined;

    const [checked, setChecked] = useState(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };
    return (
        <Fragment>
            <Button onClick={handleClick}>
                <ThreeDots
                    style={{
                        width: '20px',
                        height: 'auto',
                    }}
                />
            </Button>
            <Popover
                // id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <div style={{ marginTop: '10px', width: '150px', marginBottom: '10px' }}>
                    <div>
                        <Checkbox
                            checked={checked}
                            onChange={handleChange}
                            inputProps={{ 'aria-label': 'controlled' }}
                        />
                        인기 상품 등록
                    </div>
                    <div style={{ textAlign: 'center' }}>상품 삭제</div>
                </div>
            </Popover>
        </Fragment>
    );
}

export default PopOver;
