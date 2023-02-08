import { SearchBarWrapper, SearchIcon } from './style';

const SearchBar = (props) => {
    return (
        <SearchBarWrapper>
            <label>
                <input
                    type="text"
                    placeholder={props.isPlaceHolder ? props.isPlaceHolder : '검색'}
                />
                <SearchIcon />
            </label>
        </SearchBarWrapper>
    );
};

export default SearchBar;
