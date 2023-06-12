import { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import avatarImg from "../assets/images/placeholder.jpg";
import logo from "../assets/images/logo.png";
const Nav = () => {
  const { user, logOut, role } = useContext(AuthContext);
  console.log(role);
  // const [isAdmin] = useAdmin();
  // const [cart] = useCart();
  const [showDashboard, setShowDashboard] = useState(false);
  const toggleDashboard = () => {
    setShowDashboard(!showDashboard);
  };
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  const navOptions = (
    <>
      <li>
        <Link to="/" className="font-bold text-base">
          Home
        </Link>
      </li>
      <li>
        <Link to="/instructors" className="font-bold text-base">
          Instructors
        </Link>
      </li>
      <li>
        <Link to="/classes" className="font-bold text-base">
          Classes
        </Link>
      </li>
      {
        // isAdmin ? <li><Link to="/dashboard/adminhome">Dashboard</Link></li> :
        // <li>
        //   <Link to="/dashboard" className="font-bold text-base">
        //     Dashboard
        //   </Link>
        // </li>
      }
      {/* <li>
            <Link to="/dashboard/mycart">
                <button className="btn gap-2">
                    <FaShoppingCart></FaShoppingCart>
                    <div className="badge badge-secondary">+{cart?.length || 0}</div>
                </button>
            </Link>
        </li> */}
    </>
  );

  return (
    <>
      <div className="navbar  bg-opacity-30  bg-white text-black sticky top-0 z-10">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 text-black rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <img src={logo} className="h-10" alt="" />
          <a className="btn btn-ghost normal-case text-xl">
            Camp de <br /> Sunshine
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <img
                className="rounded-full mx-2"
                src={user && user.photoURL ? user.photoURL : avatarImg}
                title={user.displayName}
                height="30"
                width="30"
              />
              <div>
                {/* Dropdown Icon */}
                <label tabIndex={0} className="btn" onClick={toggleDashboard}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16"
                    />
                  </svg>
                </label>
                {showDashboard && (
                  <div className="dashboard-box bg-white shadow-lg absolute right-0 top-16 p-4 text-center">
                    {role === " " && (
                      <div>
                        <div className="my-1">
                          <Link
                            to="/dashboard/classes"
                            className="font-semibold"
                          >
                            My Selected Classes
                          </Link>
                        </div>

                        <div className="my-1">
                          <Link
                            to="/dashboard/enrolled"
                            className="font-semibold"
                          >
                            My Enrolled Classes
                          </Link>
                        </div>
                      </div>
                    )}
                    {role === "instructor" && (
                      <div>
                        <div className="my-1">
                          <Link
                            to="/dashboard/addclasses"
                            className="font-semibold"
                          >
                            Add Classes
                          </Link>
                        </div>

                        <div className="my-1">
                          <Link
                            to="/dashboard/myclasses"
                            className="font-semibold"
                          >
                            My Classes
                          </Link>
                        </div>
                      </div>
                    )}
                    {role === "admin" && (
                      <div>
                        <div className="my-1">
                          <Link
                            to="/dashboard/manageclasses"
                            className="font-semibold"
                          >
                            Manage Classes
                          </Link>
                        </div>

                        <div className="my-1">
                          <Link
                            to="/dashboard/manageusers"
                            className="font-semibold"
                          >
                            Manage users
                          </Link>
                        </div>
                      </div>
                    )}

                    <button
                      onClick={handleLogOut}
                      className="btn btn-ghost text-base"
                    >
                      LogOut
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <li>
                <Link to="/login" className="font-bold text-base">
                  Login
                </Link>
              </li>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Nav;
