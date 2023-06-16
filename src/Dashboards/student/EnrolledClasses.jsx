import React, { useContext, useEffect, useState } from "react";
import { getBookings } from "../../api/bookings";
import { AuthContext } from "../../providers/AuthProvider";

const EnrolledClasses = () => {
  const [enrolledClasses, setEnrolledClasses] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    // Fetch enrolled classes from the API for the logged-in student
    getBookings(user?.email).then((classes) => {
      const filteredClasses = classes.filter(
        (classItem) => classItem.status === "paid"
      );
      setEnrolledClasses(filteredClasses);
    });
  }, [enrolledClasses]);

  return (
    <div className="max-w-2xl mx-auto my-8">
      <h2 className="text-2xl font-bold mb-4 text-center">
        My Selected Classes
      </h2>
      {enrolledClasses.length === 0 ? (
        <p>No selected classes found.</p>
      ) : (
        <table className="w-full bg-white border border-gray-200 rounded shadow text-center">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4">Class image</th>
              <th className="py-2 px-4">Class Name</th>
              <th className="py-2 px-4">Instructor Name</th>
              <th className="py-2 px-4">Price</th>
              <th className="py-2 px-4">Status</th>
            </tr>
          </thead>
          <tbody>
            {enrolledClasses.map((classItem) => (
              <tr key={classItem._id} className="border-2 border-gray-200">
                <td className="py-2 px-4">
                  <img src={classItem.image} alt="" className="w-20 h-20" />
                </td>
                <td className="py-2 px-4">{classItem.classname}</td>
                <td className="py-2 px-4">{classItem.instructorName}</td>
                <td className="py-2 px-4">{classItem.price}</td>
                <td className="py-2 px-4"> 
                <div className="p-2 border-2 border-gray-700 rounded bg-rose-400">
                {classItem.status}
                </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default EnrolledClasses;
