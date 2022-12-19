import Header from '../header/header';
import Footer from '../footer/footer';

const Layout = ({ children }) => (
    <>
        <Header/>
        { children }
        <Footer/>
    </>
);

export default Layout;
