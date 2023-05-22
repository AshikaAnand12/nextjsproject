import '../styles/global.css'
import MenuBar from '../components/menubar';

function MyApp({ Component, pageProps }) {
    return (
        <div>
          <MenuBar />
          <Component {...pageProps} />
        </div>
      );
}

export default MyApp