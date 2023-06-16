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
        My Enrolled Classes
      </h2>
      {enrolledClasses.length === 0 ? (
        <p className="text-center font-bold text-xl text-red-800">
          No enrolled classes found.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {enrolledClasses.map((classItem) => (
            <div
              key={classItem._id}
              className="bg-white rounded shadow p-4 flex items-center justify-evenly"
            >
              <img
                src={classItem.image}
                alt=""
                className="w-28 h-w-28 rounded mr-4"
              />
              <div>
                <h3 className="text-lg font-bold mb-1">{classItem.classname}</h3>
                <p className="text-gray-600 mb-1">{classItem.instructorName}</p>
                <p className="text-gray-600">{classItem.price}</p>
               
              </div>
              <div className="px-3 py-2 rounded bg-rose-400 text-white mt-2">
                  {classItem.status}
                </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EnrolledClasses;
