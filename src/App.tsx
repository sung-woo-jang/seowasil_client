import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, Suspense, lazy } from 'react';
import { loginCheck } from './store/slice/authSlice';
import { AppDispatch } from './store';
import { getCategories } from './utils/api/getCategories';
import LoadingSpinner from './components/LoadingSpinner';
import CustomerCenter from './components/CustomerCenter/Index';
import Notice from './components/Notice';
import NoticeWrite from './components/NoticeWrite';

const Layout = lazy(() => import('./Layout'));
const Main = lazy(() => import('./page/Main'));
const Login = lazy(() => import('./page/Login'));
const SignUp = lazy(() => import('./page/SignUp'));
const Product = lazy(() => import('./page/Product'));
const Category = lazy(() => import('./page/Category'));
const Introduction = lazy(() => import('./page/Introduction'));
const Notices = lazy(() => import('./page/Notices'));
const CustomerCenters = lazy(() => import('./page/CustomerCenters'));
const NotFound = lazy(() => import('./page/NotFound'));
const AdminLayout = lazy(() => import('./Layout/AdminLayout'));
const DashBoard = lazy(() => import('./page/DashBoard'));
const ManageProduct = lazy(() => import('./page/ManageProduct'));
const Write = lazy(() => import('./page/ManageProduct/Write'));
const ManageCustomer = lazy(() => import('./page/ManageCustomer'));
const CustomerCenterWrite = lazy(() => import('./page/CustomerCenters/CustomerCenterWrite'));
const CustomerCenterDetail = lazy(() => import('./page/CustomerCenters/CustomerCenterDetail'));

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
                    <Route path="/notice" element={<Notices />}>
                        <Route path="" element={<Notice />} />
                        <Route path="write" element={<NoticeWrite />} />
                    </Route>
                    <Route path="/customer_center" element={<CustomerCenters />}>
                        <Route path="" element={<CustomerCenter />} />
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
