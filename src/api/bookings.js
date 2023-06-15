// Add a booking
export const addBooking = async (bookdata, user) => {
  const bookingData = {
    className: bookdata.className,
    image: bookdata.image,
    instructorName: bookdata.instructorName,
    instructorEmail: bookdata.instructorEmail,
    availableSeats: bookdata.availableSeats,
    price: bookdata.price,
    studentEmail: user.email,
  };
  const response = await fetch(`http://localhost:5000/bookings`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(bookingData),
  });

  const data = await response.json();
  return data;
};

// update class  status
export const updateStatus = async (id, status) => {
  const response = await fetch(`http://localhost:5000/rooms/status/${id}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ status }),
  });
  const data = await response.json();
  return data;
};

// Get all bookings for a user by email
export const getBookings = async (email) => {
  const response = await fetch(`http://localhost:5000/bookings/${email}`);
  const data = await response.json();
  return data;
};

//get all the bookings
export const getAllBookings = async () => {
  const response = await fetch(`http://localhost:5000/bookins`);
  const data = await response.json();
  return data;
};


// delete a booking
export const deleteBooking = async (id) => {
  const response = await fetch(`http://localhost:5000/bookings/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  });

  const data = await response.json();
  return data;
};
