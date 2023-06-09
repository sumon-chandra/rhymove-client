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
import NotFound from "./pages/NotFound";
import Dashboard from "./layouts/Dashboard";
// Dashboard pages
import SelectedClasses from "./pages/dashboard/Students/SelectedClasses";
import EnrolledClasses from "./pages/dashboard/Students/EnrolledClasses";
import ManageUser from "./pages/dashboard/admin/ManageUser";
const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements([
      <Route>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="classes" element={<Classes />} />
          <Route path="instructors" element={<Instructors />} />
        </Route>
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="my-selected-classes" element={<SelectedClasses />} />
          <Route path="my-enrolled-classes" element={<EnrolledClasses />} />
          <Route path="manage-users" element={<ManageUser />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>,
    ])
  );
  return <RouterProvider router={router} />;
};

export default App;
