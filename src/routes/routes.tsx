import App from "../App";
import { dadosPreviewSpotifyAnderson } from "../components/Preview/dados";
import Preview from "../components/Preview/Preview";
import SpotifyDiaDosPais from "../components/Preview/temas/spotify/SpotifyDiaDosPais";

const routes = [
    {
        path: '/',
        element: <App />,
        errorElement: <h1>ERRO 404! Página não encontrada.</h1>,
        children: [
            {
                path: '/marlos',
                element: <Preview />
            },
            {
                path: '/anderson',
                element: <SpotifyDiaDosPais model={dadosPreviewSpotifyAnderson} />
            },
        ]
    }
]

export default routes;