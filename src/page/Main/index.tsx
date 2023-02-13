import BestItem from '../../components/BestItem';
import MainFeaturedPost from '../../components/MainFeaturedPost';
import Navbar from '../../components/Navbar';

const Main = (props) => {
    return (
        <>
            <Navbar />
            <MainFeaturedPost />
            <BestItem />
        </>
    );
};

export default Main;
