import { createBrowserRouter } from "react-router";
import Home from "../pages/home";
import MainLayout from "../layouts/main-layout";
import UseEffect from "../pages/use-effect";
import Hero from "../pages/flex-box-cards/Hero";
import FlexBox from "../pages/flex-box/FlexBox";
import SvgIcons from "../pages/svg-icons";

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/use-effect', element: <UseEffect /> },
      { path: '/flex-box-cards', element: <Hero /> },
      { path: '/flex-box', element: <FlexBox /> },
      { path: '/svgs', element: <SvgIcons /> }
    ],
  },
])