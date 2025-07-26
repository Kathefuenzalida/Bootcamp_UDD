import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { ErrorBoundary } from "./ErrorBoundary";
import { useLocation } from "react-router-dom";

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