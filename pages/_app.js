import Menu from '@/components/global/Menu';
import SmoothScroll from '@/components/global/SmoothScroll';
import '@/styles/globals.css';
import localFont from 'next/font/local';
import { PagesProgressBar as ProgressBar } from 'next-nprogress-bar';
import Footer from '@/components/global/Footer';

const MottoSTD = localFont({ src: './fonts/MottoSTD.ttf' });
const IBMPlexSansLight = localFont({ src: './fonts/IBMPlexSans-Light.ttf' });

export default function App({ Component, pageProps }) {
    return (
        <>
            <Menu />
            <SmoothScroll>
                <main className={[MottoSTD.className, IBMPlexSansLight.className]}>
                    <Component {...pageProps} />
                </main>
            </SmoothScroll>
        </>
    );
}
