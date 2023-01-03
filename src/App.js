import { Route, Routes } from "react-router-dom"
import {Home} from "./Pages/Home"
import {Person} from "./pages/Person"



function app(){
  retrun (
    <Routes>
      <Route path="/" element={ <home /> } />
      <Route path="/Persons" element={<Person/>} />
    </Routes>
  )
}
  
export default app