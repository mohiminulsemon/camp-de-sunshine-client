import { useState, useEffect, useContext } from "react";
import { getBookings, getPayment } from "../../../api/bookings";
import { AuthContext } from "../../../providers/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const PaymentPage = () => {
  const [selectedClasses, setSelectedClasses] = useState([]);
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  // console.log(user?.email);

  const { id } = useParams();
    console.log(id);

  useEffect(() => {
    // Fetch selected classes from the API for the logged-in student
    getBookings(user?.email)
      // getAllBookings()
      .then((classes) => {
        const filteredClasses = classes.filter(
          (classItem) => classItem.status !== "paid"
        );
        setSelectedClasses(filteredClasses);
      });
  }, []);

  //   console.log(selectedClasses);
  const handlePayment = (bookingId) => {
    // Remove the selected class by ID
    getPayment(bookingId)
      .then(() => {
        // Remove the class from the state
        // setSelectedClasses((prevClasses) =>
        //   prevClasses.filter((classItem) => classItem.id !== classId)
        // );
        toast.success("Paid success!");
        navigate("/dashboard/enrolled");
      })
      .catch((error) => {
        console.error("Error selected class:", error);
      });
  };

  return (
    <div className="flex flex-wrap justify-center">
      {selectedClasses.map((item) => (
        <div className="flex items-center justify-center">
          <div
            key={item.id}
            className="max-w-md mx-4 my-6  rounded-md shadow-xl bg-indigo-200 p-6"
          >
            <h4 className="text-xl font-bold">{item.classname}</h4>
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-black font-bold">Price:</h4>
              <h4>{item.price}</h4>
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-black font-bold">Seats:</span>
              <span>{item.availableSeats}</span>
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-black font-bold">Students:</span>
              <span>20</span>
            </div>
            <div className="flex items-center justify-between mb-4">
              <span className="text-black font-bold">Your Email:</span>
              <span>{item.studentEmail}</span>
            </div>
            <button
              className="mt-4 px-4 py-2 rounded-md bg-blue-500 text-white"
              onClick={() => handlePayment(item._id)}
            >
              Pay Now
            </button>
          </div>
          <div className="ml-8">
            <img
              src={item.image}
              className="object-cover h-64 w-64 rounded-md shadow-lg"
              alt=""
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PaymentPage;
