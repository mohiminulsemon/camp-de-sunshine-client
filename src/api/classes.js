// Add a class
export const addClass = async (classData) => {
  const response = await fetch(`https://camp-server.vercel.app/classes`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(classData),
  });

  const data = await response.json();
  return data;
};

// Get all classes
export const getAllClasses = async () => {
  const response = await fetch(`https://camp-server.vercel.app/classes`);
  const data = await response.json();
  return data;
};

//get filtered classes for instructor
export const getClasses = async (email) => {
  const response = await fetch(`https://camp-server.vercel.app/classes/${email}`);
  const data = await response.json();
  return data;
};

// Get single class
export const getClass = async (id) => {
  const response = await fetch(`https://camp-server.vercel.app/classes/${id}`);
  const data = await response.json();
  return data;
};

// Delete a class
export const deleteClass = async (id) => {
  const response = await fetch(`https://camp-server.vercel.app/classes/${id}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
    },
  });
  const result = await response.json();
  return result;
};

// approve class status
export const approveClass = (classId) => {
  const currentStatus = {
    status: "approved",
  };

  return fetch(`https://camp-server.vercel.app/classes/${classId}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentStatus),
  })
    .then((res) => res.json())
};
// deny class status
export const denyClass = (classId) => {
  const currentStatus = {
    status: "denied",
  };

  return fetch(`https://camp-server.vercel.app/classes/${classId}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentStatus),
  })
    .then((res) => res.json())
};
// feedback
export const sendFeedback = (classId, feed) => {
  const setFeedback = {
    feedback: feed,
  };

  return fetch(`https://camp-server.vercel.app/classes/${classId}`, {
    method: "PATCH",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(setFeedback),
  })
    .then((res) => res.json())
};
