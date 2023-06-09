import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Login from '../Pages/Login'
import Dashboard from '../Dashboards/Dashboard'
import SignUp from '../Pages/SignUp'
import Classes from '../Pages/Classes'
import Instructors from '../Pages/Instructors'
import Dash from '../layouts/Dash'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
          path: '/login',
          element: <Login></Login>
      }, 
      {
          path: '/classes',
          element: <Classes></Classes>
      }, 
      {
          path: '/signup',
          element: <SignUp></SignUp>
      }, 
      {
          path: '/instructors',
          element: <Instructors></Instructors>
      } 
    ]
  },
  {
    path: 'dashboard',
    element: <Dash></Dash>
} 
])
