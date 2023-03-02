import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, Suspense, lazy } from 'react';
import { loginCheck } from './store/slice/authSlice';
import { AppDispatch } from './store';
import { getCategories } from './utils/api/getCategories';
import LoadingSpinner from './components/LoadingSpinner';
import CustomerCenterMain from './components/CustomerCenterMain/Index';

const Layout = lazy(() => import('./Layout'));
const Main = lazy(() => import('./page/Main'));
const Login = lazy(() => import('./page/Login'));
const SignUp = lazy(() => import('./page/SignUp'));
const Product = lazy(() => import('./page/Product'));
const Category = lazy(() => import('./page/Category'));
const Introduction = lazy(() => import('./page/Introduction'));
const Notice = lazy(() => import('./page/Notice'));
const CustomerCenter = lazy(() => import('./page/CustomerCenter'));
const NotFound = lazy(() => import('./page/NotFound'));
const AdminLayout = lazy(() => import('./Layout/AdminLayout'));
const DashBoard = lazy(() => import('./page/DashBoard'));
const ManageProduct = lazy(() => import('./page/ManageProduct'));
const Write = lazy(() => import('./page/ManageProduct/Write'));
const ManageCustomer = lazy(() => import('./page/ManageCustomer'));
const CustomerCenterWrite = lazy(() => import('./page/CustomerCenter/CustomerCenterWrite'));
const CustomerCenterDetail = lazy(() => import('./page/CustomerCenter/CustomerCenterDetail'));

function App() {
    const dispatch = useDispatch<AppDispatch>();
    useEffect(() => {
        dispatch(loginCheck());
    }, [dispatch]);

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    return (
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
                    <Route path="/customer_center" element={<CustomerCenter />}>
                        <Route path="" element={<CustomerCenterMain />} />
                        <Route path=":id" element={<CustomerCenterDetail />} />
                        <Route path="write" element={<CustomerCenterWrite />} />
                    </Route>
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
    );
}

export default App;
