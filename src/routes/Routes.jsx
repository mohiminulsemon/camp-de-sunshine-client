import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'
import Classes from '../Pages/Classes'
import Instructors from '../Pages/Instructors'
import Dash from '../layouts/Dash'
import Home from '../HomeComponents/Home'
import SelectedClasses from '../Dashboards/student/SelectedClasses'
import EnrolledClasses from '../Dashboards/student/EnrolledClasses'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home></Home>
    }, 
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
    element: <Dash></Dash>,
    children: [
      { path: '/dashboard/classes', element: <SelectedClasses /> },
      { path: '/dashboard/enrolled', element: <EnrolledClasses /> },
    ]
} 
])
