import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import RootLayout from './layout/RootLayout'
import {About, Careers, Home, Login, Security, SignUp} from './pages'

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index element={<Home/>}/>
        <Route path='/careers' element={<Careers/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/security' element={<Security/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
      </Route>
    )
  )
  return <RouterProvider router={router}/>
}

export default App;
