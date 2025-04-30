import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/Home";
import AddCoffee from "./components/AddCoffee";
import View, { coffeeLoader } from "./components/View";
import Edit, { coffeeUpdate } from "./components/Edit";
import MainLayout from "./assets/layouts/MainLayout";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Loaders from "./assets/Loaders";
import ProfileContext from "./context/ProfileContext";
import { AuthContext } from "./context/AuthProvider";
import AuthProvider from "./context/AuthProvider";
import Users,{userLoader} from "./components/Users";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="addcoffee" element={<AddCoffee />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="view" element={<View />} loader={coffeeLoader} />
        <Route path="edit/:id" element={<Edit />} loader={coffeeUpdate} />
        <Route path="users" element={<Users />} loader={userLoader}  />
      </Route>
    )
  );

  return (
    // <AuthContext>
    //   <ProfileContext>
    //     <RouterProvider router={router} />
    //   </ProfileContext>
    // </AuthContext>
     <AuthProvider>
       <RouterProvider router={router} />
   </AuthProvider>
  );
}

export default App;
