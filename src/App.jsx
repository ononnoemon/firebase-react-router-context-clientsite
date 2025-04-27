import { createBrowserRouter, createRoutesFromElements,Route,RouterProvider } from "react-router-dom"
import Home from "./components/Home"
import AddCoffee from "./components/AddCoffee"
import View,{coffeeLoader} from "./components/View"
import Edit,{coffeeUpdate} from "./components/Edit"
import MainLayout from "./assets/layouts/MainLayout"
import SignIn from "./components/SignIn"
import SignUp from "./components/SignUp"
import Loaders from "./assets/Loaders"
import ProfileContext from "./context/ProfileContext"

function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="addcoffee" element={<AddCoffee />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<SignIn />} />
        <Route path='view' element={<View />} loader={coffeeLoader} />
        <Route path='edit/:id' element={<Edit />} loader={coffeeUpdate} />
            {/* 
            <Route path='about' element={<About />} loader={aboutLoader}/>
            <Route path='update/:id' element={<Update />} loader={updateLoader}/> */}
      </Route>
    )
  )
  

  return (
    <ProfileContext>
     <RouterProvider router={router}/>
    </ProfileContext>
  )
}

export default App
