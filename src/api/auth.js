import axios from "axios";

// save a user to database
export const saveUser = (user) => {
  const currentUser = {
    email: user.email,
    name: user.displayName,
    image: user.photoURL,
    // role: "student",
  };

  axios
    .put(`https://camp-server.vercel.app/users/${user?.email}`, currentUser, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => res.data)
    .then((data) => console.log(data))
    .catch((error) => console.error(error));
};

// Get all users
export const allusers = async () => {
  const response = await fetch(`https://camp-server.vercel.app/users`);
  const data = await response.json();
  return data;
};

// become a instructor
export const becomeInstructor = (email) => {
  const currentUser = {
    role: "instructor",
  };

  return fetch(`https://camp-server.vercel.app/users/${email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  }).then((res) => res.json());
};

// become an admin
export const becomeAdmin = (email) => {
  const currentUser = {
    role: "admin",
  };

  return fetch(`https://camp-server.vercel.app/users/${email}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  }).then((res) => res.json());
};

// Get role
export const getRole = async (email) => {
  const response = await fetch(`https://camp-server.vercel.app/users/${email}`);
  const user = await response.json();
  return user?.role;
};
