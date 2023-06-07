import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
// Layouts
import RootLayout from "./layouts/RootLayout";
// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Classes from "./pages/Classes";
import Instructors from "./pages/Instructors";
import Register from "./pages/Register";
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements([
      <Route>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="classes" element={<Classes />} />
          <Route path="/instructors" element={<Instructors />} />
        </Route>
      </Route>,
    ])
  );
  return <RouterProvider router={router} />;
};

export default App;
