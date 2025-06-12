import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import DashBoard from './pages/DashBoard.jsx';
import InitDashBoard from './pages/InitDashBoard.jsx';
import ErrorPage  from './pages/ErrorPage.jsx';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        label: "Accueil",
        element: <InitDashBoard />,
      },
      {
        path: "/dashBoard-mocked/:id",
        element: <DashBoard useMockData={true}  />,
      },
      {
        path: "/dashBoard/:id",
        element: <DashBoard useMockData={false}  />,
      },
      {
        path: "/profil",
        label: "Profil",
        element: <ErrorPage />,
      },
      {
        path: "/setting",
        label: "Réglage",
        element: <ErrorPage />,
      },
      { 
        path: "/community", 
        label: "Communauté",
        element: <ErrorPage /> 
      },

      {
        path: "*", 
        element: (
          <ErrorPage/>
        ), 
      },
    ],
  },
]);