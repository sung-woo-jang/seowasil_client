import { SearchBarWrapper, SearchIcon } from './style';

interface SearchBarProps {
    isPlaceHolder?: string;
}

function SearchBar({ isPlaceHolder }: SearchBarProps) {
    return (
        <SearchBarWrapper>
            <label>
                <input type="text" placeholder={isPlaceHolder ? isPlaceHolder : '검색'} />
                <SearchIcon />
            </label>
        </SearchBarWrapper>
    );
}

export default SearchBar;
