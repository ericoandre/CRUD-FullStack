import Header from "../Header/header";

const Layout = ({ children, tituloNav }:any) => {
    return (
        <>
            <Header brandText={tituloNav} />
            <div>
                {children}
            </div>
        </>
    );
};

export default Layout;