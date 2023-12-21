import ColaboradorPage from "../pages/Colaborador/colaboradorPage";
import SetorPage from "../pages/Setor/setorPage";

const menuLink = [
    {
        "nome":"Colaborador",
        "path":"/",
        "element": <ColaboradorPage/>
    },
    {
        "nome":"Setor",
        "path":"/setor",
        "element": <SetorPage />
    }
]

const tituloBrand="Cadastro de Colaborador";

export default menuLink;

export { tituloBrand };