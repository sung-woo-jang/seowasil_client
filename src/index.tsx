import { CookiesProvider } from 'react-cookie';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import store from './store';
import GlobalStyle from './styles/GlobalStyle';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <CookiesProvider>
            <BrowserRouter>
                <GlobalStyle />
                <App />
            </BrowserRouter>
        </CookiesProvider>
    </Provider>,
);
