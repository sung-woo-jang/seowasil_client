import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Main from './page/Main';
import SignUp from './page/SignUp';
import Product from './page/Product';

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Main />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/product/:product_id" element={<Product />} />
            </Route>
        </Routes>
    );
}

export default App;
