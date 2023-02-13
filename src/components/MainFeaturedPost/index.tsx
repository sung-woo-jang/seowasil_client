import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

const post = {
    title: '부여 서와실농원',
    description: `충남 부여에서 조경수,신품종 측백을 재배 및 판매하고 있습니다.
        문의전화 010-6711-7892
        (부) 010-2077-2989
        네이버 블로그: 부여서와실농원
        블로그에 귀농귀촌 나무식재, 정원관리, 우리나라 유망수, 타이밍에 맞는 수종 등 좋은 정보가 많습니다.`,
    image: 'https://yt3.ggpht.com/lVJmLnQAxffeBJG4inr-hvwqr60HH3zXIS1pO6HwbzXDmQSvPNcLt00TQtVFawQnOmChtHYYHiM=w2120-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj',
    imageText: '나무박사 주민창.jpg',
};

function MainFeaturedPost() {
    return (
        <Paper
            sx={{
                position: 'relative',
                backgroundColor: 'grey.800',
                color: '#fff',
                mb: 4,
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                backgroundImage: `url(${post.image})`,
                textShadow: '-1px 0 black, 0 1px black, 1px 0 black, 0 -1px black',
            }}
        >
            {/* Increase the priority of the hero background image */}
            {<img style={{ display: 'none' }} src={post.image} alt={post.imageText} />}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    backgroundColor: 'rgba(0,0,0,.3)',
                }}
            />
            <Grid container>
                <Grid item md={6}>
                    <Box
                        sx={{
                            position: 'relative',
                            p: { xs: 3, md: 6 },
                            pr: { md: 0 },
                        }}
                    >
                        <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                            {post.title}
                        </Typography>
                        <Typography
                            variant="h5"
                            color="inherit"
                            paragraph
                            sx={{ fontSize: '1rem' }}
                        >
                            {post.description}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </Paper>
    );
}

export default MainFeaturedPost;
