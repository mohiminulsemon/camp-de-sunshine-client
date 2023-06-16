import axios from "axios";

// Add a booking
export const addBooking = async (bookdata, user) => {
  const bookingData = {
    classname: bookdata.classname,
    image: bookdata.image,
    instructorName: bookdata.instructorName,
    instructorEmail: bookdata.instructorEmail,
    availableSeats: bookdata.availableSeats,
    price: bookdata.price,
    studentEmail: user.email,
  };

  try {
    const response = await axios.post(
      "https://camp-server.vercel.app/bookings",
      bookingData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error("An error occurred while adding the booking.");
  }
};


// Get all bookings for a user by email
export const getBookings = async (email) => {
  const response = await fetch(
    `https://camp-server.vercel.app/bookings/${email}`
  );
  const data = await response.json();
  return data;
};

// payment status
export const getPayment = async (bookingId) => {
  // Fetch the current class details
  //  const response = await fetch(`https://camp-server.vercel.app/classes/${classID}`);
  //  const classData = await response.json();
  // console.log(classData);
  //  // Update the available seats value
  //  const updatedSeats =classData.availableSeats - 1;

  //  // Update the class with the reduced available seats
  //  const updatedClass = {
  //    ...classData,
  //    availableSeats: updatedSeats,
  //  };
  //  // Make a PATCH request to update the class
  //  const patchResponse = await fetch(`https://camp-server.vercel.app/classes/${classID}`, {
  //   method: "PATCH",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  //   body: JSON.stringify(updatedClass),
  // })
  // .then((res) => res.json())

  //payment status update
  const currentStatus = {
    status: "paid",
  };

  return fetch(`https://camp-server.vercel.app/bookings/${bookingId}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentStatus),
  }).then((res) => res.json());
};

//get all the bookings
export const getAllBookings = async () => {
  const response = await fetch(`https://camp-server.vercel.app/bookings`);
  const data = await response.json();
  return data;
};

// delete a booking
export const deleteBooking = async (id) => {
  const response = await fetch(
    `https://camp-server.vercel.app/bookings/${id}`,
    {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    }
  );

  const data = await response.json();
  return data;
};
