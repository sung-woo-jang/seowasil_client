import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Grid,
    Typography,
} from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getProducts } from '../../utils/api/getProducts';
import { Button } from '../UI/Button';
import { ProductTitle, SubTitle, Title } from './style';

interface productsData {
    id: number;
    title: string;
    description: string;
    productImageUrl: { storedFileName: string[] };
}

const BestItem = () => {
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
        <Container>
            <ProductTitle>
                <Title>최고 인기 상품</Title>
                <SubTitle>부여 서와실 농원의 최고 인기상품 입니다.</SubTitle>
            </ProductTitle>
            <Grid container spacing={3}>
                {products.map(({ id, title, description, productImageUrl }) => (
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
            </Grid>
        </Container>
    );
};

export default BestItem;
