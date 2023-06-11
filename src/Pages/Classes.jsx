import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Classes = () => {
  const { user } = useContext(AuthContext);

  const classes = [
    {
      _id: "6485f10a406948a1eb0c6280",

      image: "https://i.ibb.co/9Wsn3k1/21251890-6375791.jpg",
      name: "Cricket mania",
      instructorName: "semon",
      availableSeats: 10,
      price: 50,
    },
    {
      _id: "6485f10a406948a1eb0c6281",
      image: "https://i.ibb.co/9GvVgZm/soccer-into-goal-success-concept.jpg",
      name: "Football mania",
      instructorName: "eram",
      availableSeats: 5,
      price: 75,
    },
    // Add more class objects as needed
  ];

  const handleSelectClass = (classId) => {
    // Handle the logic for selecting the class
  };
  return (
    <div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {classes.map((classItem) => (
          <div
            key={classItem.id}
            className={`p-4 rounded shadow ${
              classItem.availableSeats === 0 ? "bg-red-100" : "bg-white"
            }`}
          >
            <img
              src={classItem.image}
              alt={classItem.name}
              className="w-full h-auto mb-4 rounded"
            />
            <h2 className="text-lg font-bold">{classItem.name}</h2>
            <p className="text-gray-600 mb-2">
              Instructor: {classItem.instructorName}
            </p>
            <p className="text-gray-600 mb-2">
              Available Seats: {classItem.availableSeats}
            </p>
            <p className="text-gray-600 mb-2">Price: {classItem.price}</p>
            {user ? (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => handleSelectClass(classItem.id)}
                disabled={
                  classItem.availableSeats === 0 ||
                  user.isAdmin ||
                  user.isInstructor
                }
              >
                Select
              </button>
            ) : (
              <p className="text-red-500">Please log in to select this class</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Classes;
