import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Main from './page/Main';
import Login from './page/Login';
import SignUp from './page/SignUp';
import Product from './page/Product';
import Category from './page/Category';
import Introduction from './page/Introduction';
import Notice from './page/Notice';
import CustomerCenter from './page/CustomerCenter';
import NotFound from './page/NotFound';
import AdminLayout from './Layout/AdminLayout';
import DashBoard from './page/DashBoard';
import ManageProduct from './page/ManageProduct';
import Write from './page/ManageProduct/Write';
import ManageCustomer from './page/ManageCustomer';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { loginCheck } from './store/slice/authSlice';
import CustomerCenterWrite from './page/CustomerCenterWrite';

axios.defaults.withCredentials = true; // refreshToken cookie를 주고받기 위함

/* 
    - Feat
        1. 로그아웃
        2. 회원가입
*/

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loginCheck());
    }, [dispatch]);

    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Main />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/product/:product_id" element={<Product />} />
                <Route path="/category/:category_id" element={<Category />} />
                <Route path="/introduction" element={<Introduction />} />
                <Route path="/notice" element={<Notice />} />
                <Route path="/customer_center" element={<CustomerCenter />} />
                <Route path="/customer_center/write" element={<CustomerCenterWrite />} />
            </Route>
            <Route path="/" element={<AdminLayout />}>
                <Route path="/admin" element={<DashBoard />} />
                <Route path="/admin/product" element={<ManageProduct />} />
                <Route path="/admin/product/write" element={<Write />} />
                <Route path="/admin/customer" element={<ManageCustomer />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
