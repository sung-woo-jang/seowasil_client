import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Main from './page/Main';

function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<Main />} />
            </Route>
        </Routes>
    );
}

export default App;
