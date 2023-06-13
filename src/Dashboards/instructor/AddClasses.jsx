import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { addClass } from "../../api/classes";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AddClasses = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleAddClass = (event) => {
    // Perform class creation logic and database update here
    // Set the status field to "pending"
    event.preventDefault();

    const classname = event.target.classname.value;
    const image = event.target.image.value;
    const instructorName = event.target.instructorName.value;
    const instructorEmail = event.target.instructorEmail.value;
    const availableSeats = event.target.availableSeats.value;
    const price = event.target.price.value;
    const description = event.target.description.value;
    const status = "pending";

    const classData = {
      classname,
      image,
      instructorName,
      instructorEmail,
      availableSeats: parseFloat(availableSeats),
      price: parseFloat(price),
      description,
      status,
    };
    //  post  data to server
    addClass(classData)
      .then((data) => {
        console.log(data);
        toast.success("class Added!");
        navigate("/dashboard/myclasses");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
        Add a Class
      </h2>
      <form onSubmit={handleAddClass} className="max-w-lg mx-auto">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Class Name
            </label>
            <input
              type="text"
              name="classname"
              placeholder="Class Name"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Available Seats
            </label>
            <input
              type="text"
              name="availableSeats"
              placeholder="Available Seats"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Price
            </label>
            <input
              type="text"
              name="price"
              placeholder="Price"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
            <input
              type="text"
              name="description"
              placeholder="Description"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Instructor Name
            </label>
            <input
              type="text"
              name="instructorName"
              value={user?.displayName}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Instructor's Email
            </label>
            <input
              type="text"
              name="instructorEmail"
              value={user?.email}
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
            />
          </div>
        </div>
        <div className="mt-6">
          <label className="block text-sm font-medium text-gray-700">
            Photo URL
          </label>
          <input
            type="text"
            name="image"
            placeholder="Photo URL"
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
          />
        </div>
        <div className="mt-6">
          <button
            type="submit"
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Add Class
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddClasses;
