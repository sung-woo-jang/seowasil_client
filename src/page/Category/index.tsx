import { Card, CardActions, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { Button } from '../../components/UI/Button';
import { getProductsByCategoryId } from '../../utils/api/getProductsByCategoryId';
import { CategoryWrapper } from './style';

interface productsData {
    id: number;
    name: string;
    product: [
        {
            id: number;
            title: string;
            description: string;
            productImageUrl: { storedFileName: string[] };
        },
    ];
}

const Category = () => {
    const [products, setProducts] = useState<productsData[]>([]);
    const params = useParams();

    useEffect(() => {
        (async () => {
            if (params.category_id) {
                const data = await getProductsByCategoryId(params.category_id);
                setProducts(data);
            }
        })();
    }, [params.category_id]);
    // useParams로 id 파라미터를 이용해서
    // 해당 id에 맞는 컨텐츠들을 가져와서 뿌려준다.

    return (
        <>
            <Navbar />
            <CategoryWrapper>
                {products[0]?.product.map(({ id, title, description, productImageUrl }) => (
                    <Grid item key={id} xs={12} sm={6} md={4}>
                        <Card
                            sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <Link to={`/product/${id}`}>
                                <CardMedia
                                    component="img"
                                    image={`${process.env.REACT_APP_AWS_URL}${productImageUrl.storedFileName[0]}`}
                                    alt={title}
                                    height="400px"
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        {title}
                                    </Typography>
                                    <Typography>{description}</Typography>
                                </CardContent>
                            </Link>
                            <CardActions>
                                <Grid container>
                                    <Grid item xs>
                                        <Link to={`/product/${id}`}>
                                            <Button border={true}>상품 보기</Button>
                                        </Link>
                                    </Grid>
                                </Grid>
                            </CardActions>
                        </Card>
                    </Grid>
                ))}
            </CategoryWrapper>
        </>
    );
};

export default Category;
