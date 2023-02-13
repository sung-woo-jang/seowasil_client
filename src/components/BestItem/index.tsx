import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    Grid,
    Link,
    Typography,
} from '@mui/material';
import { ProductTitle, SubTitle, Title } from './style';

const cards = [1, 2, 3];

const BestItem = () => {
    return (
        <Container>
            <ProductTitle>
                <Title>최고 인기 상품</Title>
                <SubTitle>부여 서와실 농원의 최고 인기상품 입니다.</SubTitle>
            </ProductTitle>
            <Grid container spacing={3}>
                {cards.map((card) => (
                    <Grid item key={card} xs={12} sm={6} md={4}>
                        <Card
                            sx={{
                                height: '100%',
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <Link
                                href={`product/${card}`}
                                sx={{ textDecoration: 'none', color: 'black' }}
                            >
                                <CardMedia
                                    component="img"
                                    image={`${process.env.PUBLIC_URL}/images/문그로우1.jpg`}
                                    alt="random"
                                    height="400px"
                                />
                                <CardContent sx={{ flexGrow: 1 }}>
                                    <Typography gutterBottom variant="h5" component="h2">
                                        문그로우
                                    </Typography>
                                    <Typography>
                                        잎은 은청색을 띠어 우아하고 고급스러우며 폭은 넓은
                                        수직 피라미드 수형으로 자라는 것이 특징이다
                                    </Typography>
                                </CardContent>
                            </Link>
                            <CardActions>
                                <Grid container>
                                    <Grid item xs>
                                        <Link
                                            href={`product`}
                                            sx={{
                                                textDecoration: 'none',
                                                color: 'black',
                                            }}
                                        >
                                            <Button size="small">상품 보기</Button>
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
