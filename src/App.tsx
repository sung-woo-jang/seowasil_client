import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect, Suspense } from 'react';
import { loginCheck } from './store/slice/authSlice';
import { AppDispatch } from './store';
import LoadingSpinner from './components/LoadingSpinner';
import Notice from './components/Notice';
import NoticeWrite from './components/NoticeWrite';
import { getCategories } from './utils/api/Category/getCategories';
import * as L from './utils/lazy';
import CustomerCenter from './components/CustomerCenter';

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
                <Route element={<L.Layout />}>
                    <Route path="/" element={<L.Main />} />
                    <Route path="/login" element={<L.Login />} />
                    <Route path="/signup" element={<L.SignUp />} />
                    <Route path="/product/:product_id" element={<L.Product />} />
                    <Route path="/category/:category_id" element={<L.Category />} />
                    <Route path="/introduction" element={<L.Introduction />} />
                    {/* 장바구니 */}
                    <Route path="/cart" element={<L.Cart />} />
                    {/* 주문페이지 */}
                    <Route path="/orders/:product_id/checkout" element={<L.Order />} />
                    {/* 공지사항 */}
                    <Route path="/notice" element={<L.Notices />}>
                        <Route path="" element={<Notice />} />
                        <Route path="write" element={<NoticeWrite />} />
                    </Route>
                    {/* 문의하기 */}
                    <Route path="/customer_center" element={<L.CustomerCenters />}>
                        <Route path="" element={<CustomerCenter />} />
                        <Route path=":id" element={<L.CustomerCenterDetail />} />
                        <Route path="write" element={<L.CustomerCenterWrite />} />
                    </Route>
                </Route>

                <Route path={`/admin`} element={<L.AdminLayout />}>
                    <Route path="" element={<L.DashBoard />} />
                    <Route path="product" element={<L.ManageProduct />} />
                    <Route path="product/write" element={<L.Write />} />
                    <Route path="customer" element={<L.ManageCustomer />} />
                </Route>
                <Route path="*" element={<L.NotFound />} />
            </Routes>
        </Suspense>
    );
}

export default App;
