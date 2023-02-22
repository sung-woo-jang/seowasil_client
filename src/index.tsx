import { CookiesProvider } from 'react-cookie';
import { createRoot } from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import store from './store';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
    <Provider store={store}>
        <CookiesProvider>
            <HashRouter>
                <App />
            </HashRouter>
        </CookiesProvider>
    </Provider>,
);
