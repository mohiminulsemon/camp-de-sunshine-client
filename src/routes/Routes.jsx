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
import AddClasses from '../Dashboards/instructor/AddClasses'
import MyClasses from '../Dashboards/instructor/MyClasses'
import ManageClasses from '../Dashboards/admin/ManageClasses'
import ManageUsers from '../Dashboards/admin/ManageUsers'
import Error from '../Pages/Error'
import PaymentPage from '../Dashboards/student/Payment/PaymentPage'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <Error></Error>,
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
    path: '/dashboard',
    element: <Dash></Dash>,
    errorElement: <Error></Error>,
    children: [
      { path: '/dashboard/classes', element: <SelectedClasses /> },
      { path: '/dashboard/enrolled', element: <EnrolledClasses /> },
      { path: '/dashboard/addclasses', element: <AddClasses /> },
      { path: '/dashboard/myclasses', element: <MyClasses /> },
      { path: '/dashboard/manageclasses', element: <ManageClasses /> },
      { path: '/dashboard/manageusers', element: <ManageUsers /> },
      { path: '/dashboard/payment', element: <PaymentPage /> },
    ]
} 
])
