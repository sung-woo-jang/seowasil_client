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
import { getProducts } from '../../utils/api/Product/getProducts';
import dayjs from 'dayjs';
import PopOver from '../../components/PopOver';

interface productsData {
    id: number;
    title: string;
    description: string;
    sellPrice: number;
    createdAt: string;
    category: { name: string };
}

const ManageProduct = () => {
    const { pathname } = useLocation();
    const categories = useSelector((state: RootState) => state.product.categories);

    const [products, setProducts] = useState<productsData[]>([]);

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
                        {categories?.map(({ name, id }) => (
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
                                <td>등록일</td>
                                <td></td>
                            </TopTr>
                        </thead>
                        <tbody>
                            {products.map(({ category, createdAt, id, sellPrice, title }) => (
                                <TableUnderRow key={id}>
                                    <td>{id}</td>
                                    <td>{title}</td>
                                    <td>{category?.name}</td>
                                    <td>{sellPrice}₩</td>
                                    <td>{dayjs(createdAt).format('YYYY-MM-DD')}</td>
                                    <td style={{ position: 'relative' }}>
                                        <PopOver />
                                        {/* <ThreeDots
                                            style={{
                                                width: '20px',
                                                height: 'auto',
                                            }}
                                        />

                                        <div
                                            style={{
                                                width: '150px',
                                                height: '150px',
                                                background: Colors.Gray8,
                                                position: 'absolute',
                                                right: '50%',
                                                top: '50%',
                                                display: 'none',
                                            }}
                                        >
                                            <div style={{ marginTop: '10px' }}>
                                                <div>인기 상품 등록</div>
                                                <div>상품 삭제</div>
                                            </div>
                                        </div> */}
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
