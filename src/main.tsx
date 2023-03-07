import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { prefixer } from 'stylis';
import rtlPlugin from 'stylis-plugin-rtl';
import App from './App';
import createCache from '@emotion/cache';
import './samples/node-api';
import { CacheProvider } from '@emotion/react';

const theme = createTheme({
	direction: 'rtl',
});
const cacheRtl = createCache({
	key: 'muirtl',
	stylisPlugins: [prefixer, rtlPlugin],
});

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
	<React.StrictMode>
		<CacheProvider value={cacheRtl}>
			<ThemeProvider theme={theme}>
				<App />
			</ThemeProvider>
		</CacheProvider>
	</React.StrictMode>
);

postMessage({ payload: 'removeLoading' }, '*');
