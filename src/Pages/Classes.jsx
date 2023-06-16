import { useState, useEffect, useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { getAllClasses } from "../api/classes";
import { addBooking } from "../api/bookings";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Classes = () => {
  const { user, role } = useContext(AuthContext);
  const [classes, setClasses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch all approved classes from the API
    getAllClasses()
      .then((classes) => {
        // setClasses(classes);
        const sortedClasses = classes.sort(
          (a, b) => b.availableSeats - a.availableSeats
        );
        setClasses(sortedClasses);
      })
      .catch((error) => {
        console.error("Error fetching classes:", error);
      });
  }, []);

  const handleSelectClass = (classItem) => {
    // Handle the logic for selecting the class
    if (!user) {
      alert("Please log in before selecting a course.");
      return;
    }

    // Disable selection for admin and instructor
    if (role === "admin" || role === "instructor") {
      return;
    }

    // Select the class by ID
    addBooking(classItem, user)
      .then(() => {
        toast.success("class booked!");
        navigate("/dashboard/classes");
      })
      .catch((error) => {
        console.error("Error selecting class:", error);
      });
  };
  return (
    <div className="max-w-screen mx-auto my-10">
      {classes.length === 0 ? (
        <p className="text-center font-bold text-xl text-red-800">
          No approved classes found.
        </p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {classes.map((classItem) => (
            <div
              key={classItem._id}
              className={`p-2  bg-white rounded-lg shadow-xl overflow-hidden w-96 mx-auto flex flex-col justify-between ${
                classItem.availableSeats === 0 ? "bg-red-500" : ""
              }`}
            >
              <img
                src={classItem.image}
                alt={classItem.name}
                className="w-full h-[240px] rounded-lg"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold mb-2">{classItem.name}</h3>
                <p className="mb-2">
                  <span className="font-bold">Instructor: </span>
                  {classItem.instructorName}
                </p>
                <p className="mb-2">
                  <span className="font-bold">Available Seats: </span>
                  {classItem.availableSeats}
                </p>
                <p className="mb-4">
                  <span className="font-bold">Price: </span>
                  {classItem.price} $
                </p>
                <button
                  className={`px-4 py-2 rounded-md text-white ${
                    classItem.availableSeats === 0 ||
                    role === "admin" ||
                    role === "instructor"
                      ? "bg-gray-300 cursor-not-allowed"
                      : "bg-blue-500 hover:bg-blue-600"
                  }`}
                  onClick={() => handleSelectClass(classItem)}
                  disabled={
                    classItem.availableSeats === 0 ||
                    role === "admin" ||
                    role === "instructor"
                  }
                >
                  {user ? "Add to list" : "Log in to Select"}
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Classes;
