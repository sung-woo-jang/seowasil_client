import { MoreHoriz } from '@mui/icons-material';
import { Link, useLocation } from 'react-router-dom';
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
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useEffect, useState } from 'react';
import { getProducts } from '../../utils/api/getProducts';

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

interface productsData {
    id: number;
    title: string;
    description: string;
    productImageUrl: { storedFileName: string[] };
}

const ManageProduct = () => {
    const { pathname } = useLocation();
    const categories = useSelector((state: RootState) => state.product.categories);

    const [products, setProducts] = useState<productsData[]>([
        {
            id: 0,
            title: '',
            description: '',
            productImageUrl: { storedFileName: [''] },
        },
    ]);

    useEffect(() => {
        (async () => {
            const data = await getProducts();
            setProducts(data);
        })();
    }, []);

    return (
        <ManageProductWrapper>
            <ProductHeader>
                <HeaderLeft>상품관리</HeaderLeft>
                <HeaderRight>
                    <Link to={`${pathname}/write`}>
                        <Button border={true} color="black">
                            상품 추가
                        </Button>
                    </Link>
                </HeaderRight>
            </ProductHeader>
            <Main>
                <ManagedContainer>
                    <div>전체 카테고리</div>
                    <CategoryList>
                        {categories.map(({ name, id }) => (
                            <li key={id}>{name}</li>
                        ))}
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
                                    <td>{name}</td>
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
