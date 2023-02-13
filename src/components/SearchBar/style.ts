import { Search as MuiSearch } from '@mui/icons-material';
import styled from 'styled-components';

export const SearchBarWrapper = styled.div`
    position: relative;
    width: 400px;
    margin: 0 10px;

    & label input {
        width: 100%;
        height: 40px;
        border-radius: 40px;
        padding: 5px 20px;
        font-size: 20px;
        padding-left: 40px;
        outline: none;
        border: 1px solid #999;
    }

    & svg {
        font-size: 30px;
    }
`;

export const SearchIcon = styled(MuiSearch)`
    position: absolute;
    top: 5px;
    left: 10px;
`;
