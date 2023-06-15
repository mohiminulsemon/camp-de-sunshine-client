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
  const response = await fetch(`https://camp-server.vercel.app/bookings`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(bookingData),
  });

  const data = await response.json();
  return data;
};



// Get all bookings for a user by email
export const getBookings = async (email) => {
  const response = await fetch(`https://camp-server.vercel.app/bookings/${email}`);
  const data = await response.json();
  return data;
};

// payment status
export const getPayment = (bookingId) => {
  const currentStatus = {
    status: "paid",
  };

  return fetch(`https://camp-server.vercel.app/bookings/${bookingId}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentStatus),
  })
    .then((res) => res.json())
};



//get all the bookings
export const getAllBookings = async () => {
  const response = await fetch(`https://camp-server.vercel.app/bookins`);
  const data = await response.json();
  return data;
};


// delete a booking
export const deleteBooking = async (id) => {
  const response = await fetch(`https://camp-server.vercel.app/bookings/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  });

  const data = await response.json();
  return data;
};
