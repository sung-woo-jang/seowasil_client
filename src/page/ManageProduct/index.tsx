import { MoreHoriz } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
import ImageBox from '../../components/ImageBox';
import SearchBar from '../../components/SearchBar';
import Table from '../../components/Table';
import { Button } from '../../components/UI/Button';
import {
    CategoryList,
    ContentContainer,
    ContentNavBar,
    HeaderLeft,
    HeaderRight,
    Main,
    ManagedContainer,
    ManageProductWrapper,
    ProductHeader,
    TableUnderRow,
    TopTr,
} from './style';

const detailList = [
    {
        id: 1,
        price: 1500,
        name: '문그로우 0년생',
        category: '문그로우',
        registDate: '2022-01-12',
        status: '판매중',
    },
    {
        id: 2,
        price: 1800,
        name: '파스티기아타 0년생',
        category: '파스티기아타',
        registDate: '2022-12-08',
        status: '상품 준비중',
    },
    {
        id: 3,
        price: 30000,
        name: '블루 애로우 0년생',
        category: '블루 애로우',
        registDate: '2022-05-23',
        status: '숨김',
    },
];

const ManageProduct = () => {
    const { pathname } = useLocation();
    return (
        <ManageProductWrapper>
            <ProductHeader>
                <HeaderLeft>상품관리</HeaderLeft>
                <HeaderRight>
                    <Link to={`${pathname}/write`}>
                        <Button color="black">상품 추가</Button>
                    </Link>
                </HeaderRight>
            </ProductHeader>
            <Main>
                <ManagedContainer>
                    <div>전체 카테고리</div>
                    <CategoryList>
                        <li>문그로우</li>
                        <li>파스티기아타</li>
                    </CategoryList>
                </ManagedContainer>
                <ContentContainer>
                    <ContentNavBar>
                        <li>전체</li>
                        <li>판매중</li>
                        <li>품절</li>
                        <li>숨김</li>
                    </ContentNavBar>
                    <SearchBar isPlaceHolder="상품명 검색" />
                    <Table>
                        <thead>
                            <TopTr>
                                <td>No</td>
                                <td>상품명</td>
                                <td>카테고리</td>
                                <td>판매가</td>
                                <td>상태</td>
                                <td>등록일</td>
                                <td></td>
                            </TopTr>
                        </thead>
                        <tbody>
                            {detailList.map(({ id, price, name, category, registDate, status }) => (
                                <TableUnderRow key={id}>
                                    <td>{id}</td>
                                    <td>
                                        <ImageBox text={name} />
                                    </td>
                                    <td>{category}</td>
                                    <td>{price}₩</td>
                                    <td>{status}</td>
                                    <td>{registDate}</td>
                                    <td>
                                        <MoreHoriz />
                                    </td>
                                </TableUnderRow>
                            ))}
                        </tbody>
                    </Table>
                </ContentContainer>
            </Main>
        </ManageProductWrapper>
    );
};

export default ManageProduct;
