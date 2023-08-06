import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
// Layouts
import RootLayout from "./layouts/RootLayout";
import Dashboard from "./layouts/Dashboard";
// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Classes from "./pages/Classes";
import Instructors from "./pages/Instructors";
import AboutUs from "./pages/AboutUs";
import Register from "./pages/Register";
import NotFound from "./pages/NotFound";
// Dashboard pages
import SelectedClasses from "./pages/dashboard/Students/SelectedClasses";
import EnrolledClasses from "./pages/dashboard/Students/EnrolledClasses";
import PaymentHistory from "./pages/dashboard/Students/PaymentHistory";
import ManageUser from "./pages/dashboard/admin/ManageUser";
import ManageClasses from "./pages/dashboard/admin/ManageClasses";
import AddNewClass from "./pages/dashboard/instructors/AddNewClass";
import MyClasses from "./pages/dashboard/instructors/MyClasses";
import EnrolledStudents from "./pages/dashboard/instructors/EnrolledStudents";
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
          <Route path="about-us" element={<AboutUs />} />
        </Route>
        <Route path="dashboard" element={<Dashboard />}>
          <Route path="my-selected-classes" element={<SelectedClasses />} />
          <Route path="my-enrolled-classes" element={<EnrolledClasses />} />
          <Route path="payment-history" element={<PaymentHistory />} />
          <Route path="manage-users" element={<ManageUser />} />
          <Route path="manage-classes" element={<ManageClasses />} />
          <Route path="add-new-class" element={<AddNewClass />} />
          <Route path="my-classes" element={<MyClasses />} />
          <Route
            path="my-classes/:id/enrolled-students"
            element={<EnrolledStudents />}
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>,
    ])
  );
  return <RouterProvider router={router} />;
};

export default App;
