import { useState, useEffect, useContext } from "react";
import { getAllClasses, getClasses } from "../../api/classes";
import { AuthContext } from "../../providers/AuthProvider";

const MyClasses = () => {
  const { user } = useContext(AuthContext);
  // console.log(user)
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    // Fetch instructor's classes from the API
    getAllClasses()
      // getClasses(user.email)

      .then((classes) => {
        setClasses(classes);
      })
      .catch((error) => {
        console.error("Error fetching classes:", error);
      });
  }, []);

  return (
    <div>
      {classes && classes.length > 0 ? (
        <table className="w-full bg-white border border-gray-200 rounded shadow">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4">Class Name</th>
              <th className="py-2 px-4">Status</th>
              <th className="py-2 px-4">Total Enrolled Students</th>
              <th className="py-2 px-4">Feedback</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((classItem,index) => (
              <tr key={index} className="border-2 border-gray-200">
                <td className="py-2 px-4">{classItem.classname}</td>
                <td className="py-2 px-4">{classItem.status}</td>
                <td className="py-2 px-4">
                  {classItem.enrolledStudents}
                </td>
                <td className="py-2 px-4">
                  {classItem.status === "denied" ? classItem.feedback : "-"}
                </td>
                <td className="py-2 px-4">
                  <button className="px-3 py-2 rounded-md bg-blue-500 text-white">
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div className="pt-12">
          <div>
           <h2>No classe Available !</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyClasses;
