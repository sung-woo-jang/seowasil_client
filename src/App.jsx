import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Main from './page/Main';
import SignUp from './page/SignUp';
import Product from './page/Product';
import Category from './page/Category';
import Introduction from './page/Introduction';
import Notice from './page/Notice';
import CustomerCenter from './page/CustomerCenter';

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Main />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/product/:product_id" element={<Product />} />
                <Route path="/category/:category_id" element={<Category />} />
                <Route path="/introduction" element={<Introduction />} />
                <Route path="/notice" element={<Notice />} />
                <Route path="/customer_center" element={<CustomerCenter />} />
            </Route>
        </Routes>
    );
}

export default App;
