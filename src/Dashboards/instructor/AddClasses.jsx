import { useContext, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const AddClasses = () => {
  const { user } = useContext(AuthContext);

  const handleAddClass = event => {
    // Perform class creation logic and database update here
    // Set the status field to "pending"
    event.preventDefault();

    const classname = event.target.classname.value
    const image = event.target.image.value
    const instructorName = event.target.instructorName.value
    const instructorEmail = event.target.instructorEmail.value
    const availableSeats = event.target.availableSeats.value
    const price = event.target.price.value
    const status = 'pending'
    // Reset form fields
    .then(data => {
        const classeData = {
          classname,
          image,
          instructorName,
          instructorEmail,
          availableSeats: parseFloat(availableSeats),
          price: parseFloat(price),
          status,
        
        }
           // post  data to server
        //    addClasses(classData)
        //    .then(data => {
        //      console.log(data)
        //      setUploadButtonText('Uploaded!')
        //      setLoading(false)
        //      toast.success('Room Added!')
        //      navigate('/dashboard/my-listings')
        //    })
        //    .catch(err => console.log(err))
    })
  };
  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-2xl font-bold mb-2">Add a Class</h2>
      <form onSubmit={handleAddClass} >
        <div className="mb-2 form-control">
          <label htmlFor="className" className="label">
            Class Name:
          </label>
          <input
            type="text"
            id="className"
            name="className"
            className="input input-bordered"
          />
        </div>
        <div className="mb-2 form-control">
          <label htmlFor="classImage" className="label">
            Class Image:
          </label>
          <input
            type="text"
            id="classImage"
            name="image"
            className="input input-bordered"
          />
        </div>
        <div className="mb-2 form-control">
          <label htmlFor="instructorName" className="label">
            Instructor Name:
          </label>
          <input
            type="text"
            id="instructorName"
            name="instructorName"
            value={user?.displayName}
            readOnly
            className="input input-bordered"
          />
        </div>
        <div className="mb-2 form-control">
          <label htmlFor="instructorEmail" className="label">
            Instructor Email:
          </label>
          <input
            type="email"
            id="instructorEmail"
            name="instructorEmail"
            value={user?.email}
            readOnly
            className="input input-bordered"
          />
        </div>
        <div className="mb-2 form-control">
          <label htmlFor="availableSeats" className="label">
            Available Seats:
          </label>
          <input
            type="number"
            id="availableSeats"
            name="availableSeats"
            className="input input-bordered"
          />
        </div>
        <div className="mb-2 form-control">
          <label htmlFor="price" className="label">
            Price:
          </label>
          <input type="number" id="price" name="price" className="input input-bordered" />
        </div>
        <button type="submit" className="btn btn-primary">
          Add Class
        </button>
      </form>
    </div>
  );
};

export default AddClasses;
