import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { getClasses } from "../api/classes";
import { Link } from "react-router-dom";
import { allusers } from "../api/auth";

const Instructors = () => {
  const { user, role } = useContext(AuthContext);
  const [instructors, getinstructors] = useState([]);

  useEffect(() => {
    // Fetch all approved classes from the API
    allusers()
      .then((users) => {
        // setClasses(classes);
        const filteredUsers = users.filter(
          (user) => user.role === "instructor"
        );
        getinstructors(filteredUsers);
      })
      .catch((error) => {
        console.error("Error fetching classes:", error);
      });
  }, [instructors]);

  return (
    <div className="max-w-screen mx-auto my-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
        {instructors.map((classItem) => (
          <div
            key={classItem._id}
            className={
              "p-4 rounded-lg shadow-xl overflow-hidden w-80 mx-auto flex flex-col justify-between bg-gray-400"
            }
          >
            <img
              src={classItem.image}
              alt={classItem.name}
              className="w-44 h-44 rounded-full mx-auto"
            />
            <div className="p-4">
              <p className="mb-2">
                <span className="font-bold">Instructor Name: </span>
                {classItem.name}
              </p>
              <p className="mb-2">
                <span className="font-bold">Email: </span>
                {classItem.email}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
