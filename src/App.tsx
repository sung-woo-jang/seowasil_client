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
import CustomerCenterWrite from './page/CustomerCenter/CustomerCenterWrite';
import { AppDispatch } from './store';
import CustomerCenterDetail from './page/CustomerCenter/CustomerCenterDetail';

axios.defaults.withCredentials = true; // refreshToken cookie를 주고받기 위함

function App() {
    const dispatch = useDispatch<AppDispatch>();

    useEffect(() => {
        dispatch(loginCheck());
    }, [dispatch]);

    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="" element={<Main />} />
                <Route path="login" element={<Login />} />
                <Route path="signup" element={<SignUp />} />
                <Route path="product/:product_id" element={<Product />} />
                <Route path="category/:category_id" element={<Category />} />
                <Route path="introduction" element={<Introduction />} />
                <Route path="notice" element={<Notice />} />
                <Route path="customer_center" element={<CustomerCenter />} />
                <Route path="customer_center/:id" element={<CustomerCenterDetail />} />
                <Route path="customer_center/write" element={<CustomerCenterWrite />} />
            </Route>

            <Route path="admin" element={<AdminLayout />}>
                <Route path="" element={<DashBoard />} />
                <Route path="product" element={<ManageProduct />} />
                <Route path="product/write" element={<Write />} />
                <Route path="customer" element={<ManageCustomer />} />
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
}

export default App;
