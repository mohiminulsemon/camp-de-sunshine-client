import { useState, useEffect, useContext } from 'react';
import { AuthContext } from "../providers/AuthProvider";
import { getAllClasses } from "../api/classes";
import { addBooking } from '../api/bookings';
import { useNavigate } from 'react-router-dom';
import toast from "react-hot-toast";

const Classes = () => {
  const { user ,role} = useContext(AuthContext);
  const [classes, setClasses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch all approved classes from the API
    getAllClasses()
      .then((classes) => {
        setClasses(classes);
      })
      .catch((error) => {
        console.error('Error fetching classes:', error);
      });
  }, []);



  const handleSelectClass = (classItem) => {
    // Handle the logic for selecting the class
    if (!user) {
      alert('Please log in before selecting a course.');
      return;
    }

    // Disable selection for admin and instructor
    if (role === 'admin' || role === 'instructor') {
      return;
    }

    // Select the class by ID
    addBooking(classItem,user)
      .then(() => {
        // Update the class availability in the state
        // setClasses((prevClasses) =>
        //   prevClasses.map((classItem) => {
        //     if (classItem._id === classItem._id) {
        //       return {
        //         ...classItem,
        //         availableSeats: classItem.availableSeats - 1,
        //       };
        //     }
        //     return classItem;
        //   })
        // );
        toast.success("class booked!");
        navigate("/dashboard/classes");
      })
      .catch((error) => {
        console.error('Error selecting class:', error);
      });
  };
  return (
    <div>
    <h2 className="text-2xl font-bold mb-4">Classes</h2>
    {classes.length === 0 ? (
      <p>No approved classes found.</p>
    ) : (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {classes.map((classItem) => (
          <div
            key={classItem._id}
            className={`p-4 bg-white rounded shadow ${
              classItem.availableSeats === 0 ? 'bg-red-100' : ''
            }`}
          >
            <img src={classItem.image} alt={classItem.name} className="mb-4" />
            <h3 className="text-xl font-bold mb-2">{classItem.name}</h3>
            <p className="mb-2">Instructor: {classItem.instructorName}</p>
            <p className="mb-2">Available Seats: {classItem.availableSeats}</p>
            <p className="mb-4">Price: {classItem.price}</p>
            <button
              className="px-4 py-2 rounded-md bg-blue-500 text-white"
              onClick={() => handleSelectClass(classItem)}
              disabled={
                
                classItem.availableSeats === 0 ||
                role === 'admin' ||
                role === 'instructor'
              }
            >
              {user ? 'Select' : 'Log in to Select'}
            </button>
          </div>
        ))}
      </div>
    )}
  </div>
  );
};

export default Classes;
