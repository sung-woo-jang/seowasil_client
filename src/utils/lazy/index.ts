import { lazy } from 'react';

export const Layout = lazy(() => import('./../../Layout'));
export const Main = lazy(() => import('./../../page/Main'));
export const Login = lazy(() => import('./../../page/Login'));
export const SignUp = lazy(() => import('./../../page/SignUp'));
export const Product = lazy(() => import('./../../page/Product'));
export const Category = lazy(() => import('./../../page/Category'));
export const Introduction = lazy(() => import('./../../page/Introduction'));
export const Order = lazy(() => import('./../../page/Order'));
export const Notices = lazy(() => import('./../../page/Notices'));
export const CustomerCenters = lazy(() => import('./../../page/CustomerCenters'));
export const NotFound = lazy(() => import('./../../page/NotFound'));
export const AdminLayout = lazy(() => import('./../../Layout/AdminLayout'));
export const DashBoard = lazy(() => import('./../../page/DashBoard'));
export const ManageProduct = lazy(() => import('./../../page/ManageProduct'));
export const Write = lazy(() => import('./../../page/ManageProduct/Write'));
export const ManageCustomer = lazy(() => import('./../../page/ManageCustomer'));
export const CustomerCenterWrite = lazy(
    () => import('./../../page/CustomerCenters/CustomerCenterWrite'),
);
export const CustomerCenterDetail = lazy(
    () => import('./../../page/CustomerCenters/CustomerCenterDetail'),
);
