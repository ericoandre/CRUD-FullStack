import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from "./components/Layout/layout";
import { Routes, Route } from "react-router-dom";

import menuLink, { tituloBrand } from './assets/menuLink';

const App = () => {
  return (
    <Layout tituloNav={tituloBrand}>
      <Routes>
        {menuLink.map((L, index) =>
          <Route key={index} path={L.path} element={L.element } />
        )};
      </Routes>
    </Layout>
  )
}
export default App;