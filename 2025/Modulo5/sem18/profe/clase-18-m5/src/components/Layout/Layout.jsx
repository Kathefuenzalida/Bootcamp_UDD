import Header from './Header';
import Footer from './Footer';
import { Outlet, useLocation } from 'react-router-dom';
import { ErrorBoundary } from '../ErrorBoundary';

const Layout = () => {
    const location = useLocation();

    return (
        <>
            <Header />
            <main>
                <ErrorBoundary key={location.key}>
                    <Outlet />
                </ErrorBoundary>
            </main>
            <Footer />
        </>
    )
}

export default Layout;