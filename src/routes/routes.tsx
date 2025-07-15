import App from "../App";
import Preview from "../components/Preview/Preview";
import Home from "../pages/public/Home/Home";

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <h1>ERRO 404! Página não encontrada.</h1>,
        children: [
            {
                path: '/',
                element: <Preview />
            },
        ]
    }
]

export default routes;