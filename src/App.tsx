import { Route, Routes } from 'react-router-dom';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import React, { useEffect, Suspense } from 'react';
import { loginCheck } from './store/slice/authSlice';
import { AppDispatch } from './store';
import LoadingSpinner from './components/LoadingSpinner';

const Layout = React.lazy(() => import('./Layout'));
const Main = React.lazy(() => import('./page/Main'));
const Login = React.lazy(() => import('./page/Login'));
const SignUp = React.lazy(() => import('./page/SignUp'));
const Product = React.lazy(() => import('./page/Product'));
const Category = React.lazy(() => import('./page/Category'));
const Introduction = React.lazy(() => import('./page/Introduction'));
const Notice = React.lazy(() => import('./page/Notice'));
const CustomerCenter = React.lazy(() => import('./page/CustomerCenter'));
const NotFound = React.lazy(() => import('./page/NotFound'));
const AdminLayout = React.lazy(() => import('./Layout/AdminLayout'));
const DashBoard = React.lazy(() => import('./page/DashBoard'));
const ManageProduct = React.lazy(() => import('./page/ManageProduct'));
const Write = React.lazy(() => import('./page/ManageProduct/Write'));
const ManageCustomer = React.lazy(() => import('./page/ManageCustomer'));
const CustomerCenterWrite = React.lazy(() => import('./page/CustomerCenter/CustomerCenterWrite'));
const CustomerCenterDetail = React.lazy(() => import('./page/CustomerCenter/CustomerCenterDetail'));

function App() {
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(loginCheck());
    }, [dispatch]);

    return (
        <div>
            <Suspense fallback={<LoadingSpinner />}>
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
                        <Route path="/customer_center/:id" element={<CustomerCenterDetail />} />
                        <Route path="/customer_center/write" element={<CustomerCenterWrite />} />
                    </Route>

                    <Route path={`/admin`} element={<AdminLayout />}>
                        <Route path="" element={<DashBoard />} />
                        <Route path="product" element={<ManageProduct />} />
                        <Route path="product/write" element={<Write />} />
                        <Route path="customer" element={<ManageCustomer />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;
