import { createBrowserRouter } from "react-router";
import Home from "../pages/home";
import MainLayout from "../layouts/main-layout";
import UseEffect from "../pages/use-effect";
import Hero from "../pages/flex-box-cards/Hero";
import FlexBox from "../pages/flex-box/FlexBox";
import SvgIcons from "../pages/svg-icons";
import ActivityPage from "../pages/activity";
import UseEffectEventPage from "../pages/use-effect-event";
import UseHookPage from "../pages/use-hook";
import React19OverviewPage from "../pages/react19-overview";
import FormAction from "../pages/form-action-page";
import UseFormStatusPage from "../pages/use-form-status";
import UseOptimisticPage from "../pages/use-optimistic";

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/use-effect', element: <UseEffect /> },
      { path: '/flex-box-cards', element: <Hero /> },
      { path: '/flex-box', element: <FlexBox /> },
      { path: '/svgs', element: <SvgIcons /> },
      { path: '/activity', element: <ActivityPage /> },
      { path: '/use-effect-event', element: <UseEffectEventPage /> },
      { path: '/use-hook', element: <UseHookPage /> },
      { path: '/react19-overview', element: <React19OverviewPage /> },
      { path: '/form-action', element: <FormAction /> },
      { path: '/use-form-status', element: <UseFormStatusPage /> },
      { path: '/use-optimistic', element: <UseOptimisticPage /> }
    ],
  },
])