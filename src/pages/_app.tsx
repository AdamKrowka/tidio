import type { AppProps } from 'next/app';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../theme';
import GlobalStyles from '../theme/globalStyles';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <ThemeProvider theme={theme}>
            {GlobalStyles}
            <Component {...pageProps} />
        </ThemeProvider>
    );
};

export default MyApp;
