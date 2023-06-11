import React from "react";
import { Link } from "react-router-dom";

const Instructors = () => {
  const instructors = [
    {
      id: "648608d2406948a1eb3cd00f",
      name: "semon",
      email: "semoneram@gmail.com",
      image:
        "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
      role: "admin",
    },
    {
        id: "648608d2406948a1eb3cd010",
        name: "eram",
        email: "eramsemon@gmail.com",
        image:
          "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80",
        role: "instructor",
    },
    // Add more class objects as needed
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Instructors</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {instructors.map((instructor) => (
          <div key={instructor.id} className="bg-white p-4 rounded shadow">
            <img
              src={instructor.image}
              alt={instructor.name}
              className="w-full h-auto mb-4 rounded"
            />
            <h2 className="text-lg font-bold">{instructor.name}</h2>
            <p className="text-gray-600 mb-2">{instructor.email}</p>
            {instructor.numClasses && (
              <p className="text-gray-600 mb-2">
                Number of Classes: {instructor.numClasses}
              </p>
            )}
            {instructor.classes && (
              <p className="text-gray-600 mb-2">
                Classes: {instructor.classes.join(", ")}
              </p>
            )}
            <Link
              to={`/instructors/${instructor.id}/classes`}
              className="text-blue-600 hover:text-blue-800"
            >
              See Classes
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Instructors;
