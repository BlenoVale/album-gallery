import { useRoutes } from "react-router-dom";
import { AlbumPage } from "../pages/AlbumPage";
import { Home } from "../pages/Home";
import { PhotoPage } from "../pages/PhotoPage";

export const MainRoutes = () => {
    return useRoutes([
        { path: '/', element: <Home /> },
        { path: '/album/:slug', element: <AlbumPage /> },
        { path: '/foto/:slug', element: <PhotoPage /> }
    ]);
}
