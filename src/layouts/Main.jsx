import { Outlet } from "react-router-dom"
import Nav from "../Pages/Nav"
import Footer from "../Pages/Footer"

const Main = () => {
  return (
    <div className="container mx-auto">
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  )
}

export default Main
