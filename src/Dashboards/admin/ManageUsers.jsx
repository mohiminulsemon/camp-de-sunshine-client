import { useState, useEffect } from 'react';
import { allusers, becomeAdmin, becomeInstructor } from '../../api/auth';

const ManageUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      allusers()
      .then(users =>{
        setUsers(users)
      })
    }, [users]);
  
    // Update the user's role as an instructor in the database

    const handleMakeInstructor =  (email) => {
      
        becomeInstructor(email);
     
    };
  
    // Update the user's role as an admin in the database

    const handleMakeAdmin =  (email) => {
      
        becomeAdmin(email);
    
    };

    return (
        <div>
      <h2 className="text-2xl font-bold mb-4 text-center">Manage Users</h2>
      {users.length === 0 ? (
        <p>No users found.</p>
      ) : (
        <table className="w-full bg-white border border-gray-200 rounded shadow text-center">
          <thead>
            <tr className="bg-gray-100">
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Role</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user,index) => (
              <tr key={index} className="border-2 border-gray-200">
                <td className="py-2 px-4">{user.name}</td>
                <td className="py-2 px-4">{user.email}</td>
                <td className="py-2 px-4">{user.role}</td>
                <td className="py-2 px-4">
                  <div className="flex space-x-2 justify-center">
                    <button
                      onClick={() => handleMakeInstructor(user.email)}
                      disabled={user.role === 'instructor' || user.role === 'admin'}
                      className="px-3 py-2 rounded-md bg-green-500 text-white disabled:bg-gray-400"
                    >
                      Make Instructor
                    </button>
                    <button
                      onClick={() => handleMakeAdmin(user.email)}
                      disabled={user.role === 'admin'}
                      className="px-3 py-2 rounded-md bg-blue-500 text-white disabled:bg-gray-400"
                    >
                      Make Admin
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
    );
};

export default ManageUsers;