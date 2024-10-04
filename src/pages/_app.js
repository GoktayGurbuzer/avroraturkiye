import '../styles/globals.css';  // Stil dosyasını buraya import ediyoruz.

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp;
