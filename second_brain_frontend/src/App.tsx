import { Dashbaord } from "./pages/dashboard";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import { Signup } from "./pages/signup";
import { Signin } from "./pages/signin";
function App(){

  return <BrowserRouter >
    <Routes >
      <Route path="/signup" element={<Signup />}/>  
      <Route path="/signin" element={<Signin />}/>  
      <Route path="/dashboard" element={<Dashbaord />}/>  
    </ Routes>
  </BrowserRouter>
}

export default App