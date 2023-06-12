import { useState, useEffect } from 'react';
import { allusers, becomeAdmin, becomeInstructor } from '../../api/auth';

const ManageUsers = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      allusers()
      .then(users =>{
        setUsers(users)
      })
    }, []);
  
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
        <h2 className="text-2xl font-bold mb-4">Manage Users</h2>
        {users.length === 0 ? (
          <p>No users found.</p>
        ) : (
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Role</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user) => (
                <tr key={user.id}>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.role}</td>
                  <td>
                    
                      <>
                        <button
                          onClick={() => handleMakeInstructor(user.email)}
                          disabled={user.role === 'instructor'}
                        >
                          Make Instructor
                        </button>
                        <button
                          onClick={() => handleMakeAdmin(user.email)}
                          disabled={user.role === 'admin'}
                        >
                          Make Admin
                        </button>
                      </>
                    
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