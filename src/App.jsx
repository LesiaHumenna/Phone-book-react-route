import "./App.css";

import FormAddUser from "./page/FormAddUser";
import ListContacts from "./page/ListContacts";
import Home from "./page/Home";
import ErrorPage from "./page/ErrorPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/list",
          element: <ListContacts/>,
        },
        {
          path: "/formAdd",
          element: <FormAddUser/>,
        }
      ],
    },
  ]);

  // const [route, setRoute] = useState("home");
  

  // const handleRouteChange = (newToogle) => {
    // setRoute(newToogle);
    // console.log(newToogle);
  // };


  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
