import { Fragment } from 'react';
import BestItem from '../../components/BestItem';
import MainFeaturedPost from '../../components/MainFeaturedPost';
import Navbar from '../../components/Navbar';

const Main = () => {
    return (
        <Fragment>
            <Navbar />
            <MainFeaturedPost />
            <BestItem />
        </Fragment>
    );
};

export default Main;
