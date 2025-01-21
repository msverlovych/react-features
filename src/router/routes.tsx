import { createBrowserRouter } from "react-router";
import Home from "../pages/home";
import MainLayout from "../layouts/main-layout";
// import UsePage from "../pages/use-page";
// import FormAction from "../pages/form-action-page";
import UseEffect from "../pages/use-effect";
import UseMemo from "../pages/Memoization/UseMemo";
import ReactMemo from "../pages/Memoization/ReactMemo";
import UseCallback from "../pages/use-callback";
import UseRef from "../pages/use-ref";

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home /> },
      // { path: '/use', element: <UsePage /> },
      // { path: '/form-action', element: <FormAction /> }
      { path: '/use-effect', element: <UseEffect /> },
      { path: '/use-memo', element: <UseMemo /> },
      { path: '/react-memo', element: <ReactMemo /> },
      { path: '/use-callback', element: <UseCallback /> },
      { path: '/use-ref', element: <UseRef /> }
    ],
  },
])